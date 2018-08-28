import {Injectable} from '@angular/core';
import {LaptopDataType} from './laptop-datatype';
import {Http} from '@angular/http';

@Injectable({
    providedIn: 'root'
})
export class LaptopService {

    constructor(private http: Http) {
    }

    laptopDetails() {
        return this.http.get('assets/data/laptop-data.json').map(response => <LaptopDataType[]>response.json().data);
    }

}
