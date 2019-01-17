
/**************************************************************************************

 @Purpose : Registration Component file for Registartion page

 @Author  : Sheetal Chaudhari

 @Date    : 14/01/2019

***************************************************************************************/


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { HttpService } from '../http.service';

/*the @Component decorator identifies the class immediately below it 
as a component class, and specifies its metadata*/

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})


export class RegistrationComponent implements OnInit {
  model = {
    "firstName": "",
    "lastName": "",
    "phoneNumber": "",
    "imageUrl": "",
    "role": "",
    "service": "basic",
    "createdDate": "2019-01-17T07:39:30.294Z",
    "modifiedDate": "2019-01-17T07:39:30.294Z",
    "addresses": [
      {}
    ],
    "realm": "",
    "username": "",
    "email": "",
    "emailVerified": true,
    "id": "string",
    "password": "",
    "confirmPassword": ""
  };
  //constructor for initialization for http services
  constructor(private router: Router, private httpService: HttpService) { }

  //ngOnInit() method to handle any additional initialization tasks
  ngOnInit() { }

  //if Registration button pressed, registration() method invoked
  registration() {
    if (this.model.password == this.model.confirmPassword) {
      this.httpService.postService('/user/userSignUp', this.model).subscribe(data => {
        console.log(data);
        this.router.navigate(['']);
      }, err => {
        console.log(err);
        this.router.navigate(['']);
      })
    } else {
      alert("confirm password mismatch")
    }

  }
  //else cancel
  cancel() {
    this.router.navigate([' ']);
  }
}
