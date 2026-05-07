class LoginPage {

  visit() {
    cy.visit('/');
  }

  typeUsername(username) {
    cy.get('[data-test="username"]').type(username);
  }

  typePassword(password) {
    cy.get('[data-test="password"]').type(password);
  }

  clickLogin() {
    cy.get('[data-test="login-button"]').click();
  }

  login(username, password) {
    this.typeUsername(username);
    this.typePassword(password);
    this.clickLogin();
  }

  getErrorMessage() {
    return cy.get('[data-test="error"]');
  }
}

export default new LoginPage();