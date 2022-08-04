import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {BdSnackBar} from './BdSnackBar';

describe('<BdSnackBar />', () => {
  test('it should mount', () => {
    // render(<BdSnackBar />);

    const bdSnackBar = screen.getByTestId('BdSnackBar');

    expect(bdSnackBar).toBeInTheDocument();
  });
});
