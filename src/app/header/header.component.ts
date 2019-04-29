import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './../services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  openMenu: boolean = false;
  headerData;

  constructor(private mockDataService: ApiService) {}
    ///
    ngOnInit(): void {

    }
  
    toggleMenu(){
      this.openMenu = !this.openMenu;
      
    }

}
