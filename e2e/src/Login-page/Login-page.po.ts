
/**************************************************************************************

 @Purpose : Page Object file used as a supplimentory information that contains 
            functions that are required for Spec.ts file

 @Author  : Sheetal Chaudhari

 @version : protractor 5.4.0 

 @Date    : 25/01/2019

***************************************************************************************/

import { browser, by, element } from 'protractor';
import { elementStart } from '@angular/core/src/render3';

export class AppPage 
{
  
  navigateTo() 
  {
    return browser.get('/');
  }
  
/****************************************************************************************
  
  @description  Functions for Positive Scipts of Registration page and Login page

*****************************************************************************************/
  
clickRegister()
{
    return element(by.xpath('/html/body/app-root/app-login/div/button[2]')).click();
}

getFirstName()
{
    return element(by.xpath('//*[@id="mat-input-2"]')).sendKeys('Pranoti');
}

getLastName()
{
    return element(by.xpath('//*[@id="mat-input-3"]')).sendKeys('Kusare');
}

getEmailId()
{
    return element(by.xpath('//*[@id="mat-input-4"]')).sendKeys('pranoti1@gmail.com');
}

getPassword()
{
    return element(by.xpath('//*[@id="mat-input-5"]')).sendKeys('Pranoti@123');
}

getConfirmPassword()
{
    return element(by.xpath('//*[@id="mat-input-6"]')).sendKeys('Pranoti@123');
}

clicksubmitButton()
{
    return element(by.xpath('/html/body/app-root/app-registration/div/div[2]/div/button[1]')).click();
}

/*******************************For Login Page*****************************************/

  getLoginEmail()
  {
    return element(by.xpath('//*[@id="mat-input-0"]')).sendKeys('pranoti1@gmail.com');
  }

  getLoginPassword()
  {
    return element(by.xpath('//*[@id="mat-input-1"]')).sendKeys('Pranoti@123');
  }

  clickLoginButton()
  {
    return element(by.xpath('/html/body/app-root/app-login/div/button[1]')).click();
  }


/****************************************************************************************
  
  @description  Functions for Negative Scripts of Registration page and Login page

*****************************************************************************************/

//Functions for Email and Password Blanck textfield

 getEmailLogin()
 {
    return element(by.xpath('//*[@id="mat-input-0"]')).sendKeys('');
 }

 getPwdLogin()
 {
    return element(by.xpath('//*[@id="mat-input-1"]')).sendKeys('');
 }

 //Functions for Blanck Email field

 getEmail4(){
   return element(by.xpath('//*[@id="mat-input-0"]')).sendKeys('');
 }

 getPwd4(){
   return element(by.xpath('//*[@id="mat-input-1"]')).sendKeys('Pranoti@123');
 }


 //Functions for Blanck password field

 getEmail3(){
   return element(by.xpath('//*[@id="mat-input-0"]')).sendKeys('pranoti1@gmail.com');
 }

 getPwd3(){
   return element(by.xpath('//*[@id="mat-input-1"]')).sendKeys('')
 }

 //Functions for checking whether '@gmail' is present in provided Email Id
 getGmail5(){
   return element(by.xpath('//*[@id="mat-input-0"]')).sendKeys('pranoti.com');
 }

 getPwd5()
 {
   return element(by.xpath('//*[@id="mat-input-1"]')).sendKeys('Pranoti@123');
 }

 //Functions for checking whether '.com' is present in provided Email Id

 getGmail6(){
   return element(by.xpath('//*[@id="mat-input-0"]')).sendKeys('pranoti@gmail');
 }

 getPwd6(){
   return element(by.xpath('//*[@id="mat-input-1"]')).sendKeys('Pranoti@123');
 }


 //Functions for password text field if "Number of character are less than 8" in 
 getGmail8(){
  return element(by.xpath('//*[@id="mat-input-0"]')).sendKeys('pranoti@gmail.com');
 }

 getPwd8(){
  return element(by.xpath('//*[@id="mat-input-1"]')).sendKeys('Pranoti');
 }

 //Functions for password field if first letter is not a Capital letter 
 getGmail9(){
  return element(by.xpath('//*[@id="mat-input-0"]')).sendKeys('pranoti@gmail.com');
 }
 getPwd9(){
  return element(by.xpath('//*[@id="mat-input-1"]')).sendKeys('pranoti@123');
 }

 //Functions for checking Number missing in password
  getGmail10(){
   return element(by.xpath('//*[@id="mat-input-0"]')).sendKeys('pranoti@gmail.com');
  }

  getPwd10(){
    return element(by.xpath('//*[@id="mat-input-1"]')).sendKeys('Pranoti');
  }

  //Functions for checking Special Character in password

