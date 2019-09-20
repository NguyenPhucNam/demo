import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {} from 'rxjs/add/operator/toPromise';
import { environment } from '../../../../environments/environment';

@Injectable()

export class addProService {
    addImg = `${environment.api}/kenh-nguoi-ban/them-anh`;
    url = `${environment.api}/kenh-nguoi-ban/them`;
    constructor(private http: Http) {}

    uploadImg(value) {
        const headers = new Headers({ 'Authorization': 'Bearer '+localStorage.getItem('token') });
        const formData = new FormData();
        const valForm = value.files.length;
        for(let i=0; i < valForm; i++) {
            formData.append('uploadImg', value.files[i]);
        }
        return this.http.post(this.addImg, formData, { headers })
        .toPromise()
        .then(result => result.json());
    }

    addProduct(value) {
        const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem('token') });
        value['Url_clound'] = "/images/";
        value['img_Product'] = sessionStorage.getItem('img');
        return this.http.post(this.url, value, { headers })
        .toPromise()
        .then(result => result.json());
    }

}