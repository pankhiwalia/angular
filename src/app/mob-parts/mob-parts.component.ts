import {Component, OnInit} from '@angular/core';
import {MobPartDataType} from './mob-parts';
import {MOBPARTS} from './mocks';

@Component({
    selector: 'app-new',
    templateUrl: './mob-parts.component.html',
    styleUrls: ['./mob-parts.component.css']
})
export class MobPartsComponent implements OnInit {

    mobiles: MobPartDataType[];

    constructor() {
    }

    ngOnInit() {
        this.mobiles = MOBPARTS;
    }

// creating function and calling this fxn in html file
    totalStockleft() {
        let sum = 0;
        for (let mobile of this.mobiles) {
            sum = sum + mobile.stock;
        }
        return sum;
    }

    upqty(mobileDetails) {

        if (mobileDetails.qty < mobileDetails.stock) {
            return mobileDetails.qty++;
        }


    }

    downqty(mobileDetails) {

        if (mobileDetails.qty > 0) {
            return mobileDetails.qty--;
        }
    }

}
