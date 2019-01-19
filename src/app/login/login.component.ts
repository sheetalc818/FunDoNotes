
/**************************************************************************************

 @Purpose : Login Component file for Login page

 @Author  : Sheetal Chaudhari

 @Date    : 14/01/2019

***************************************************************************************/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
 selector: 'app-login',
 templateUrl: './login.component.html',
 styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

 constructor(private router: Router, private httpService: HttpService) { }

 model={};

 hide = true;

 //password="";

 
 ngOnInit() {}

 email = new FormControl('', [Validators.required, Validators.email]);
 //password = new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(8)]);
 password = new FormControl('', [Validators.required,
  Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]);



 getErrorMessage() 
 {
   return this.email.hasError('required') ? 'You must enter a value' :
   this.email.hasError('email') ? 'Not a valid email' :
           '';
}

 getErrorMessage1()
 {
   return this.password.hasError('required') ? 'Password is Required' :
   this.password.hasError('pattern') ? 'Not a valid Password! Please follow the correct format' :
        '';
}

 //validate the login page
 login() {
   var requestBody ={
       "email":this.email.value,
       "password": this.password
   }
   console.log(requestBody);

   this.httpService.postService('/user/login', requestBody).subscribe( data => {
     console.log(data);
     this.router.navigate(['dash-board'])
   }, err => {
     alert("not a registered")
   })
 }
//navigate to the registration page
 registration() {
   this.router.navigate(['registration']);
 }
}



