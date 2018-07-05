import { Component, OnInit } from '@angular/core';
import { MobPartDataType } from './mob-parts';
import{ MOBPARTS } from './mocks';

@Component({
  selector: 'app-mob-parts',
  templateUrl: './mob-parts.component.html',
  styleUrls: ['./mob-parts.component.css']
})
export class MobPartsComponent implements OnInit {

  mobiles: MobPartDataType[]; 
  
  constructor() { }

  ngOnInit(){
  	this.mobiles = MOBPARTS;
  }

// creating function and calling this fxn in html file
	totalStockleft(){
		let sum=0;
			for (let mobile of this.mobiles){
				sum= sum+mobile.stock;	
			}
			return sum;
	}

}
