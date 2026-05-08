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

// Positive Tests
  it('should complete checkout successfully', () => {

    navigateToCheckout();

    CheckoutPage.enterFirstName('John');
    CheckoutPage.enterLastName('Doe');
    CheckoutPage.enterPostalCode('10001');

    CheckoutPage.clickContinue();
    CheckoutPage.clickFinish();

    CheckoutPage.verifyOrderComplete();
  });

// Negative Tests
  it('should show error when first name is missing', () => {

    navigateToCheckout();

    CheckoutPage.enterLastName('Doe');
    CheckoutPage.enterPostalCode('10001');

    CheckoutPage.clickContinue();

    CheckoutPage.getErrorMessage()
    .should('contain', 'First Name is required');
  });

  it('should show error when last name is missing', () => {

    navigateToCheckout();

    CheckoutPage.enterFirstName('John');
    CheckoutPage.enterPostalCode('10001');

    CheckoutPage.clickContinue();

    CheckoutPage.getErrorMessage()
    .should('contain', 'Last Name is required');
  });

  it('should show error when postal code is missing', () => {

    navigateToCheckout();

    CheckoutPage.enterFirstName('John');
    CheckoutPage.enterLastName('Doe');

    CheckoutPage.clickContinue();

    CheckoutPage.getErrorMessage()
    .should('contain', 'Postal Code is required');
  });

  it('should show error when all checkout fields are empty', () => {

    navigateToCheckout();

    CheckoutPage.clickContinue();

    CheckoutPage.getErrorMessage()
    .should('be.visible');
  });

//Helper Functions
  function navigateToCheckout() {

    InventoryPage.addBackpackToCart();

    InventoryPage.openCart();

    CartPage.clickCheckout();
  }

});