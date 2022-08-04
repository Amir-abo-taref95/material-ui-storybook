import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BdBox } from './BdBox.';

describe('<BdBox. />', () => {
  test('it should mount', () => {
    render(<BdBox />);

    const bdBox = screen.getByTestId('BdBox.');

    expect(bdBox).toBeInTheDocument();
  });
});
