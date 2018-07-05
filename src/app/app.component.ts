import {Component, NgModule} from '@angular/core';

@Component({
	selector:"ng-new",
	templateUrl:'app.component.html',
	styleUrls:['app.component.css']

})

export class AppComponent{
	title='Latest Mobile Launch';
	mobiles=[{
		name:'samsung',
		version:'7.1',
		stock:2,
		price:11000,
		availablility:'08/05/2018' //month/date/year
	},
	{
		name:'moto',
		version:'7.0.0',
		stock:3,
		price:15000,
		availablility:'07/08/2018'
	},
	{
		name:'oneplus',
		version:'8.0',
		stock:0,
		price:30000,
		availablility:'08/08/2018'
	},
	{
		name:'moto',
		version:'7.0.0',
		stock:3,
		price:15000,
		availablility:'07/08/2018'
	},
	{
		name:'oneplus',
		version:'8.0',
		stock:0,
		price:30000,
		availablility:'08/08/2018'
	}
	]


// creating function and calling this fxn in html file
	totalStockleft(){
		let sum=0;
			for (let mobile of this.mobiles){
				sum= sum+mobile.stock;	
			}
			return sum;
	}
}

