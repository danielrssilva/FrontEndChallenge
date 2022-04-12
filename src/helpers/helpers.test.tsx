import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import buildAttackButtons from "./buildAttackButtons";
import buildColoredTag from "./buildColoredTags";
import buildAbilityCards from "./buildAbilityCards";
import buildRuleCards from "./buildRuleCards";

const mockShowConfirm = jest.fn();
const propsMock = {
  id: "smp-SM108",
  name: "Ash's Pikachu",
  types: ["Lightning"],
  supertype: "Pokémon",
  rules: ["Test rule"],
  images: { small: "link", large: "link" },
  attacks: [
    {
      name: "I Choose You!",
      damage: "0",
      text: "Search your deck for a Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
      cost: ["Colorless"],
    },
  ],
  abilities: [
    {
      name: "Lightning Rod",
      text: "When you attach this Pokémon to a Lightning Pokémon, prevent all effects of attacks, including damage, done to this Pokémon during your opponent's next turn.",
      type: "Poké-Power",
    },
  ],
  weaknesses: [{ type: "Fighting", value: "x2" }],
  resistances: [{ type: "Metal ", value: "-20" }],
};

describe("buildAttackButtons", () => {
  it("should return based on attack list", () => {
    render(<>{buildAttackButtons(propsMock.attacks, mockShowConfirm)}</>);
    const element = screen.getByText(/I Choose You!/i);

    expect(element).toBeInTheDocument();
  });

  it("should test click function", () => {
    render(<>{buildAttackButtons(propsMock.attacks, mockShowConfirm)}</>);
    const element = screen.getByText(/I Choose You!/i);
    fireEvent.click(element);
    expect(mockShowConfirm).toHaveBeenCalled();
  });
});

describe("buildColoredTags", () => {
  it("should return based on types list", () => {
    render(<>{buildColoredTag(propsMock.types)}</>);
    const element = screen.getByText(/Lightning/i);
    expect(element).toBeInTheDocument();
  });

  it("should return based on weaknesses list", () => {
    render(<>{buildColoredTag(propsMock.weaknesses)}</>);
    const element = screen.getByText(/Fighting/i);
    expect(element).toBeInTheDocument();
  });

  it("should return based on undefined list", () => {
    const { container } = render(<>{buildColoredTag([])}</>);
    expect(container).toBeDefined();
  });
});

describe("buildAbilityCards", () => {
  it("should return based on abilities list", () => {
    render(<>{buildAbilityCards(propsMock.abilities)}</>);
    const element = screen.getByText(/Lightning Rod/i);
    expect(element).toBeInTheDocument();
  });
});

describe("buildRuleCards", () => {
  it("should return based on rules list", () => {
    render(<>{buildRuleCards(propsMock.rules)}</>);
    const element = screen.getByText(/Test rule/i);
    expect(element).toBeInTheDocument();
  });
});
