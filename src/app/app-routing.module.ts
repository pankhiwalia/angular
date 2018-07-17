import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MobPartsComponent} from './mob-parts/mob-parts.component';
import {DressComponent} from './dress/dress.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {HomeComponent} from './home/home.component';
import {LaptopsComponent} from './laptops/laptops.component';
import {RouterModule, Routes} from '@angular/router';


const appRoutes: Routes = [
    {path: 'Mobile', component: MobPartsComponent},
    {path: 'Dress', component: DressComponent},
    {path: 'Laptop', component: LaptopsComponent},
    {path: 'Home', component: HomeComponent},
    {path: '', component: HomeComponent},
    {path: '**', component: ErrorPageComponent}
];


@NgModule({
    imports: [
        CommonModule, RouterModule.forRoot(appRoutes),
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule {
}
