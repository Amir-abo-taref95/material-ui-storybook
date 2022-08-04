import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BdBadge } from './BdBadge';

describe('<BdBadge />', () => {
  test('it should mount', () => {
    // render(<BdBadge />);

    const bdBadge = screen.getByTestId('BdBadge');

    expect(bdBadge).toBeInTheDocument();
  });
});
