class CheckoutPage {

  enterFirstName(firstName) {
    cy.get('[data-test="firstName"]').type(firstName);
  }

  enterLastName(lastName) {
    cy.get('[data-test="lastName"]').type(lastName);
  }

  enterPostalCode(postalCode) {
    cy.get('[data-test="postalCode"]').type(postalCode);
  }

  clickContinue() {
    cy.get('[data-test="continue"]').click();
  }

  clickFinish() {
    cy.get('[data-test="finish"]').click();
  }

  verifyOrderComplete() {
    cy.contains('Thank you for your order!')
      .should('be.visible');
  }
}

export default new CheckoutPage();