
/**************************************************************************************

 @Purpose : Component file for Login page , demonstrating the methods that contains 
            error messages and login

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

export class LoginComponent implements OnInit 
{

  constructor(private router: Router, private httpService: HttpService) { }

  model={};

  hide = true;

 //password="";

  ngOnInit() {}

 //email and password validations using FormControl

 email = new FormControl('', [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]);
 
 password = new FormControl('', [Validators.required,
 Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]);


 //getErrorMessageEmail() contains error message related to email field
 getErrorMessageEmail() 
 {
   return this.email.hasError('required') ? 'You must enter a value' :
   this.email.hasError('pattern') ? 'Not a valid email' :
           '';
 }

 //getErrorMessagePassword() contains error message related to password field
 getErrorMessagePassword() 
 {
  return this.password.hasError('required') ? 'You must enter a value' :
  this.password.hasError('pattern') ? 'Not a valid Password! Please follow the correct format' :
    '';
 }

 //Whenever login button clicked, login() will be called
 login() 
 {
    //data entered by user stoared in requestbody object
    var requestBody ={
       "email":this.email.value,
       "password": this.password.value
    }
    
    //data entered by user displayed on console
    console.log(requestBody);

    /*using postService() method data sended to the server and using subcribe() 
    callback method data is exracted and displayed on console*/

    this.httpService.postService('/user/login', requestBody).subscribe( data => {
          
        console.log(data);
        this.router.navigate(['dashboard'])
    }, err => {
        alert("not a registered")
   })
 }

  //navigate to the registration page
  registration() 
  {
      this.router.navigate(['registration']);
  }
}



