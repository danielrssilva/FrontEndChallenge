class HomeComponents {
  static getSearchInput(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.getDataTest("search-input");
  }

  static getSearchInputClearButton(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.getDataTest("clear-button");
  }

  static getCardName(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.getDataTest("card-name");
  }

  static getCardId(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.getDataTest("card-id");
  }

  static getCardImage(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.getDataTest("card-image");
  }

  static getCardPlaceholderImage(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.getDataTest("card-placeholder-image");
  }

  static getCardType(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.getDataTest("card-type");
  }

  static getNoResults(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.getDataTest("no-data-message");
  }
}

export default HomeComponents;
