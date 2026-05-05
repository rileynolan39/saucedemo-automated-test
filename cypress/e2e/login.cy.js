import LoginPage from '../pages/LoginPage';

describe('Login Tests', () => {

  it('should login with valid credentials', () => {
    LoginPage.visit();
    LoginPage.enterUsername('standard_user');
    LoginPage.enterPassword('secret_sauce');
    LoginPage.clickLogin();

    cy.url().should('include', '/inventory');
  });

  it('should show error for invalid login', () => {
    LoginPage.visit();
    LoginPage.enterUsername('invalid_user');
    LoginPage.enterPassword('wrong_pass');
    LoginPage.clickLogin();

    cy.contains('Username and password do not match');
  });

});