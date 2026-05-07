import InventoryPage from '../pages/InventoryPage';
import CartPage from '../pages/CartPage';

describe('Cart Tests', () => {

  beforeEach(() => {

    cy.fixture('users').then((users) => {

      cy.login(
        users.validUser.username,
        users.validUser.password
      );
    });
  });

  it('should add items to cart', () => {

    InventoryPage.addBackpackToCart();
    InventoryPage.addBikeLightToCart();

    InventoryPage.verifyCartBadge(2);

    InventoryPage.openCart();

    CartPage.verifyItemInCart(
      'Sauce Labs Backpack'
    );

    CartPage.verifyItemInCart(
      'Sauce Labs Bike Light'
    );
  });

});