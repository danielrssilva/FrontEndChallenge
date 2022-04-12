import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { screen } from "@testing-library/react";
import { render, fireEvent } from "@testing-library/react";
import SearchInput from "./SearchInput";
import { FilterProps } from "./SearchInput.types";

const renderSearchInput = (value?: string, props?: FilterProps) => {
  return render(<SearchInput value={value} {...props} />);
};

describe("<SearchInput />", () => {
  it("should render input", () => {
    renderSearchInput();
    const content = screen.getByTestId("search-input");
    expect(content).toBeInTheDocument();
  });

  it("should be empty input value", () => {
    renderSearchInput();
    const content = screen.getByTestId("search-input");
    expect(content.getAttribute("value")).toBe("");
  });

  it("render input value", () => {
    renderSearchInput("Test Value");
    const content = screen.getByTestId("search-input");
    expect(content.getAttribute("value")).toBe("Test Value");
  });

  it("change input value", () => {
    renderSearchInput();
    const content = screen.getByTestId("search-input");
    fireEvent.change(content, { target: { value: "23" } });
    expect(content.getAttribute("value")).toBe("23");
  });

  it("clear input value", () => {
    renderSearchInput();
    const content = screen.getByTestId("search-input");
    const clearBtn = screen.getByTestId("clear-button");
    fireEvent.change(content, { target: { value: "23" } });
    expect(content.getAttribute("value")).toBe("23");
    fireEvent.click(clearBtn);
    expect(content.getAttribute("value")).toBe("");
  });
});
