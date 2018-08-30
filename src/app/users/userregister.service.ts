import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';// used to convert the response into json (read only readble data exclude status ,contenttype etc. which was return from the serve)

import {Http, Response} from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root' // if it is written here we donot need to incelude in providers
})
export class UserregisterService {

    constructor(private _http: Http) {
    }

    register(data) {
        return this._http.post(environment.apiUrl+'add.php', data).pipe(map((res: Response) => {
            return res.json();
        }));
    }

    fetchResult() {
        return this._http.get(environment.apiUrl+'fetchAll.php',null).pipe(map((res: Response) => {
            return res.json();
        }));
    }
}
