import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {Extension, MedicationRequest, Patient} from "fhir/r4";

@Injectable()
export class AuthGuard  implements CanActivate {


  constructor(public router: Router, private auth: AuthService) {

  }
  canActivate(): any {
    return true;

    /*
    if (this.auth.hasAccessToken()) {
      return true;
    } else {
        console.log('Auth');
        this.router.navigate(['login']);
        return false;
    }
     */
  }

}
