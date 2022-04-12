import HomeActions from "../page/home/home-actions";
import HomeAsserts from "../page/home/home-asserts";

describe("Home page", () => {
  before(() => {
    cy.visit("/");
  });

  it("validate if search returns correct cards", () => {
    HomeActions.typeOnSearchInput("ash");
    HomeActions.waitPageLoadSearch();
    HomeAsserts.assertCardsName([
      "Ash's Pikachu",
      "Ash's Pikachu",
      "Ash's Pikachu",
      "Ash's Pikachu",
      "Ash's Pikachu",
      "Ash's Pikachu",
      "Ash's Pikachu",
      "Ash-Greninja-EX",
      "Sacred Ash",
    ]);
  });
});
