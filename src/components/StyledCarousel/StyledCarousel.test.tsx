import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import StyledCarousel from "./StyledCarousel";
import { StyledCarouselProps } from "./StyledCarousel.types";
import { CardContextProvider } from "../../context/RecentlyViewedCards/CardContext";

const propsMock: StyledCarouselProps = {
  cards: [
    {
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
    },
  ],
};

jest.mock("react-router-dom", () => ({ Link: "Link" }));

const renderCard = (props: StyledCarouselProps = propsMock) => {
  return render(
    <CardContextProvider>
      <StyledCarousel {...props} />
    </CardContextProvider>
  );
};

describe("<Card />", () => {
  it("should render the card name", () => {
    renderCard();

    const name = screen.getByText(/Ash's Pikachu/i);
    const type = screen.getByText(/Lightning/i);
    const id = screen.getByText(/smp-SM108/i);

    expect(name).toBeInTheDocument();
    expect(type).toBeInTheDocument();
    expect(id).toBeInTheDocument();
  });

  it("should check card click", () => {
    renderCard();
    const element = screen.getByTestId("card-link");

    fireEvent.click(element);
    expect(element).toBeInTheDocument();
  });
});
