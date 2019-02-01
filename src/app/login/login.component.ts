
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
import { MatSnackBar } from '@angular/material'
import { elementStart } from '@angular/core/src/render3';



@Component({
 selector: 'app-login',
 templateUrl: './login.component.html',
 styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit 
{

  constructor(private router: Router, private httpService: HttpService, private snackbar:MatSnackBar) { }

  model={};

  hide = true;

  ngOnInit() {}

  //Tracks the value and validation status of an individual form control
  //email and password validations using FormControl

  email = new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$")]);
 
  password = new FormControl('', [Validators.required,
  Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]);


  //getErrorMessageEmail() contains error message related to email field
  getErrorMessageEmail() 
  {
    return this.email.hasError('required') ? 'Please enter the valid Email id' :
    this.email.hasError('pattern') ? 'Not a valid email ! Email Id must containes @gmail ,number and .com' :
           '';
  }

  //getErrorMessagePassword() contains error message related to password field
  getErrorMessagePassword() 
  {
    return this.password.hasError('required') ? 'Please Enter the valid password' :
    this.password.hasError('pattern') ? 'Password length should be min 8 !!Please type first letter capital,use special character,number in the password stream ' :
    '';
  }

  //Whenever login button clicked, login() method will be called
  
  login() 
  {
        if(this.getErrorMessageEmail()!="" || this.getErrorMessagePassword()!="")
        {
            this.snackbar.open('Log in Failed ,Please Try again!!','Undo', {
                duration: 3000
                });
                return false;
        }
        else
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
           },err => {
                this.snackbar.open('You are not register !! Please register first!!','Undo', {
                duration: 3000
              });
           })
        }
       
  }
  
  //navigate to the registration page
  registration() 
  {
      this.router.navigate(['registration']);
  }
}


