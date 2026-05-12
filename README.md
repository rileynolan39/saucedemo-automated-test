# Cypress SauceDemo Automation Framework

## Project Overview

This project is an end-to-end automated testing framework built using Cypress for the SauceDemo sample e-commerce application.

The purpose of this project is to demonstrate:
- UI test automation skills
- QA testing methodology
- Page Object Model (POM) architecture
- Functional and negative testing
- Data-driven testing
- Reusable automation framework design

This project was created as part of a QA automation portfolio to showcase practical testing and automation engineering skills.

---

# Tech Stack

| Tool | Purpose |
|---|---|
| JavaScript | Programming language |
| Cypress | End-to-end test automation |
| Node.js | Runtime environment |
| Mochawesome *WIP* | Test reporting |
| GitHub Actions *WIP* | Continuous Integration |

---

# Application Under Test

- Website: https://www.saucedemo.com
- Type: E-commerce testing application

---

# Project Structure

```text
cypress-saucedemo/
│
├── cypress/
│   ├── e2e/
│   │   ├── login.cy.js
│   │   ├── cart.cy.js
│   │   ├── checkout.cy.js
│   │   ├── sorting.cy.js
│   │   └── remove-from-cart.cy.js
│   │
│   ├── fixtures/
│   │   └── users.json
│   │
│   ├── pages/
│   │   ├── LoginPage.js
│   │   ├── InventoryPage.js
│   │   ├── CartPage.js
│   │   └── CheckoutPage.js
│   │
│   └── support/
│       ├── commands.js
│       └── e2e.js
│
├── cypress.config.js
├── package.json
└── README.md
```

---

# Features Covered

## Authentication Testing
- Valid login
- Invalid login
- Locked-out user validation

## Cart Testing
- Add item to cart
- Remove item from cart
- Cart badge validation
- Multi-item cart validation

## Checkout Testing
- Successful checkout flow
- Missing field validation
- Empty form validation

## Sorting Validation
- Name sorting (A → Z)
- Name sorting (Z → A)
- Price sorting (Low → High)
- Price sorting (High → Low)

---

# Framework Design

This framework uses the **Page Object Model (POM)** design pattern to improve:
- Test readability
- Reusability
- Maintainability
- Scalability

Reusable commands and fixtures are also used to reduce code duplication.

---

# Installation

## Clone Repository

```bash
git clone https://github.com/rileynolan39/saucedemo-automated-test
```

---

## Install Dependencies

```bash
npm install
```

---

# Running Tests

## Open Cypress Test Runner

```bash
npx cypress open
```

---

## Run Tests Headlessly

```bash
npx cypress run
```

---

# Example Test Scenarios

## Login Test

```javascript
it('should login successfully with valid credentials', () => {

  cy.login('standard_user', 'secret_sauce');

  cy.url().should('include', '/inventory');
});
```

---

## Negative Checkout Validation

```javascript
it('should show error when postal code is missing', () => {

  CheckoutPage.clickContinue();

  CheckoutPage.getErrorMessage()
    .should('contain', 'Postal Code is required');
});
```

---

# Test Reporting *WIP*

This framework can be integrated with:
- Mochawesome reporting
- Screenshots on failure
- Video recording
- CI pipelines

---

# Continuous Integration *WIP*

This project can be integrated with:
- GitHub Actions
- Jenkins
- Azure DevOps

---

# Skills Demonstrated

- QA Automation
- Functional Testing
- Negative Testing
- UI Validation
- Data-Driven Testing
- End-to-End Testing
- Test Framework Design
- JavaScript Automation
- Cypress Automation
- Page Object Model
- Git Workflow
- CI/CD Integration

---

# Future Improvements

Potential future enhancements:
- API testing integration
- Cross-browser execution
- Parallel test execution
- Dynamic test data generation
- Visual regression testing
- Docker integration

---

# Author

Riley Nolan

QA Automation Portfolio Project

---

# Notes

This project is intended for educational and portfolio purposes and uses the public SauceDemo testing application.
