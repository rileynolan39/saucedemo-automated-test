import InventoryPage from '../pages/InventoryPage';
import CartPage from '../pages/CartPage';

describe('Remove From Cart Tests', () => {

  beforeEach(() => {

    cy.fixture('users').then((users) => {

      cy.login(
        users.validUser.username,
        users.validUser.password
      );
    });
  });

  it('should remove item from cart on inventory page', () => {

    InventoryPage.addBackpackToCart();

    InventoryPage.verifyCartBadge(1);

    InventoryPage.removeBackpackFromCart();

    InventoryPage.verifyCartBadgeDoesNotExist();
  });

  it('should remove item from cart page', () => {

    InventoryPage.addBackpackToCart();

    InventoryPage.openCart();

    CartPage.verifyItemInCart(
      'Sauce Labs Backpack'
    );

    CartPage.removeBackpackFromCart();

    CartPage.verifyItemNotInCart(
      'Sauce Labs Backpack'
    );
  });

  it('should update cart badge after removing item', () => {

    InventoryPage.addBackpackToCart();

    InventoryPage.verifyCartBadge(1);

    InventoryPage.removeBackpackFromCart();

    InventoryPage.verifyCartBadgeDoesNotExist();
  });

  it('should remove only selected item from cart', () => {

    InventoryPage.addBackpackToCart();
    InventoryPage.addBikeLightToCart();

    InventoryPage.verifyCartBadge(2);

    InventoryPage.removeBackpackFromCart();

    InventoryPage.verifyCartBadge(1);

    InventoryPage.openCart();

    CartPage.verifyItemNotInCart(
      'Sauce Labs Backpack'
    );

    CartPage.verifyItemInCart(
      'Sauce Labs Bike Light'
    );
  });

});