import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BdAutocomplete } from './BdAutocomplete';
import { Autocomplete, TextField } from '@mui/material';

describe('<BdAutocomplete />', () => {
  test('it should mount', () => {
    render(
      <Autocomplete
        multiple
        disablePortal
        id='combo-box-demo'
        options={['1', '2', '3']}
        renderInput={(params) => <TextField {...params} label='Movie' />}
      />
    );

    const bdIconChip = screen.getByTestId('BdAutocomplete');

    expect(bdIconChip).toBeInTheDocument();
  });
});
