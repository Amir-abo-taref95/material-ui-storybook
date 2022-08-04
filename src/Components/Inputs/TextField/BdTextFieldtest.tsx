import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BdTextField } from './BdTextField';

describe('<BdTextField />', () => {
  test('it should mount', () => {
    // render(<BdTextField />);

    const bdTextField = screen.getByTestId('BdTextField');

    expect(bdTextField).toBeInTheDocument();
  });
});
