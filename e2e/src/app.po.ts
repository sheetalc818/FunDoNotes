import { browser, by, element } from 'protractor';
import { elementStart } from '@angular/core/src/render3';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('app-login h3')).getText();
  }

  getEmail(){
    return element(by.xpath('//*[@id="mat-input-0"]')).sendKeys('pawan@gmail.com');
  }

  getPassword(){
    return element(by.xpath('//*[@id="mat-input-1"]')).sendKeys('Pawan@123');
  }
    
  getLoginButton(){
    return element(by.buttonText('Login'));
  }

  clickLogin(){
    browser.sleep(1000);
    return element(by.xpath('/html/body/app-root/app-login/div/button[1]')).click();
  }
  
}
    


