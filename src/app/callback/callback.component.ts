import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private auth: AuthService,
              private router: Router) { }

  private authCode = '' ;

  subOAuth2: any;

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.authCode = this.activatedRoute.snapshot.queryParams.code;

    console.log(this.authCode);
    if (this.authCode !== undefined) {
    }
    // this.router.navigate(['']);
    this.auth.performGetAccessToken(this.authCode);
  }

}
