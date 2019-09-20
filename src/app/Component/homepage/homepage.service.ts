import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {} from 'rxjs/add/operator/toPromise';
import { environment } from 'src/environments/environment';

@Injectable()

export class HomeService {
    apihomePage: string = environment.api;
    constructor(private http: Http) {}

    getProducts() {
        return this.http.get(this.apihomePage)
        .toPromise()
        .then(res => res.json())
        .then(result => result);
    }
}