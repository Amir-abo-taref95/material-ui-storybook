import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BdCloseIcon } from './BdCloseIcon';

describe('<BdXIcon />', () => {
  test('it should mount', () => {
    render(<BdCloseIcon />);

    const bdXIcon = screen.getByTestId('BdXIcon');

    expect(bdXIcon).toBeInTheDocument();
  });
});
