import {Component, OnInit} from '@angular/core';
import {DressDatatype} from './dress-type';
import {DressDetails} from './mocks';

@Component({
    selector: 'app-new',
    templateUrl: './dress.component.html',
    styleUrls: ['./dress.component.css']
})
export class DressComponent implements OnInit {

    constructor() {
    }

    dressDesc: DressDatatype[];

    ngOnInit() {
        this.dressDesc = DressDetails;
    }

}
