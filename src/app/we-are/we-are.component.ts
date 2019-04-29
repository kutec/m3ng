import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../services/api.service';
import { forkJoin } from 'rxjs/observable/forkJoin';

@Component({
  selector: 'app-we-are',
  templateUrl: './we-are.component.html',
  styleUrls: ['./we-are.component.scss']
})
export class WeAreComponent implements OnInit {
  weAre;
  serviceData;  /* forkjoin */
  weAreData;
  mockData; /* forkjoin */
  @Input('loadOnly') loadOnly;

  constructor(
    private teamService: ApiService,
    private teamDataService: ApiService
  ) { }

  ngOnInit() {
    if (this.loadOnly) {
      this.mockData = this
                        .teamDataService
                        .getMockData();
      this.serviceData = this
                          .teamService
                          .getAPIData('people?_embed&per_page=' + this.loadOnly);

      forkJoin([this.serviceData, this.mockData]).subscribe(results => {
        // results[0] is our serviceData
        // results[1] is our mockData
        this.weAre = results[0];
        this.weAreData = results[1];
        this.weAreData = this.weAreData.pages[0].wedo;

        console.log(this.weAre);
        console.log(this.weAreData);

      });
    } else {
      this.mockData = this
                        .teamDataService
                        .getMockData();
      this.serviceData = this
                          .teamService
                          .getAPIData('people?_embed');

      forkJoin([this.serviceData, this.mockData]).subscribe(results => {
        // results[0] is our serviceData
        // results[1] is our mockData
        this.weAre = results[0];
        this.weAreData = results[1];
        this.weAreData = this.weAreData.pages[1].weare;

        console.log(this.weAre);
        console.log(this.weAreData);

      });
    }
  }
}
