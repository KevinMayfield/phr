

import {environment} from '../../environments/environment';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {EventEmitter, Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';



class Oauth2token {
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private smartToken: Oauth2token | undefined;

    private accessToken = undefined;

    tokenChange: EventEmitter<Oauth2token> = new EventEmitter();

   public auth = false;

  constructor(
             private router: Router,
             private http: HttpClient
              ) {

  }

    performGetAccessToken(authCode: string | null): any {


    // https://digital.nhs.uk/developer/guides-and-documentation/security-and-authorisation/user-restricted-restful-apis-nhs-cis2-combined-authentication-and-authorisation

    const bearerToken = 'Basic ' + btoa(environment.oauth2.client_id + ':' + environment.oauth2.client_secret);
    const headers = new HttpHeaders( { 'Content-Type': 'application/x-www-form-urlencoded'});

    const url = environment.oauth2.token;


    const urlParams = new URLSearchParams(
            { grant_type: 'authorization_code'});

    urlParams.append('client_id', environment.oauth2.client_id),
    urlParams.append(  'client_secret', environment.oauth2.client_secret);
    urlParams.append(  'redirect_uri', document.baseURI + 'callback');
    if (typeof authCode === 'string') {
        urlParams.append('code', authCode);
    }

    this.postAny(url, urlParams.toString(),  headers  ).subscribe( (token: any) => {
        // console.log(response);
        this.smartToken = token;
        console.log('OAuth2Token : ' + token);
        this.setAccessToken(token);

        }
      , (error: any) => {
        console.log(error);
      }
      , () => {
        // Emit event
      }
    );
  }

    // tslint:disable-next-line:typedef
    public postAny(url: string | null, body: string, httpHeaders: HttpHeaders) {
        return this.http.post<any>(url as string, body, {headers: httpHeaders});
    }

    public setAccessToken(token: { expires_at: any; expires_in: number; access_token: any; }): any {
        // tslint:disable-next-line:new-parens
        const date = new Date;
        // Create an expires at ..... don't know when we got the token
        token.expires_at = Math.round((new Date().valueOf()) / 1000) + token.expires_in;
        localStorage.setItem('nhsdToken', JSON.stringify(token));
        this.accessToken = token.access_token;
        this.tokenChange.emit(token);
    }
    public hasAccessToken(): boolean {
        return this.getAccessToken() !== undefined;
    }

    public getAccessToken(): any {
        if (localStorage.getItem('nhsdToken') !== undefined) {
            const token: any = JSON.parse(localStorage.getItem('nhsdToken') as any);
            const helper = new JwtHelperService();
            if (this.isTokenExpired(token)) {

                console.log('withings Token expired');
                this.accessToken = undefined;
                //  this.getRefreshToken();
                return undefined;
            }
            if (token !== undefined) {
                this.accessToken = token.access_token;
                return this.accessToken;
            }
        }
        return undefined;
    }


    private deleteAccessToken(): any {
        this.accessToken = undefined;
        localStorage.removeItem('nhsdToken');
    }

    private getTokenExpirationDate(
        decoded: any
    ): Date | null {

        if (!decoded || !decoded.hasOwnProperty('expires_at')) {
            // Invalid format
            localStorage.removeItem('nhsdToken');
            return null;
        }

        const date = new Date(0);
        date.setUTCSeconds(decoded.expires_at);

        return date;
    }

    private isTokenExpired(
        token: any,
        offsetSeconds?: number
    ): boolean {
        if (!token || token === '') {
            return true;
        }
        const date = this.getTokenExpirationDate(token);
        offsetSeconds = offsetSeconds || 0;

        console.log('nhsd token expiry date ' + date);
        if (date === null) {
            return false;
        }
        return !(date.valueOf() > new Date().valueOf() + offsetSeconds * 1000);
    }
}
