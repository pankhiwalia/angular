import {Component, OnInit} from '@angular/core';
import {MobPartDataType} from './mob-parts';
import {MOBPARTS} from './mocks';
import {MobPartsService} from './mob-parts.service';

@Component({
    selector: 'app-new',
    templateUrl: './mob-parts.component.html',
    styleUrls: ['./mob-parts.component.css']
})
export class MobPartsComponent implements OnInit {

    mobiles: MobPartDataType[];

    constructor(private MobPartsService: MobPartsService) { //part 3(uinf ascces specifiers// )

    }

    ngOnInit() {
        // this.mobiles = MOBPARTS; //part 1 (call when we will call dummy data from mocks file)
        /* let mobPartService = new MobPartsService();
         this.mobiles = mobPartService.getMobParts(); */ // part 2 (when we are calling services usinh oops concept)
        // this.mobiles = this.MobPartsService.getMobParts(); // another way part 2
        this.MobPartsService.getMobParts().subscribe(mobParts => this.mobiles = mobParts);
    }

// creating function and calling this fxn in html file
    totalStockleft() {
        let sum = 0;
        if (Array.isArray(this.mobiles)) {
            for (let mobile of this.mobiles) {
                sum = sum + mobile.stock;
            }
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

    onlyNumericValue(inStock, value) {

    }

}
