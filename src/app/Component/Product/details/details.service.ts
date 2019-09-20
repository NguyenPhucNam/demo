import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {} from 'rxjs/add/operator/toPromise';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Injectable()

export class detailsComponent {
    id_params: string;
    url = `${environment.api}/san-pham/chi-tiet/`;

    constructor(private http: Http, private route: ActivatedRoute) {}

    getId() {
        this.route.paramMap.subscribe((params: ParamMap) => {
            this.id_params = params.get('id');
        });
    }

    getDetails() {
        this.getId();
        return this.http.get(this.url+this.id_params)
        .toPromise()
        .then(res => res.json())
        .then(result => result);
    }

}