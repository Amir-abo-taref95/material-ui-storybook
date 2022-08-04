import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BdRadioButton } from "./BdRadioButton";

describe("<BdRadioButton />", () => {
  test("it should mount", () => {
    render(<BdRadioButton />);

    const bdRadioButton = screen.getByTestId("BdRadioButton");

    expect(bdRadioButton).toBeInTheDocument();
  });
});
