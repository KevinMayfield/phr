import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private auth: AuthService,
              private router: Router) { }

  private authCode = '' ;

  subOAuth2: any;

  // tslint:disable-next-line:typedef
  ngOnInit() {

    this.auth.tokenChange.subscribe(
        () => {
          this.router.navigateByUrl('/');
        }
    );
    this.route.queryParamMap.subscribe(params => {
      console.log(params);
      const code = params.get('code');
      // var state = params.get('state');
      this.auth.performGetAccessToken(code);
    });

  }

}
