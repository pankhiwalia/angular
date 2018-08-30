import {NgModule} from '@angular/core';
/*import {CommonModule} from '@angular/common';*/
import {MobPartsComponent} from './mob-parts/mob-parts.component';
import {DressComponent} from './dress/dress.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {HomeComponent} from './home/home.component';
import {LaptopsComponent} from './laptops/laptops.component';
import {RouterModule, Routes} from '@angular/router';
import {HeroesComponent} from './heros/heros.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {AddComponent} from './users/add/add.component';
import {UsersComponent} from './users/users.component';
import {ViewComponent} from './users/view/view.component';

const appRoutes: Routes = [
    {path: 'Dashboard', component: DashboardComponent},
    {path: 'detail/:id', component: HeroDetailComponent},
    {path: 'Heros', component: HeroesComponent},
    {path: 'Mobile', component: MobPartsComponent},
    {path: 'Dress', component: DressComponent},
    {path: 'Laptop', component: LaptopsComponent},
    {
        path: 'Home', component: HomeComponent,
        children: [{
            path: 'homePro', component: HeroDetailComponent

        }]
    },
    {path: 'users' , component: UsersComponent},
    {path: 'signUp', component: SignUpComponent},
    {path: '', redirectTo: '/Dashboard', pathMatch: 'full'},
    {path: 'useradd', component: AddComponent},
    {path: '**', component: ErrorPageComponent}
    // {path: 'users' , component: UsersComponent,children:[
    //         {path: 'add' , component: AddComponent},
    //         {path: 'view' , component: ViewComponent}
    //     ]}
];


@NgModule({
    imports: [
        /*  CommonModule,*/ RouterModule.forRoot(appRoutes),
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule {
}
