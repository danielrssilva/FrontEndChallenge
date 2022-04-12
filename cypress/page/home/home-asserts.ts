import HomeComponents from "./home-components";

class HomeAsserts {
  static assertNoCards = (): void => {
    HomeComponents.getCardName().should("not.exist");
    HomeComponents.getCardId().should("not.exist");
    HomeComponents.getCardImage().should("not.exist");
    HomeComponents.getCardType().should("not.exist");
  };

  static assertAllCardsHaveId = (): void => {
    HomeComponents.getCardId().each(($item) => {
      expect($item.text()).to.not.be.empty;
    });
  };
  static assertAllCardsHaveName = (): void => {
    HomeComponents.getCardName().each(($item) => {
      expect($item.text()).to.not.be.empty;
    });
  };
  static assertAllCardsHaveImage = (): void => {
    HomeComponents.getCardImage().each(($item) => {
      expect($item.attr("src")).to.not.be.empty;
    });
  };

  static assertAllCardsHaveType = (): void => {
    HomeComponents.getCardType().each(($item) => {
      expect($item.text()).to.not.be.empty;
    });
  };

  static assertSearchInputPlaceholder = (): void => {
    HomeComponents.getSearchInput()
      .invoke("attr", "placeholder")
      .should("contain", "Type to search Pokémon name");
  };

  static assertNoResultsText = (): void => {
    HomeComponents.getNoResults().should(
      "have.text",
      "Seems like you are out of cards"
    );
  };

  static assertCardsName = (cards: Array<string>): void => {
    HomeComponents.getCardName().each(($item, $index) => {
      cy.wrap($item.text()).should("contain", cards[$index]);
    });
  };
}

export default HomeAsserts;
