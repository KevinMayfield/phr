import { Component, OnInit } from '@angular/core';
import {TdMediaService} from "@covalent/core/media";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  opened = false;
  constructor(public media: TdMediaService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onClick(route: string) {
    this.router.navigateByUrl(route);
  }

}
