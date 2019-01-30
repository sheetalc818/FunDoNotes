import { AppPage } from './app.po';
import { elementStart } from '@angular/core/src/render3';
import { browser } from 'protractor';



describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Hii User, Welcome!!');
  });

  it('should display Login button',() => {
    page.navigateTo();
    expect(page.getLoginButton().getText()).toEqual('Login');
  });

  it('should click on Login button', () => {
    //page.navigateTo();
    expect(page.getEmail());
    expect(page.getPassword());
    browser.sleep(3000);
    expect(page.clickLogin());
  });

  it('should route to Dashboard page',() => {
    browser.sleep(3000);
    page.navigateTo();
    expect(page.clickLogin());
    });
  
});

  