  getGmail11(){
    return element(by.xpath('//*[@id="mat-input-0"]')).sendKeys('pranoti@gmail.com');
  }
  getPwd11(){
    return element(by.xpath('//*[@id="mat-input-1"]')).sendKeys('Pranoti123');
  }
 
/**********************************For Registration page********************************/
  
  //Click on Registration Button on Login page
  clickRegistrationButton()
  {
    return element(by.xpath('/html/body/app-root/app-login/div/button[2]')).click();
  }
  
  //for Blanck firstname
  getFirstName7(){
    return element(by.xpath('//*[@id="mat-input-2"]')).sendKeys('');
  }

  //for Blanck lastname
  getLastName8(){
    return element(by.xpath('//*[@id="mat-input-3"]')).sendKeys('');
  }

  //for blanck Mailid
  getEmailId8(){
    return element(by.xpath('//*[@id="mat-input-4"]')).sendKeys('');
  }

  //for blanck Password field
  getNewPassword8(){
    return element(by.xpath('//*[@id="mat-input-5"]')).sendKeys('');
  }

  //for blanck ConfirmPassword field
  getConfirmPassword8(){
    return element(by.xpath('//*[@id="mat-input-6"]')).sendKeys('');
  }

  //for Firstname field ,whether it contains any number
  getFirstName9(){
    return element(by.xpath('//*[@id="mat-input-0"]')).sendKeys('Pranoti123');
  }

  //for Firstname field ,whether it contains any special character
  getFirstName10(){
    return element(by.xpath('//*[@id="mat-input-1"]')).sendKeys('Pranoti@');
  }

  //for Lastname field ,whether it contains any number
  getLastName10(){
    return element(by.xpath('//*[@id="mat-input-0"]')).sendKeys('Kusare123');
  }

  //for Firstname field ,whether it contains any special character
  getLastName11(){
    return element(by.xpath('//*[@id="mat-input-1"]')).sendKeys('Kusare@');
  }

  //for Mailid field ,whether it contains '@gmail'special character
  getEmailId7(){
    return element(by.xpath('//*[@id="mat-input-0"]')).sendKeys('pranoti.com');
  }

  //for Mailid field ,whether it contains '.com'
  getEmailId9(){
    return element(by.xpath('//*[@id="mat-input-1"]')).sendKeys('pranoti@gmail');
  }
 
 
 
  //****************** */u have to do today


  //for Mailid field ,whether it contains 'Number'
  getEmailId10(){
    return element(by.xpath('//*[@id="mat-input-0"]')).sendKeys('pranotigmail');
  }
  
  //for Mailid field ,whether it contains 'alphabets at the starting of mailid'
  getEmailId11(){
    return element(by.xpath('//*[@id="mat-input-1"]')).sendKeys('@gmail.com');
  }
  
  //For password field,whether first letter of password is in lowercase
  getNewPassword9(){
    return element(by.xpath('//*[@id="mat-input-5"]')).sendKeys('pranoti@123');
  }

  //For password field,whether password value contain any special character
  getNewPassword10(){
    return element(by.xpath('//*[@id="mat-input-5"]')).sendKeys('Pranoti123');
  }

  //For password field,whether password value contain any Number
  getNewPassword11(){
    return element(by.xpath('//*[@id="mat-input-5"]')).sendKeys('Pranoti@');
  }

  //For password field,whether length of  password field value is less than 8
  getNewPassword12(){
    return element(by.xpath('//*[@id="mat-input-5"]')).sendKeys('Prano@');
  }

  //for blanck ConfirmPassword field ,whether first letter of password is in lowercase
  getConfirmPassword9(){
    return element(by.xpath('//*[@id="mat-input-6"]')).sendKeys('pranoti@123');
  }

  //for blanck ConfirmPassword field ,whether confirmpassword value contain any special character
  getConfirmPassword10(){
    return element(by.xpath('//*[@id="mat-input-6"]')).sendKeys('Pranoti123');
  }

  //for blanck ConfirmPassword field ,whether confirmPassword value contain any Number
  getConfirmPassword11(){
    return element(by.xpath('//*[@id="mat-input-6"]')).sendKeys('Pranoti@');
  }

  //For confirmpassword field,whether length of confirmpassword field value is less than 8
  getConfirmPassword12(){
    return element(by.xpath('//*[@id="mat-input-6"]')).sendKeys('Prano@');
  }

  //for mismatched password
  getPassword1(){
    return element(by.xpath('//*[@id="mat-input-5"]')).sendKeys('Pranoti@123');
  }
  getConfirmPassword1(){
    return element(by.xpath('//*[@id="mat-input-6"]')).sendKeys('Prano@');
  }

}


