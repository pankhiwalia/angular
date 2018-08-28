import {Component, OnInit} from '@angular/core';
import {LaptopDataType} from './laptop-datatype';
/*import {laptopsDetails} from './mocks';*/
import {LaptopService} from './laptop.service';

@Component({
    selector: 'app-new',
    templateUrl: './laptops.component.html',
    styleUrls: ['./laptops.component.css']
})
export class LaptopsComponent implements OnInit {

    constructor(private LaptopService: LaptopService) {
    }

  // laptops: LaptopDataType[];
     laptops;
    ngOnInit() {
        // this.laptops = laptopsDetails;
        this.LaptopService.laptopDetails().subscribe(laptopDet => this.laptops = laptopDet);
    }


    upqty(mobileDetails) {
        if (mobileDetails.qty < mobileDetails.stock) {
            console.log(mobileDetails.qty);
            return mobileDetails.qty++;
        }
    }

    downqty(mobileDetails) {
        if (mobileDetails.qty !== 0) {
            return mobileDetails.qty--;
        } else if (mobileDetails.qty === 0) {
            return mobileDetails.stockCss = false;
        }
    }


}
