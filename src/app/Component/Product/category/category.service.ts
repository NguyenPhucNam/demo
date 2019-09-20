import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {} from 'rxjs/add/operator/toPromise';
import { environment } from '../../../../environments/environment';

@Injectable()

export class cateService {
    apihomePage: string = `${environment.api}/danh-muc`;
    constructor(private http: Http) {}

    getCate() {
        return this.http.get(this.apihomePage)
        .toPromise()
        .then(res => res.json())
        .then(result => result);
    }
}
