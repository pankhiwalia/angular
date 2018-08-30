import { Component, OnInit } from '@angular/core';
import {UserregisterService} from '../userregister.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
    providers: [ UserregisterService ]
})
export class AddComponent implements OnInit {

  constructor(private _ser: UserregisterService, private  _r: Router) { }

  ngOnInit() {

  }

    OnSubmit(data) {
        this._ser.register(data).subscribe((res) => {
            console.log(res);
            if(res['status'] === "true" || res['status'] === true){
                this._r.navigate(['/users']);
            }
        });
    }



}
