
import { AppPage } from './Login-page.po';
import { browser, by, element } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

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
    browser.sleep(5000);
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
});

	
/* it('should display FundooNotes', () => {
    page.navigateTo();
    // browser.pause();
    expect(page.getTitleText()).toEqual('FundooNotes');
  });*/

  /*it('should put value in login page field & go to dash-board', () => {
    browser.sleep(2000);
    page.navigateTo();
    browser.sleep(2000);
    expect(page.getEmail())
    browser.sleep(2000);
    expect(page.getPassword())
    browser.sleep(3000)
    expect(page.clickLogin())
  });*/
 /* it('click Login & go to the dash-board', () => {
    browser.sleep(2000);
    page.navigateTo();
    expect(page.clickLogin())
  });*/




