
/**************************************************************************************

 @Purpose : Login Component file for Login page

 @Author  : Sheetal Chaudhari

 @Date    : 14/01/2019

***************************************************************************************/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

/*The @Component decorator identifies the class immediately below it as a component 
class, and specifies its metadata*/

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    //constructor for initialization for http services
    constructor(private router: Router, private httpService: HttpService) { }

    //empty object for holding data of user
    model = {};

    /*Define an ngOnInit() method to handle any additional initialization tasks.
      It is invoked only once when the directive is instantiated.*/
    ngOnInit()
    {}

    //Login button clicked, login() method invoked
    login() {
        console.log(this.model);
        this.httpService.postService('/user/login', this.model).subscribe(data => {
            console.log(data);
            this.router.navigate(['dashboard'])
        }, err => {
            alert("not a registered")
        })
    }

    //if Registration button pressed, registration() method invoked
    registration() {
        this.router.navigate(['registration']);
    }
}



