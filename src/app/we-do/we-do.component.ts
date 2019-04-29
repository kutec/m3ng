import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../services/api.service';
import { forkJoin } from 'rxjs/observable/forkJoin';

@Component({
  selector: 'app-we-do',
  templateUrl: './we-do.component.html',
  styleUrls: ['./we-do.component.scss']
})
export class WeDoComponent implements OnInit {
  weDo;
  serviceData;  /* forkjoin */
  weDoData;
  mockData; /* forkjoin */
  @Input('loadOnly') loadOnly;

  constructor(
    private musicService: ApiService,
    private musicDataService: ApiService
  ) {
    /* musicService.getAPIData('services').subscribe( res => {
      this.weDo = res;
      console.log(this.weDo);
      this.weDo = this.weDo.slice(0, this.loadOnly);
      console.log(this.weDo);
    } ); */
  }

  ngOnInit() {
    if (this.loadOnly) {

      this.mockData = this
                        .musicDataService
                        .getMockData();
      this.serviceData = this
                          .musicService
                          .getAPIData('services?_embed&per_page=' + this.loadOnly);


      forkJoin([this.serviceData, this.mockData]).subscribe(results => {
        // results[0] is our serviceData
        // results[1] is our mockData
        this.weDo = results[0];
        this.weDoData = results[1];
        this.weDoData = this.weDoData.pages[0].wedo;

        console.log(this.weDo);
        console.log(this.weDoData);

      });
    } else {

      this.mockData = this.musicDataService.getMockData();
      this.serviceData = this.musicService.getAPIData('services?_embed');

      forkJoin([this.serviceData, this.mockData]).subscribe(results => {
        this.weDo = results[0];
        this.weDoData = results[1];
        this.weDoData = this.weDoData.pages[0].wedo;

        console.log(this.weDo);
        console.log(this.weDoData);

      });
    }

   /*  if (_self.loadOnly) {
      _self.musicService.getAPIData('services?embed&per_page=' + _self.loadOnly).subscribe( res => {
        _self.musicDataService.getMockData().subscribe( res1 => {
          this.weDoData = res1.pages[0].wedo;
          console.log(this.weDoData.pageTitle);
        });
        this.weDo = res;
      });
    } else {
      _self.musicService.getAPIData('services').subscribe( res => {
        _self.musicDataService.getMockData().subscribe( res1 => {
          this.weDoData = res1.pages[0].wedo;
          console.log(this.weDoData.pageTitle);
        });
        this.weDo = res;
      });
    } */
  }

}
