import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {MobPartsComponent} from './mob-parts/mob-parts.component';
import {FormsModule} from '@angular/forms';
import {DressComponent} from './dress/dress.component';
import {RouterModule, Routes} from '@angular/router';
import {LaptopsComponent} from './laptops/laptops.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {HomeComponent} from './home/home.component';
import {AppRoutingModule} from './/app-routing.module';
import {MobPartsService} from './mob-parts/mob-parts.service';

@NgModule({

    declarations: [AppComponent, MobPartsComponent, DressComponent, LaptopsComponent, ErrorPageComponent, HomeComponent],
    imports: [BrowserModule, FormsModule, AppRoutingModule],
    bootstrap: [AppComponent],
    providers: [MobPartsService]

})

export class AppModule {
}