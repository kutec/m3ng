import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Data } from '../models/data';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {
    private jsonFileURL = 'data/data.json';
    private headers: Headers = new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    });
    constructor(private http: HttpClient) {}

    getAPIData(urlSuffix): Observable<Data[]> {
        return this.http.get(API_URL + urlSuffix)
            .map((res: Response) => res)
            .catch((error: any) => Observable.throw(error.error || 'Server error'));
    }

    getMockData(): Observable<any> {
        return this.http.get(this.jsonFileURL)
            .map((res: Response) => {
                return res;
            })
            .catch((error: any) => Observable.throw(error.error || 'Server error'));
    }
}
