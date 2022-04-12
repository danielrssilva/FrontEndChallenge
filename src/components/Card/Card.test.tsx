import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card, { SkeletonCard } from "./Card";
import CardProps from "./Card.types";
import { CardContextProvider } from "../../context/RecentlyViewedCards/CardContext";

const propsMock: CardProps = {
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

jest.mock("react-router-dom", () => ({ Link: "Link" }));

const renderCard = (props: CardProps = propsMock) => {
  return render(
    <CardContextProvider>
      <Card {...props} />
    </CardContextProvider>
  );
};

describe("<Card />", () => {
  it("should render the card name", () => {
    renderCard();

    const element = screen.getByText(/Ash's Pikachu/i);

    expect(element).toBeInTheDocument();
  });

  it("should check card click", () => {
    renderCard();
    const element = screen.getByTestId("card-link");
    fireEvent.click(element);
    expect(element).toBeInTheDocument();
  });

  it("should render without types", () => {
    renderCard({ ...propsMock, types: undefined });
    const element = screen.getByTestId("card-link");
    fireEvent.click(element);
    expect(element).toBeInTheDocument();
  });

  it("should test visibility", () => {
    renderCard();
    const element = screen.getByText(/Ash's Pikachu/i);
    expect(element).toBeInTheDocument();
  });

  it("should render card skeleton", () => {
    render(<SkeletonCard />);
    const element = screen.getByText(/Pokémon/i);
    expect(element).toBeInTheDocument();
  });
});
