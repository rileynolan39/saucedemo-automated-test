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

  selectSortOption(option) {
    cy.get('[data-test="product-sort-container"]')
      .select(option);
  }

  getItemNames() {
    return cy.get('.inventory_item_name');
  }

  getItemPrices() {
    return cy.get('.inventory_item_price');
  }

}

export default new InventoryPage();