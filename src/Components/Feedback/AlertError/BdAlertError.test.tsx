import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BdAlertError } from "./BdAlertError";

describe("<BdAlertError />", () => {
  test("it should mount", () => {
    render(<BdAlertError />);

    const bdAlertError = screen.getByTestId("bdAlertError");

    expect(bdAlertError).toBeInTheDocument();
  });
});
