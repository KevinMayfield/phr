

import {environment} from '../../environments/environment';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {EventEmitter, Injectable} from '@angular/core';
import {Router} from '@angular/router';


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
    let headers = new HttpHeaders( { 'Content-Type': 'application/x-www-form-urlencoded'});

    const url = environment.oauth2.token;


    const urlParams = new URLSearchParams(
            {'grant_type': 'authorization_code'});

    urlParams.append('client_id', environment.oauth2.client_id),
    urlParams.append(  'client_secret', environment.oauth2.client_secret);
    urlParams.append(  'redirect_uri', document.baseURI+'callback');
    if (typeof authCode === "string") {
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

    setAccessToken(token: { expires_at: any; expires_in: number; access_token: any; }) {
        var date = new Date
        // Create an expires at ..... don't know when we got the token
        token.expires_at = Math.round((new Date().valueOf())/1000) + token.expires_in;
        localStorage.setItem('nhsdToken', JSON.stringify(token));
        this.accessToken = token.access_token;
        this.tokenChange.emit(token);
    }
    public hasAccessToken() : boolean {

        if (this.accessToken !== undefined) return true;
        return false;
    }


    private deleteAccessToken() {
        this.accessToken = undefined;
        localStorage.removeItem('nhsdToken');
    }
}
