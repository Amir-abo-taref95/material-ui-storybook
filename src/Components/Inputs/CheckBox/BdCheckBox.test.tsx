import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BdCheckBox } from "./BdCheckBox";

describe("<BdCheckBox />", () => {
  test("it should mount", () => {
    // render(<BdCheckBox />);

    const bdCheckBox = screen.getByTestId("BdCheckBox");

    expect(bdCheckBox).toBeInTheDocument();
  });
});
