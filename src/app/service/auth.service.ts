

import {environment} from '../../environments/environment';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {EventEmitter, Injectable} from '@angular/core';
import {Router} from '@angular/router';


class Oauth2token {
}

@Injectable()
export class AuthService {
    private smartToken: Oauth2token | undefined;

    oauthTokenChange: EventEmitter<Oauth2token> = new EventEmitter();

   public auth = false;

  constructor(
             private router: Router,
             private http: HttpClient
              ) {

  }

  performGetAccessToken(authCode: string ): any {
    const bearerToken = 'Basic ' + btoa(environment.oauth2.client_id + ':' + environment.oauth2.client_secret);
    const headers = new HttpHeaders( { Authorization : bearerToken});
    // headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');

    const url = environment.oauth2.token;

    const body = new URLSearchParams();
    body.set('grant_type', 'authorization_code');
    body.set('code', authCode);
    body.set('redirect_uri', document.baseURI + '/callback');


    this.postAny(url, body.toString(),  headers  ).subscribe( (response: string) => {
        // console.log(response);
        this.smartToken = response;
        console.log('OAuth2Token : ' + response);
        this.auth = true;
      }
      , (error: any) => {
        console.log(error);
      }
      , () => {
        // Emit event

        this.oauthTokenChange.emit(this.smartToken);

      }
    );
  }

    // tslint:disable-next-line:typedef
    public postAny(url: string | null, body: string, httpHeaders: HttpHeaders) {
        return this.http.post<any>(url as string, body, {headers: httpHeaders});
    }
}
