import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BdMenuChip } from './BdMenuChip';
import { string } from 'prop-types';

describe('<BdMenuChip />', () => {
  test('it should mount', () => {
    // render(<BdIconChip variant={variant} />);

    const bdMenuChip = screen.getByTestId('BdMenuChip');

    expect(bdMenuChip).toBeInTheDocument();
  });
});
