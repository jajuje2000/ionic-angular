import { Component } from '@angular/core';
import {
    Router,
    NavigationExtras
} from '@angular/router';


//import { AuthService } from './auth.service';

@Component({
    templateUrl: './home.html'//,
    //styleUrls: ['./home.css']
})
export class HomeComponent {

    constructor(public router: Router) {
        
    }

}