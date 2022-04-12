import DetailsActions from "../page/details/details-actions";
import DetailsAsserts from "../page/details/details-asserts";

describe("Details page", () => {
  before(() => {
    cy.visit("/card/pl3-141");
  });

  it("validate if card details are correct", () => {
    DetailsActions.waitPageLoad();
    DetailsAsserts.assertCardName("Absol G LV.X");
    DetailsAsserts.assertCardId("pl3-141");
    DetailsAsserts.assertCardType("Darkness");
    DetailsAsserts.assertCardResistance("Psychic -20");
    DetailsAsserts.assertCardWeakness("Fighting ×2");
    DetailsAsserts.assertAbilityName("Darkness Send");
    DetailsAsserts.assertAbilityType("Poké-Power");
    DetailsAsserts.assertCardAttacks("Darkness Slugger");
    DetailsAsserts.assertCardRules(
      "Put this card onto your Active Absol G. Absol G LV.X can use any attack, Poké-Power, or Poké-Body from its previous level."
    );
    DetailsActions.clickOnAttackButton();
    DetailsAsserts.assertModalAttackName("Darkness Slugger");
    DetailsAsserts.assertModalAttackDmg("30+");
    DetailsAsserts.assertModalAttackText(
      "You may discard a card from your hand. If you do, this attack does 30 damage plus 30 more damage."
    );
  });
});
