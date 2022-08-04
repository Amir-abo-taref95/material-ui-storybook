import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {BdTooltip} from './BdTooltip';

describe('<BdTooltip />', () => {
  test('it should mount', () => {
    // render(<BdTooltip />);

    const bdTooltip = screen.getByTestId('BdTooltip');

    expect(bdTooltip).toBeInTheDocument();
  });
});
