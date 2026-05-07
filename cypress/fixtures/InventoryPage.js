class InventoryPage {

  addBackpackToCart() {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  }

  addBikeLightToCart() {
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  }

  openCart() {
    cy.get('.shopping_cart_link').click();
  }

  verifyCartBadge(count) {
    cy.get('.shopping_cart_badge')
      .should('contain', count);
  }
}

export default new InventoryPage();