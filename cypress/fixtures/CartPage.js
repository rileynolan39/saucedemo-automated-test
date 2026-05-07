class CartPage {

  verifyItemInCart(itemName) {
    cy.contains(itemName).should('be.visible');
  }

  clickCheckout() {
    cy.get('[data-test="checkout"]').click();
  }
}

export default new CartPage();