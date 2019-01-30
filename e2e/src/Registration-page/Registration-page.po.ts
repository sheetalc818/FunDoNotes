import { browser, by, element } from 'protractor';
import { elementStart } from '@angular/core/src/render3';

export class RegistrationPage
{
    navigateTo() {
    return browser.get('/');
}

getFirstName()
{
    return element(by.xpath('//*[@id="mat-input-1"]')).sendKeys('Pawan');
}

getLastName()
{
    return element(by.xpath('//*[@id="mat-input-2"]')).sendKeys('Patil');
}

getEmail()
{
    return element(by.xpath('//*[@id="mat-input-3"]')).sendKeys('pawan@gmail.com');
}

getPassword()
{
    return element(by.xpath('//*[@id="mat-input-4"]')).sendKeys('Pawan@123');
}

getConfirmPassword()
{
    return element(by.xpath('//*[@id="mat-input-5"]')).sendKeys('Pawan@123');
}

/*//Find a Login button by text
getSubmitButton()
{
    return element(by.buttonText('Submit'));
}

clickSubmitButton()
{
   return element(by.xpath('/html/body/app-root/app-registration/div/div[2]/div/button[1]/span/b')).click();
}*/

clickRegistrationButton(){
    return element(by.xpath('/html/body/app-root/app-login/div/button[2]')).click();
   }
}
    

