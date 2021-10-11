import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }
  callback = 'http://localhost:4200/callback';


  ngOnInit(): void {
    window.location.href = environment.oauth2.auth + '?client_id=' + environment.oauth2.client_id +
        '&response_type=code&redirect_uri=' + this.callback + '&state=123';
  }

}
