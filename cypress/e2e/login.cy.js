import LoginPage from '../pages/LoginPage';

describe('Login Tests', () => {

  beforeEach(() => {
    LoginPage.visit();
  });

  it('should login successfully with valid credentials', () => {

    cy.fixture('users').then((users) => {

      LoginPage.login(
        users.validUser.username,
        users.validUser.password
      );

      cy.url().should('include', '/inventory');

      cy.get('.inventory_list')
        .should('be.visible');
    });
  });

  it('should show error for invalid credentials', () => {

    cy.fixture('users').then((users) => {

      LoginPage.login(
        users.invalidUser.username,
        users.invalidUser.password
      );

      LoginPage.getErrorMessage()
        .should('contain',
          'Username and password do not match');
    });
  });

  it('should prevent locked out user from logging in', () => {

    cy.fixture('users').then((users) => {

      LoginPage.login(
        users.lockedUser.username,
        users.lockedUser.password
      );

      LoginPage.getErrorMessage()
        .should('contain',
          'Sorry, this user has been locked out.');
    });
  });

});