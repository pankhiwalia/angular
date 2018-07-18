import {Component, OnInit} from '@angular/core';
import {LaptopDataType} from './laptop-datatype';
import {laptopsDetails} from './mocks';

@Component({
    selector: 'app-new',
    templateUrl: './laptops.component.html',
    styleUrls: ['./laptops.component.css']
})
export class LaptopsComponent implements OnInit {

    constructor() {
    }

    laptops: LaptopDataType[];

    ngOnInit() {
        this.laptops = laptopsDetails;
    }

}
