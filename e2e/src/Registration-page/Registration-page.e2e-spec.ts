
/*import { RegistrationPage } from './Registration-page.po';
import { elementStart } from '@angular/core/src/render3';
import { browser } from 'protractor';

  describe('workspace-project App', () => 
  {
    let page: RegistrationPage;

  beforeEach(() => {
    page = new RegistrationPage();
  });

  it('should click on Login button', () => {
    page.navigateTo();
    expect(page.getEmail());
    browser.sleep(300);
    expect(page.getPassword());
    browser.sleep(3000);
    expect(page.clickRegistrationButton());
    });

  it('should display all text field values', () =>
  {
    page.navigateTo();
    browser.sleep(500);
    expect(page.getFirstName());
    browser.sleep(500);
    expect(page.getLastName());
    browser.sleep(500);
    expect(page.getEmail());
    browser.sleep(500);
    expect(page.getPassword());
    browser.sleep(500);
    expect(page.getConfirmPassword());
    browser.sleep(500);
  })
  /*it('Should click Submit button', () => {
    page.navigateTo();
    browser.sleep(3000);
    expect(page.clickSubmitButton());
  });

  it('should route to Registration page', () => {
    page.navigateTo();
    browser.sleep(3000);
  });
})*/