import DetailsComponents from "./details-components";

class HomeActions {
  static clickOnAttackButton = (): void => {
    DetailsComponents.getCardAttackButton().click();
  };

  static waitPageLoad = (): void => {
    cy.waitFor("/cards/pl3-141");
  };
}

export default HomeActions;
