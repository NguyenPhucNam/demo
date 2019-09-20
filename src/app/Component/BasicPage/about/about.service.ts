import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {} from 'rxjs/add/operator/toPromise';
import { environment } from 'src/environments/environment';

@Injectable()

export class aboutService {
    api:string = `${environment.api}/gioi-thieu`;

    constructor(private http: Http) {}

    getAbout() {
        return this.http.get(this.api)
        .toPromise()
        .then(resJson => resJson.json())
        .then(result => result);
    }

}