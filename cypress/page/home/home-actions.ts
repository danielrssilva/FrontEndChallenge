import HomeComponents from "./home-components";

class HomeActions {
  static clickOnSearchInput = (): void => {
    HomeComponents.getSearchInput().click();
  };

  static clickOnSearchInputClearButton = (): void => {
    HomeComponents.getSearchInputClearButton().click();
  };

  static typeOnSearchInput = (text: string): void => {
    HomeComponents.getSearchInput().click();
    HomeComponents.getSearchInput().type(text);
  };

  static searchForCardNoResults = (text: string): void => {
    HomeComponents.getSearchInput().click();
    HomeComponents.getSearchInput().type(text);
    HomeComponents.getNoResults().should(
      "have.text",
      "Seems like you are out of cards"
    );
  };

  static waitHomePageLoad = (): void => {
    cy.waitFor("/api/cards?orderBy=name");
  };

  static waitPageLoadSearch = (): void => {
    cy.waitFor("/api/cards?orderBy=name&q=*ash");
  };
}

export default HomeActions;
