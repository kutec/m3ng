import { ApiService } from './../services/api.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

//declare var $: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input('orientation') orientation;
  headerData;

  constructor(private mockDataService: ApiService, private router: Router) { }

  ngOnInit() {
    this.mockDataService
    .getMockData()
    .subscribe(
      response => {
        this.headerData = response;
        console.log(this.headerData);
      }
    );
  }
}
