import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BdButton } from "./BdButton";

describe("<BdButton />", () => {
  test("it should mount", () => {
    render(<BdButton />);

    const bdButton = screen.getByTestId("BdButton");

    expect(bdButton).toBeInTheDocument();
  });
});
