import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './services/api.service';

import {
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationError,
  NavigationCancel
} from '@angular/router';

//declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  openMenu: boolean = false;

  @Input('orientation') orientation;
  headerData;

  constructor(
    private mockDataService: ApiService,
    private router: Router
  ) {}

  ngOnInit () {
    this.mockDataService
    .getMockData()
    .subscribe(
      response => {
        this.headerData = response;
        console.log(this.headerData);
      }
    );
  }

  toggleMenu() {
    this.openMenu = !this.openMenu;
  }
}
