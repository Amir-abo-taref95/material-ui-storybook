import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BdLink } from './BdLink';

describe('<BdLink />', () => {
  test('it should mount', () => {
    render(<BdLink />);

    const bdLink = screen.getByTestId('BdLink');

    expect(bdLink).toBeInTheDocument();
  });
});
