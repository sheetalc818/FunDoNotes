
/**************************************************************************************

 @Purpose : Registration Component file for Registartion page

 @Author  : Sheetal Chaudhari

 @Date    : 14/01/2019

***************************************************************************************/

import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { HttpService } from '../http.service';
import { FormsModule} from '@angular/forms';
import { FormControl, Validators, Form } from '@angular/forms';
import { nextContext } from '@angular/core/src/render3';
import { MatSnackBar} from '@angular/material'

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

  
  constructor(private router: Router, private httpService: HttpService ,private snackbar: MatSnackBar) { }

  hide = true;

  firstnamepattern=/^[_A-z]*((-|\s)*[_A-z])*$/;
  lastnamepattern=/^[_A-z]*((-|\s)*[_A-z])*$/;
  passwordPattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$/;
  
  ngOnInit() {}

  //Tracks the value and validation status of an individual form control

  firstName = new FormControl('', [Validators.required]);

  lastName = new FormControl('', [Validators.required]);

  email = new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$")]);

  password = new FormControl('', [Validators.required]);
  
  confirmPassword = new FormControl('', [Validators.required, 
  Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]);
  
  
  getErrorFirst() 
  {
    return this.firstName.hasError('required') ? 'You must enter a value' :
      this.firstName.hasError('firstnamepattern') ? 'Enter a valid name' :
        '';
  }
  
  getErrorLast() 
  {
    return this.lastName.hasError('required') ? 'You must enter a value' :
    this.firstName.hasError('lastnamepattern') ? 'Enter a valid name' :
      '';
  }

  getErrorEmail() 
  {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('pattern') ? 'Not a valid email, MailId must contains @gmail,numbers and .com' :
        '';
  }
  
  getErrorMessagePassword() 
  {
    return this.password.hasError('required') ? 'Password is Required' :
      this.password.hasError('pattern') ? 'Password length should be min 8! Please type 1st letter capital,use special character,use numbers in your password' :
       '';
  }

  getErrorMessageConfirmPassword() 
  {
    return this.confirmPassword.hasError('required') ? 'Password is Required' :
    this.confirmPassword.hasError('confirmPassword') ? 'Not a valid Password! Please use 1st letter as capital,special character,use numbers in your password' :
            '';
  }

  //if Registration button pressed, registration() method invoked.
  
  registration() 
  {
    if(this.model.firstName && this.model.lastName && this.model.email &&
    this.passwordPattern.test(this.password.value) && this.firstnamepattern.test(this.firstName.value) && this.lastnamepattern.test(this.lastName.value))
    {

         if(this.model.password != this.model.confirmPassword)
         {
            this.snackbar.open('Password mismatch !! Please enter the valid password!!','Undo', 
            {duration: 3000});
            return false;
         }
    
          var requestBody = 
          {
              "firstName": this.firstName.value,
              "lastName": this.lastName.value,
              "email": this.email.value,
              "password": this.password.value,
              "confirmPassword": this.confirmPassword.value
          }

          console.log(requestBody);

          this.httpService.postService('/user/userSignUp', this.model).subscribe(data => {
          
          console.log(data);

          this.snackbar.open('Registration Successful!!','Undo', {duration: 3000});

          this.router.navigate(['']);
          },err => {console.log(err);
              this.snackbar.open('Registration failed !!','Undo', {duration: 3000})
         })
    }
    else
    {
          this.snackbar.open('Please follow the proper format!!','Undo', {duration: 3000});
          return false;
    }
  }
  
  /*if user press cancel button it will navigate to login page */
  cancel() 
  {
      this.router.navigate(['']);
  }
}

