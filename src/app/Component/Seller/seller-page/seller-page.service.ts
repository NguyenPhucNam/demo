import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {} from 'rxjs/add/operator/toPromise';
import { environment } from '../../../../environments/environment';

@Injectable()

export class sellerService {
    constructor(private http: Http) {}

    getsellerPage() {
        const url = `${environment.api}/kenh-nguoi-ban`;
        const headers = new Headers({'Authorization': 'Bearer '+localStorage.getItem('token')});
        return this.http.get(url, { headers })
        .toPromise()
        .then(res => res.json())
        .then(result => result);
    }

}