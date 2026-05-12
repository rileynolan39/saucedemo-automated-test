class CartPage {

  verifyItemInCart(itemName) {
    cy.contains(itemName).should('be.visible');
  }

  clickCheckout() {
    cy.get('[data-test="checkout"]').click();
  }

  removeBackpackFromCart() {
    cy.get('[data-test="remove-sauce-labs-backpack"]')
    .click();
  }

  verifyItemNotInCart(itemName) {
    cy.contains(itemName)
    .should('not.exist');
  }
}

export default new CartPage();