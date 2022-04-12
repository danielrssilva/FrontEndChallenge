import HomeComponents from "./details-components";

class HomeAsserts {
  static assertCardName = (cardName: string): void => {
    HomeComponents.getCardName().should("contain", cardName);
  };

  static assertCardId = (cardId: string): void => {
    HomeComponents.getCardId().should("contain", cardId);
  };

  static assertCardType = (cardType: string): void => {
    HomeComponents.getCardType().should("contain", cardType);
  };

  static assertCardResistance = (cardResistance: string): void => {
    HomeComponents.getCardResistance().should("contain", cardResistance);
  };

  static assertCardWeakness = (cardWeakness: string): void => {
    HomeComponents.getCardWeakness().should("contain", cardWeakness);
  };

  static assertAbilityName = (abilityName: string): void => {
    HomeComponents.getAbilityName().should("contain", abilityName);
  };

  static assertAbilityType = (abilityType: string): void => {
    HomeComponents.getAbilityType().should("contain", abilityType);
  };

  static assertCardAttacks = (cardAttacks: string): void => {
    HomeComponents.getCardAttacks().should("contain", cardAttacks);
  };

  static assertCardAttackButton = (): void => {
    HomeComponents.getCardAttackButton().should("be.visible");
  };

  static assertCardRules = (cardRules: string): void => {
    HomeComponents.getCardRules().should("contain", cardRules);
  };

  static assertModalAttackName = (modalAttackName: string): void => {
    HomeComponents.getModalAttackName().should("contain", modalAttackName);
  };

  static assertModalAttackDmg = (modalAttackDmg: string): void => {
    HomeComponents.getModalAttackDmg().should("contain", modalAttackDmg);
  };

  static assertModalAttackText = (modalAttackText: string): void => {
    HomeComponents.getModalAttackText().should("contain", modalAttackText);
  };
}

export default HomeAsserts;
