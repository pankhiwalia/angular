import { Component, OnInit } from '@angular/core';
import {UserregisterService} from './userregister.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
    providers: [UserregisterService]
})
export class UsersComponent implements OnInit {
  users: any;
  constructor(private _ser: UserregisterService) { }

  ngOnInit() {
      this._ser.fetchResult().subscribe((results) => {
          //console.log(results);
          this.users = results;
      });
  }

}
