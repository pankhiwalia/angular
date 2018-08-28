import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersmoduleRoutingModule } from './usersmodule-routing.module';
import {UserService} from '../user.service';

@NgModule({
  imports: [
    CommonModule,
    UsersmoduleRoutingModule
  ],
  declarations: []
})
export class UsersmoduleModule { }
