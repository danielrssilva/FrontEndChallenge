class CardDetailsComponents {
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
    return cy.getDataTest("card-tag");
  }

  static getCardResistance(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.getDataTest("card-tag");
  }

  static getCardWeakness(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.getDataTest("card-tag");
  }

  static getAbilityName(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.getDataTest("ability-name");
  }

  static getAbilityType(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.getDataTest("ability-type");
  }

  static getCardAttacks(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.getDataTest("card-attack");
  }

  static getCardAttackButton(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.getDataTest("card-attack");
  }

  static getCardRules(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.getDataTest("card-rule");
  }

  static getModalAttackName(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.getDataTest("modal-attack-name");
  }

  static getModalAttackDmg(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.getDataTest("modal-attack-dmg");
  }

  static getModalAttackText(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.getDataTest("modal-attack-text");
  }
}

export default CardDetailsComponents;
