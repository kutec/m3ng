import { LoaderService } from './../services/loader.service';
import { Injectable, Output } from '@angular/core';
import {
    HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse
} from '@angular/common/http';



import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

@Injectable()
export class HTTPInterceptor implements HttpInterceptor {
  loading: boolean = true;

  constructor(private loaderService: LoaderService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.show();

    return next.handle(request).do(evt => {
        if (evt instanceof HttpResponse) {
          this.loaderService.hide();
          console.log('Requested URL: ', evt.url);
        }
      });
  }
}
