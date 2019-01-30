import { browser, by, element } from 'protractor';
import { elementStart } from '@angular/core/src/render3';

export class AppPage 
{
  
  navigateTo() 
  {
    return browser.get('/');
  }

  clickregister()
  {
    return element(by.xpath('/html/body/app-root/app-login/div/button[2]')).click();
  }

  getfirstname()
  {
    return element(by.xpath('//*[@id="mat-input-2"]')).sendKeys('Pranoti');
  }

  getlastname()
  {
    return element(by.xpath('//*[@id="mat-input-3"]')).sendKeys('Kusare');
  }

  getemailid()
  {
    return element(by.xpath('//*[@id="mat-input-4"]')).sendKeys('pranoti@gmail.com');
  }

  getpassword()
  {
    return element(by.xpath('//*[@id="mat-input-5"]')).sendKeys('Pranoti@123');
  }

  getcpwd()
  {
    return element(by.xpath('//*[@id="mat-input-6"]')).sendKeys('Pranoti@123');
  }

  clicksubmit()
  {
    return element(by.xpath('/html/body/app-root/app-registration/div/div[2]/div/button[1]')).click();
  }


/*******************************for login page*******************************************/

  getEmail()
  {
    return element(by.xpath('//*[@id="mat-input-0"]')).sendKeys('pranoti@gmail.com');
  }

  getPassword()
  {
    return element(by.xpath('//*[@id="mat-input-1"]')).sendKeys('Pranoti@123');
  }


  clickLogin()
  {
    return element(by.xpath('/html/body/app-root/app-login/div/button[1]')).click();
  }
}

