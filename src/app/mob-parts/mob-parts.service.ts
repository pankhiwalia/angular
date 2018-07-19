import {Injectable} from '@angular/core';
import {MobPartDataType} from './mob-parts';
import {Http} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable({
    providedIn: 'root'
})
export class MobPartsService {

    constructor(private http: Http) {
    }

    getMobParts() {
        //  return MOBPARTS; part 1 (using mocks file)
        return this.http.get('assets/data/mobile-details.json').map(response => <MobPartDataType[]>response.json().data);


    }
}