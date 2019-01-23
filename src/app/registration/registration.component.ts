
/**************************************************************************************

 @Purpose : Registration Component file for Registartion page

 @Author  : Sheetal Chaudhari

 @Date    : 14/01/2019

***************************************************************************************/

import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { HttpService } from '../http.service';
import { FormControl, Validators } from '@angular/forms';
import { nextContext } from '@angular/core/src/render3';
import {MatSnackBarModule} from '@angular/material/snack-bar'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  //Set the Registration valid credential.
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
  
  //constructor for initialization for http services.

  constructor(private router: Router, private httpService: HttpService) { }

  hide = true;

  passwordPattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$/;
  
  ngOnInit() { }

  firstName = new FormControl('', [Validators.required]);

  lastName = new FormControl('', [Validators.required]);

  email = new FormControl('', [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]);

  password = new FormControl('', [Validators.required]);
  
  confirmPassword = new FormControl('', [Validators.required, 
  Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]);
    
  
  
  getErrorFirst() {
    return this.firstName.hasError('required') ? 'You must enter a value' :
      this.firstName.hasError('firstName') ? 'Enter a valid name' :
        '';
  }
  
  getErrorLast() {
    return this.lastName.hasError('required') ? 'You must enter a value' :
      '';
  }

  getErrorEmail() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('pattern') ? 'Not a valid email' :
        '';
  }
  
  getErrorMessagePassword() {
    return this.password.hasError('required') ? 'Password is Required' :
      this.password.hasError('pattern') ? 'Not a valid Password! Please follow the correct format' :
        '';
  }

  getErrorMessageConfirmPassword() {
    return this.confirmPassword.hasError('required') ? 'Password is Required' :
      this.confirmPassword.hasError('pattern') ? 'Not a valid Password! Please follow the correct format' :
        '';
}



  //if Registration button pressed, registration() method invoked.
  
  registration() 
  {
     var requestBody = 
     {
      "firstName": this.firstName.value,
      "lastName": this.lastName.value,
      "email": this.email.value,
      "password": this.password.value,
      "confirmPassword": this.confirmPassword.value
     }

     console.log(requestBody);

     if(this.model.firstName && this.model.lastName && this.model.email && this.model.password == this.model.confirmPassword )
     {
          this.httpService.postService('/user/userSignUp', this.model).subscribe(data => {
          console.log(data);
          alert("Registration Successful !!");
          this.router.navigate(['']);
        },err => {console.log(err);})
    }

    if(this.model.password != this.model.confirmPassword)
    {
           alert("Password Mismatch");
    }

  }

    cancel() 
    {
      this.router.navigate(['']);
    }

}
