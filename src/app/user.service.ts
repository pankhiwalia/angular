import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import {User} from './user.model';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Response} from '@angular/http';
import {Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/toPromise';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class UserService {
    //  rootUrl: string;
    constructor(private http: HttpClient) {
    }

    registerUser(user: User) {
        //  this.rootUrl = 'http://127.0.0.1:8000/subscribe';
        const body: User = {
            UserName: user.UserName,
            Password: user.Password,
            Email: user.Email,
            FirstName: user.FirstName,
            LastName: user.LastName
        };

        //console.log(httpOptions);
        //  return this.http.post('http://127.0.0.1:8000/subscribe', body, httpOptions)
        //    .map((Response) => Response.json());


        let p = this.http.post('http://127.0.0.1:8000/subscribe', body, httpOptions).toPromise()
            .then(this.extractData)
            .catch(this.handleErrorPromise);
        console.log(p); return false;

    }

    extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    handleErrorPromise(error: Response | any) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    }


}
