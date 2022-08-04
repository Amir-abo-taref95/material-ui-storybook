import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BdPlusIcon } from "./BdPlusIcon";

describe("<BdPlusIcon />", () => {
  test("it should mount", () => {
    render(<BdPlusIcon />);

    const bdPlusIcon = screen.getByTestId("BdPlusIcon");

    expect(bdPlusIcon).toBeInTheDocument();
  });
});
