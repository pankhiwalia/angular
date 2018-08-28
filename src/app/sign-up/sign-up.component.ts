import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {User} from '../user.model';
import {NgForm} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';


@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css'],
    providers:[UserService]
})

export class SignUpComponent implements OnInit {
    user: User;
    emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

    constructor(
                private userService: UserService) {
    }

    ngOnInit() {
        this.resetForm();
        this.user = {
            UserName: '',
            Email: '',
            Password: '',
            LastName: '',
            FirstName: '',
        };
    }

    resetForm(form?: NgForm) {
        if (form != null) {
            form.reset();
            this.user = {
                UserName: '',
                Email: '',
                Password: '',
                LastName: '',
                FirstName: '',
            };
        }
    }

/*
    OnSubmit(form: NgForm) {
        this.userService.registerUser(form.value).subscribe((data: any) => {
            if (data.Succeeded === true) {
                this.resetForm(form);
              //  this.toastr.success('User registration successful');

            } else {
                //this.toastr.error(data.Errors[0]);
            }
            }
        );
    }
*/

}
