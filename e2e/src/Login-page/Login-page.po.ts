import { browser, by, element } from 'protractor';
import { elementStart } from '@angular/core/src/render3';

export class AppPage 
{
  
  navigateTo() 
  {
    return browser.get('/');
  }



  /****************************************************************************************
  
  @description  Functions for Negative Scripts of Registration page and Login page

  *****************************************************************************************/

  











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
    return element(by.xpath('//*[@id="mat-input-4"]')).sendKeys('pranoti@gmail.com');
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
    return element(by.xpath('//*[@id="mat-input-0"]')).sendKeys('pranoti@gmail.com');
  }

  getLoginPassword()
  {
    return element(by.xpath('//*[@id="mat-input-1"]')).sendKeys('Pranoti@123');
  }

  clickLoginButton()
  {
    return element(by.xpath('/html/body/app-root/app-login/div/button[1]')).click();
  }
}

