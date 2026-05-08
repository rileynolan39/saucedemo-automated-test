import InventoryPage from '../pages/InventoryPage';

describe('Sorting Tests', () => {

  beforeEach(() => {

    cy.fixture('users').then((users) => {

      cy.login(
        users.validUser.username,
        users.validUser.password
      );
    });
  });

  it('should sort products by name A to Z', () => {

    InventoryPage.selectSortOption('az');

    const productNames = [];

    InventoryPage.getItemNames()
    .each(($el) => {

      productNames.push($el.text());
    })

    .then(() => {

      const sortedNames = [...productNames].sort();

      expect(productNames)
        .to.deep.equal(sortedNames);
    });
  });

  it('should sort products by name Z to A', () => {

    InventoryPage.selectSortOption('za');

    const productNames = [];

    InventoryPage.getItemNames()
    .each(($el) => {

      productNames.push($el.text());
    })

    .then(() => {

      const reverseSorted = [...productNames]
        .sort()
        .reverse();

      expect(productNames)
        .to.deep.equal(reverseSorted);
    });
  });

  it('should sort prices low to high', () => {

   InventoryPage.selectSortOption('lohi');

    const prices = [];

    InventoryPage.getItemPrices()
    .each(($el) => {

      const priceText = $el.text();

      const price = parseFloat(
        priceText.replace('$', '')
      );

      prices.push(price);
    })

    .then(() => {

      const sortedPrices = [...prices]
        .sort((a, b) => a - b);

      expect(prices)
        .to.deep.equal(sortedPrices);
    });
  });

  it('should sort prices high to low', () => {

    InventoryPage.selectSortOption('hilo');

    const prices = [];

    InventoryPage.getItemPrices()
    .each(($el) => {

      const price = parseFloat(
        $el.text().replace('$', '')
      );

      prices.push(price);
    })

    .then(() => {

      const sortedPrices = [...prices]
        .sort((a, b) => b - a);

      expect(prices)
        .to.deep.equal(sortedPrices);
    });
  });

});