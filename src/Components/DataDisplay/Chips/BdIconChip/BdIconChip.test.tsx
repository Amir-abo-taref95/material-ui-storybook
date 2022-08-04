import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BdIconChip } from './BdIconChip';
import { string } from 'prop-types';

describe('<BdIconChip />', () => {
  test('it should mount', () => {
    // render(<BdIconChip variant={variant} />);

    const bdIconChip = screen.getByTestId('BdIconChip');

    expect(bdIconChip).toBeInTheDocument();
  });
});
