import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CardInformation from "./CardInformation";
import CardInformationProps from "./CardInformation.types";

const propsMock: CardInformationProps = {
  title: "Ash's Pikachu",
  children: <div>content</div>,
};

const renderCard = (props: CardInformationProps = propsMock) => {
  return render(<CardInformation {...props} />);
};

describe("<Card />", () => {
  it("should render the card name", () => {
    renderCard();
    const element = screen.getByText(/content/i);
    expect(element).toBeInTheDocument();
  });
});
