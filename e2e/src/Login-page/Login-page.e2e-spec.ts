
/**************************************************************************************

 @Purpose : Specification file used by protractor to run the Testscipts using Angular 6
            and uses Jasmine as a test framework

 @Author  : Sheetal Chaudhari

 @version : protractor 5.4.0 

 @Date    : 25/01/2019

***************************************************************************************/


 import { AppPage } from './Login-page.po';
 import { browser, by, element } from 'protractor';

  describe('workspace-project App', () => {
    let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  /*it('should display Title Text', () => {
    page.navigateTo();
    browser.pause();
    expect(page.getTitleText()).toEqual('Hii User, Welcome!!');
  });*/

 /****************************Positive Scripts**********************************************/

  it('should click on "Register" button and go to the Registration page',()=>{
    page.navigateTo();
    browser.sleep(2000);
    expect(page.clickRegister());
   });

  it('should fill all text fields of Registration page and click on "Submit" button ',()=>{
    browser.sleep(2000);
    expect(page.getFirstName());
    browser.sleep(2000);
    expect(page.getLastName());
    browser.sleep(2000);
    expect(page.getEmailId());
    browser.sleep(2000);
    expect(page.getPassword());
    browser.sleep(2000);
    expect(page.getConfirmPassword());
    browser.sleep(2000);
    expect(page.clicksubmitButton());
    browser.sleep(3000);
    page.navigateTo();
  });

  it('should put values in Login page, Click on "Login" button and route to "dashboard"', () => {
    browser.sleep(2000);
    browser.sleep(2000);
    expect(page.getLoginEmail());
    browser.sleep(2000);
    expect(page.getLoginPassword());
    browser.sleep(3000)
    expect(page.clickLoginButton());
    browser.sleep(2000);
    page.navigateTo();
  });


/********************************Negative Scripts*****************************************************/
  
 it('should show Invalid Result for Email and Password Fields if Both Text fields are blanck', () => {

  browser.sleep(2000);
  expect(page.getEmailLogin());
  browser.sleep(3000);
  expect(page.getPwdLogin());
  browser.sleep(3000);
  expect(page.clickLoginButton());
  browser.sleep(2000);
  page.navigateTo();
 });


 it('should show Invalid Result ,if Email field is Empty and Password field has value', () => {

  browser.sleep(2000);
  expect(page.getEmail4());
  browser.sleep(2000)
  expect(page.getPwd4());
  browser.sleep(2000);
  expect(page.clickLoginButton());
  browser.sleep(3000);
  page.navigateTo();

});

 it('should show Invalid Result ,if Email field has value and Password field is Empty ', () => {

  browser.sleep(2000);
  expect(page.getEmail3());
  browser.sleep(2000)
  expect(page.getPwd3());
  browser.sleep(2000);
  expect(page.clickLoginButton());
  browser.sleep(3000);
  page.navigateTo();

});


it('should show Invalid Result if @gmail is missing in Mailid', () => {

  browser.sleep(2000);
  expect(page.getGmail5());
  browser.sleep(3000);
  expect(page.getPwd5());
  browser.sleep(3000);
  expect(page.clickLoginButton());
  browser.sleep(2000);
  page.navigateTo();
});

it('should show Invalid Result if ".com" is missing in Mailid', () => {

  browser.sleep(2000);
  expect(page.getGmail6());
  browser.sleep(2000);
  expect(page.getPwd6());
  browser.sleep(2000);
  expect(page.clickLoginButton());
  browser.sleep(2000);
  page.navigateTo();
});


it('should show Invalid Result if "Number of character are less than 8" in password text field', () => {

  browser.sleep(2000);
  expect(page.getGmail8());
  browser.sleep(2000);
  expect(page.getPwd8());
  browser.sleep(2000);
  expect(page.clickLoginButton());
  browser.sleep(2000);
  page.navigateTo();
});

it('should show Invalid Result if first letter is not a Capital letter in password value ', () => {

  browser.sleep(2000);
  expect(page.getGmail9());
  browser.sleep(2000);
  expect(page.getPwd9());
  browser.sleep(2000);
  expect(page.clickLoginButton());
  browser.sleep(2000);
  page.navigateTo();
});

it('should show Invalid Result if "Numbers" are missing in password ', () => {

  browser.sleep(2000);
  expect(page.getGmail10());
  browser.sleep(2000);
  expect(page.getPwd10());
  browser.sleep(2000);
  expect(page.clickLoginButton());
  browser.sleep(2000);
  page.navigateTo();
});

it('should show Invalid Result if "Special Character" is missing in password', () => {

  browser.sleep(2000);
  expect(page.getGmail11());
  browser.sleep(2000);
  expect(page.getPwd11());
  browser.sleep(2000);
  expect(page.clickLoginButton());
  browser.sleep(2000)
  page.navigateTo();
})


/**********************Invalid TestScripts For Registration Page**************************/

/*****************************************************************************************/


//Navigate to registration page
it('should click on "Register" button and route to Registration Page  ', () => {
  page.navigateTo();
  browser.sleep(1000)  
  expect(page.clickRegistrationButton());
  browser.sleep(1000);
});

/******************************Testscripts for Blanck TextFields***************************/

it('should show Invalid Result if "FirstName" field is blanck', () => {
  browser.sleep(2000);
  expect(page.getFirstName7()) ;
  browser.sleep(3000)
  expect(page.getLastName()); 
  browser.sleep(3000);
  expect(page.getEmailId());  
  browser.sleep(3000);
  expect(page.getPassword()) ;
  browser.sleep(3000);
  expect(page.getConfirmPassword()) ;
  browser.sleep(3000);
  expect(page.clicksubmitButton()); 
  browser.sleep(2000);
  page.navigateTo();
 });

 it('should show Invalid Result if "LastName" field is blanck', () => {
  browser.sleep(2000);
  expect(page.clickRegistrationButton());
  expect(page.getFirstName()) ;
  browser.sleep(3000)
  expect(page.getLastName8()); 
  browser.sleep(3000);
  expect(page.getEmailId());  
  browser.sleep(3000);
  expect(page.getPassword()) ;
  browser.sleep(3000);
  expect(page.getConfirmPassword()) ;
  browser.sleep(3000);
  expect(page.clicksubmitButton()); 
  browser.sleep(2000);
  page.navigateTo();
 });
 

 it('should show Invalid Result if "EmailId" field is blanck', () => {
  browser.sleep(2000);
  expect(page.clickRegistrationButton());
  expect(page.getFirstName()) ;
  browser.sleep(3000)
  expect(page.getLastName()); 
  browser.sleep(3000);
  expect(page.getEmailId8());  
  browser.sleep(3000);
  expect(page.getPassword()) ;
  browser.sleep(3000);
  expect(page.getConfirmPassword()) ;
  browser.sleep(3000);
  expect(page.clicksubmitButton()); 
  browser.sleep(2000);
  page.navigateTo();
 });

 it('should show Invalid Result if "Password" field is blanck', () => {
  browser.sleep(2000);
  expect(page.clickRegistrationButton());
  expect(page.getFirstName()) ;
  browser.sleep(2000)
  expect(page.getLastName()); 
  browser.sleep(2000);
  expect(page.getEmailId());  
  browser.sleep(2000);
  expect(page.getNewPassword8()) ;
  browser.sleep(2000);
  expect(page.getConfirmPassword()) ;
  browser.sleep(2000);
  expect(page.clicksubmitButton()); 
  browser.sleep(2000);
  page.navigateTo();
 });

 it('should show Invalid Result if "confirmPassword" field is blanck', () => {
  browser.sleep(2000);
  expect(page.clickRegistrationButton());
  expect(page.getFirstName()) ;
  browser.sleep(2000)
  expect(page.getLastName()); 
  browser.sleep(2000);
  expect(page.getEmailId());  
  browser.sleep(2000);
  expect(page.getPassword()) ;
  browser.sleep(2000);
  expect(page.getConfirmPassword8()) ;
  browser.sleep(2000);
  expect(page.clicksubmitButton()); 
  browser.sleep(2000);
  page.navigateTo();
 });

/********************************Testscripts for Firstname********************************/
 
it('should show Invalid Result if "FirstName" field value contains any number', () => {
  browser.sleep(2000);
  expect(page.getFirstName9()) ;
  browser.sleep(2000)
  expect(page.getLastName()); 
  browser.sleep(2000);
  expect(page.getEmailId());  
  browser.sleep(2000);
  expect(page.getPassword()) ;
  browser.sleep(2000);
  expect(page.getConfirmPassword()) ;
  browser.sleep(2000);
  expect(page.clicksubmitButton()); 
  browser.sleep(2000);
  page.navigateTo();
 });

 it('should show Invalid Result if "FirstName" field value contains any special character', () => {
  browser.sleep(2000);
  expect(page.getFirstName10()) ;
  browser.sleep(3000)
  expect(page.getLastName()); 
  browser.sleep(3000);
  expect(page.getEmailId());  
  browser.sleep(3000);
  expect(page.getPassword()) ;
  browser.sleep(3000);
  expect(page.getConfirmPassword()) ;
  browser.sleep(3000);
  expect(page.clicksubmitButton()); 
  browser.sleep(2000);
  page.navigateTo();
 });
 
 /********************************Testscripts for Lastname********************************
  
 it('should show Invalid Result if "LastName" field value contains any number', () => {
  browser.sleep(5000);
  expect(page.getFirstName()) ;
  browser.sleep(3000)
  expect(page.getLastName10()); 
  browser.sleep(3000);
  expect(page.getEmailId());  
  browser.sleep(3000);
  expect(page.getPassword()) ;
  browser.sleep(3000);
  expect(page.getConfirmPassword()) ;
  browser.sleep(3000);
  expect(page.clicksubmitButton()); 
  browser.sleep(5000);
  page.navigateTo();
 });
 
 it('should show Invalid Result if "LastName" field value contains any Special Character', () => {
  browser.sleep(5000);
  expect(page.getFirstName()) ;
  browser.sleep(3000)
  expect(page.getLastName11()); 
  browser.sleep(3000);
  expect(page.getEmailId());  
  browser.sleep(3000);
  expect(page.getPassword()) ;
  browser.sleep(3000);
  expect(page.getConfirmPassword()) ;
  browser.sleep(3000);
  expect(page.clicksubmitButton()); 
  browser.sleep(5000);
  page.navigateTo();
 });

/********************************Testscripts for MailId********************************

 it('should show Invalid Result if "MailId" field value not contain "@gmail" Special Character', () => {
  browser.sleep(5000);
  expect(page.getFirstName()) ;
  browser.sleep(3000)
  expect(page.getLastName()); 
  browser.sleep(3000);
  expect(page.getEmailId7());  
  browser.sleep(3000);
  expect(page.getPassword()) ;
  browser.sleep(3000);
  expect(page.getConfirmPassword()) ;
  browser.sleep(3000);
  expect(page.clicksubmitButton()); 
  browser.sleep(5000);
  page.navigateTo();
 });

 it('should show Invalid Result if "MailId" field value not contain ".com"', () => {
  browser.sleep(2000);
  expect(page.getFirstName()) ;
  browser.sleep(3000)
  expect(page.getLastName()); 
  browser.sleep(3000);
  expect(page.getEmailId9());  
  browser.sleep(3000);
  expect(page.getPassword()) ;
  browser.sleep(3000);
  expect(page.getConfirmPassword()) ;
  browser.sleep(3000);
  expect(page.clicksubmitButton()); 
  browser.sleep(2000);
  page.navigateTo();
 });

  it('should show Invalid Result if "MailId" field value not contain "Number"', () => {
  browser.sleep(2000);
  expect(page.getFirstName()) ;
  browser.sleep(3000)
  expect(page.getLastName()); 
  browser.sleep(3000);
  expect(page.getEmailId10());  
  browser.sleep(3000);
  expect(page.getPassword()) ;
  browser.sleep(3000);
  expect(page.getConfirmPassword()) ;
  browser.sleep(3000);
  expect(page.clicksubmitButton()); 
  browser.sleep(2000);
  page.navigateTo();
  });

  it('should show Invalid Result if "MailId" field value not contain "alphabets or numbers at the starting" before @gmail.com', () => {
  browser.sleep(2000);
  expect(page.getFirstName()) ;
  browser.sleep(3000)
  expect(page.getLastName()); 
  browser.sleep(3000);
  expect(page.getEmailId10());  
  browser.sleep(3000);
  expect(page.getPassword()) ;
  browser.sleep(3000);
  expect(page.getConfirmPassword()) ;
  browser.sleep(3000);
  expect(page.clicksubmitButton()); 
  browser.sleep(2000);
  page.navigateTo();
  });

  it('should show Invalid Result if "MailId" field value not contain "Characters"', () => {
  browser.sleep(2000);
  expect(page.getFirstName()) ;
  browser.sleep(3000)
  expect(page.getLastName()); 
  browser.sleep(3000);
  expect(page.getEmailId11());  
  browser.sleep(3000);
  expect(page.getPassword()) ;
  browser.sleep(3000);
  expect(page.getConfirmPassword()) ;
  browser.sleep(3000);
  expect(page.clicksubmitButton()); 
  browser.sleep(2000);
  page.navigateTo();
 });*/

 /********************************Testscripts for Password********************************/

 it('should show Invalid Result if First letter in "Password" field is in lowercase', () => {
  browser.sleep(2000);
  expect(page.clickRegistrationButton());
  expect(page.getFirstName()) ;
  browser.sleep(3000)
  expect(page.getLastName()); 
  browser.sleep(3000);
  expect(page.getEmailId());  
  browser.sleep(3000);
  expect(page.getNewPassword9()) ;
  browser.sleep(3000);
  expect(page.getConfirmPassword()) ;
  browser.sleep(3000);
  expect(page.clicksubmitButton()); 
  browser.sleep(2000);
  page.navigateTo();
 });

 it('should show Invalid Result if "Password" field value contain any special character', () => {
  browser.sleep(2000);
  expect(page.clickRegistrationButton());
  expect(page.getFirstName()) ;
  browser.sleep(3000)
  expect(page.getLastName()); 
  browser.sleep(3000);
  expect(page.getEmailId());  
  browser.sleep(3000);
  expect(page.getNewPassword10()) ;
  browser.sleep(3000);
  expect(page.getConfirmPassword()) ;
  browser.sleep(3000);
  expect(page.clicksubmitButton()); 
  browser.sleep(2000);
  page.navigateTo();
 });


 it('should show Invalid Result if "Password" field value contain any Number', () => {
  browser.sleep(2000);
  expect(page.clickRegistrationButton());
  expect(page.getFirstName()) ;
  browser.sleep(3000)
  expect(page.getLastName()); 
  browser.sleep(3000);
  expect(page.getEmailId());  
  browser.sleep(3000);
  expect(page.getNewPassword11()) ;
  browser.sleep(3000);
  expect(page.getConfirmPassword()) ;
  browser.sleep(3000);
  expect(page.clicksubmitButton()); 
  browser.sleep(2000);
  page.navigateTo();
 });

 it('should show Invalid Result if length of "Password" field value is less than 8', () => {
  browser.sleep(2000);
  expect(page.clickRegistrationButton());
  expect(page.getFirstName()) ;
  browser.sleep(3000)
  expect(page.getLastName()); 
  browser.sleep(3000);
  expect(page.getEmailId());  
  browser.sleep(3000);
  expect(page.getNewPassword12()) ;
  browser.sleep(3000);
  expect(page.getConfirmPassword()) ;
  browser.sleep(3000);
  expect(page.clicksubmitButton()); 
  browser.sleep(2000);
  page.navigateTo();
 });
 

 /********************************Testscripts for confirmPassword************************************/
 
 it('should show Invalid Result if "confirmPassword" first letter of password is in lowercase ', () => {
  browser.sleep(2000);
  expect(page.clickRegistrationButton());
  expect(page.getFirstName()) ;
  browser.sleep(3000)
  expect(page.getLastName()); 
  browser.sleep(3000);
  expect(page.getEmailId());  
  browser.sleep(3000);
  expect(page.getPassword()) ;
  browser.sleep(3000);
  expect(page.getConfirmPassword9()) ;
  browser.sleep(3000);
  expect(page.clicksubmitButton()); 
  browser.sleep(2000);
  page.navigateTo();
 });

 it('should show Invalid Result if "confirmPassword" value contain any special character', () => {
  browser.sleep(2000);
  expect(page.clickRegistrationButton());
  expect(page.getFirstName()) ;
  browser.sleep(3000)
  expect(page.getLastName()); 
  browser.sleep(3000);
  expect(page.getEmailId());  
  browser.sleep(3000);
  expect(page.getPassword()) ;
  browser.sleep(3000);
  expect(page.getConfirmPassword10()) ;
  browser.sleep(3000);
  expect(page.clicksubmitButton()); 
  browser.sleep(2000);
  page.navigateTo();
 });

 it('should show Invalid Result if "confirmPassword" value contain any Number', () => {
  browser.sleep(2000);
  expect(page.clickRegistrationButton());
  expect(page.getFirstName()) ;
  browser.sleep(3000)
  expect(page.getLastName()); 
  browser.sleep(3000);
  expect(page.getEmailId());  
  browser.sleep(3000);
  expect(page.getPassword()) ;
  browser.sleep(3000);
  expect(page.getConfirmPassword11()) ;
  browser.sleep(3000);
  expect(page.clicksubmitButton()); 
  browser.sleep(2000);
  page.navigateTo();
 });

 it('should show Invalid Result if "confirmPassword" length of field value is less than 8', () => {
  browser.sleep(2000);
  expect(page.clickRegistrationButton());
  expect(page.getFirstName()) ;
  browser.sleep(3000)
  expect(page.getLastName()); 
  browser.sleep(3000);
  expect(page.getEmailId());  
  browser.sleep(3000);
  expect(page.getPassword()) ;
  browser.sleep(3000);
  expect(page.getConfirmPassword12()) ;
  browser.sleep(3000);
  expect(page.clicksubmitButton()); 
  browser.sleep(2000);
  page.navigateTo();
 });


 /********************************Testscripts Password Mismatch****************************/

 it('should show Invalid Result if "password" and "confirmPassword" fields values are not matched', () => {
  browser.sleep(2000);
  expect(page.clickRegistrationButton());
  expect(page.getFirstName()) ;
  browser.sleep(3000)
  expect(page.getLastName()); 
  browser.sleep(3000);
  expect(page.getEmailId());  
  browser.sleep(3000);
  expect(page.getPassword1()) ;
  browser.sleep(3000);
  expect(page.getConfirmPassword1()) ;
  browser.sleep(3000);
  expect(page.clicksubmitButton()); 
  browser.sleep(2000);
  page.navigateTo();
 });

})

 



