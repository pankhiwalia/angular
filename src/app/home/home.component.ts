import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-new',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor() {
    }

    homepage: string = 'assets/img/home-page.jpg';

    ngOnInit() {
    }

}
