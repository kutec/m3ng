import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoaderService {

  private loaderSubject = new Subject<any> ();
  loaderState = this.loaderSubject.asObservable();

  constructor() { }

  show() {
    this.loaderSubject.next(<any>{show: true});
  }
  hide() {
      this.loaderSubject.next(<any>{show: false});
  }
}
