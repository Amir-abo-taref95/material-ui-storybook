/* eslint-disable */
import { BdAutocomplete } from './BdAutocomplete';
import { InputAdornment, TextField } from '@mui/material';
import React from 'react';
import styles from '../../DataDisplay/Icons/Icons.stories.module.css';
import { BdArrowIcon } from '../../DataDisplay/Icons/BdArrowIcon';

export default {
  title: 'BdAutocomplete',
};

export const Default = () => (
  <BdAutocomplete
    multiple
    disablePortal
    id='combo-box-demo'
    options={['וועדה', 'הערות', 'לורם איפסום']}
  />
);

Default.story = {
  name: 'Autocomplete',
};
