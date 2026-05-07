import InventoryPage from '../pages/InventoryPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';

describe('Checkout Tests', () => {

  beforeEach(() => {

    cy.fixture('users').then((users) => {

      cy.login(
        users.validUser.username,
        users.validUser.password
      );
    });
  });

  it('should complete checkout successfully', () => {

    InventoryPage.addBackpackToCart();

    InventoryPage.openCart();

    CartPage.clickCheckout();

    CheckoutPage.enterFirstName('John');
    CheckoutPage.enterLastName('Doe');
    CheckoutPage.enterPostalCode('10001');

    CheckoutPage.clickContinue();
    CheckoutPage.clickFinish();

    CheckoutPage.verifyOrderComplete();
  });

});