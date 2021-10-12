import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuard  implements CanActivate {


  constructor(public router: Router, private auth: AuthService) {

  }
  canActivate(): any {


    if (this.auth.hasAccessToken()) {
      return true;
    } else {
        console.log('Auth');
        this.router.navigate(['login']);
        return false;
    }
  }

}
