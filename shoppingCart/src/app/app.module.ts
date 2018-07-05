import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import { MobPartsComponent } from './mob-parts/mob-parts.component';

@NgModule({

	declarations:[AppComponent, MobPartsComponent],
	imports :[BrowserModule],
	bootstrap: [AppComponent]
	
})

export class AppModule{}