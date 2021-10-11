import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthGuard  implements CanActivate {


  constructor(public router: Router) {

  }
  canActivate(): any {

   /*
    if (this.authService.getAccessToken() !== undefined) {
      return true;
    }
*/

   console.log('Auth');
   this.router.navigate(['login']);
   return false;
  }

}
