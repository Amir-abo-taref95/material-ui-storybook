import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BdDotIcon } from "./BdDotIcon";

describe("<BdDotIcon />", () => {
  test("it should mount", () => {
    render(<BdDotIcon />);

    const bdDotIcon = screen.getByTestId("BdDotIcon");

    expect(bdDotIcon).toBeInTheDocument();
  });
});
