import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {MobPartsComponent} from './mob-parts/mob-parts.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DressComponent} from './dress/dress.component';
import {RouterModule, Routes} from '@angular/router';
import {LaptopsComponent} from './laptops/laptops.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {HomeComponent} from './home/home.component';
import {AppRoutingModule} from './/app-routing.module';
import {MobPartsService} from './mob-parts/mob-parts.service';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {LaptopService} from './laptops/laptop.service';
import {HeroesComponent} from './heros/heros.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {MessagesComponent} from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService} from './user.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { TestModuleModule } from './test-module/test-module.module';
import { UsersComponent } from './users/users.component';
import { ViewComponent } from './users/view/view.component';
import { AddComponent } from './users/add/add.component';
import {UserregisterService} from './users/userregister.service';

@NgModule({

    declarations: [
        AppComponent,
        MobPartsComponent,
        DressComponent,
        LaptopsComponent,
        ErrorPageComponent,
        HomeComponent,
        HeroesComponent,
        HeroDetailComponent,
        MessagesComponent,
        DashboardComponent,
        SignUpComponent,
         HeroSearchComponent,
         UsersComponent,
         ViewComponent,
         AddComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpModule,
        HttpClientModule,
        ReactiveFormsModule, // validation  and form builder or reactive forms
       // ToastrModule.forRoot(),
        //BrowserAnimationsModule,
        // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
        // and returns simulated server responses.
        // Remove it when a real server is ready to receive requests.
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryDataService, { dataEncapsulation: false }
        ),
       TestModuleModule
    ],
    bootstrap: [AppComponent],
    providers: [MobPartsService, LaptopService, UserService, UserregisterService]

})

export class AppModule {
}