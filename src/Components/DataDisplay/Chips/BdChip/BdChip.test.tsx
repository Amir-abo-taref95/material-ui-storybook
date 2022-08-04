import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BdChip } from './BdChip';

describe('<BdChip />', () => {
  test('it should mount', () => {
    // render(<BdChip />);

    const bdChip = screen.getByTestId('BdChip');

    expect(bdChip).toBeInTheDocument();
  });
});
