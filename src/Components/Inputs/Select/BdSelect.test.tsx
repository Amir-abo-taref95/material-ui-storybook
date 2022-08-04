import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BdSelect } from './BdSelect';

describe('<BdSelect />', () => {
  test('it should mount', () => {
    render(<BdSelect />);

    const bdSelect = screen.getByTestId('BdSelect');

    expect(bdSelect).toBeInTheDocument();
  });
});
