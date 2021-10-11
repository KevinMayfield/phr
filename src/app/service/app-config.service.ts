import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class AppConfigService {

  private appConfig: any;

  private initEvent: EventEmitter<any> = new EventEmitter();

  public getInitEventEmitter(): any {
    return this.initEvent;
  }
    constructor(private http: HttpClient) {}

    loadConfig(): any {
        console.log('baseURI = ' + document.baseURI);

        console.log('calling config endpoint: ' + document.baseURI + 'camel/config/http');
        this.http.get<any>(document.baseURI + 'camel/config/http').subscribe(result => {
                  console.log('app config fhirServer retrieved.');
                //  console.log(result);

                  this.appConfig = result;
                  this.initEvent.emit(result);
              },
                error => {
                    console.log('No configuration endpoint detected');
                    const env = {
                      oauth2client_id: environment.oauth2.client_id,
                      oauth2client_secret: environment.oauth2.client_secret,
                      oauth2cookie_domain: environment.oauth2.cookie_domain,
                      logonUrl: environment.oauth2.logonUrl
                    };
                    this.appConfig = env;
                    this.initEvent.emit(env);
                });
    }

  getConfig(): any {
   // console.log(this.appConfig);
    return this.appConfig;
  }

}
