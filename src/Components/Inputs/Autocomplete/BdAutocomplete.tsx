import * as React from 'react';
import styles from './BdAutocomplete.module.css';
import {
  Autocomplete,
  AutocompleteProps,
  InputAdornment,
  TextField,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { BdArrowIcon } from '../../DataDisplay/Icons/BdArrowIcon';

interface BdAutocompleteProps {
  [key: string]: any;
}

const BdAutocompleteImpl = styled(Autocomplete)<BdAutocompleteProps>(
  ({ open, theme }) => ({
    '&.MuiAutocomplete-root': {
      height: 36,
      fieldset: {
        border: '1px solid #7F7F7F !important',
      },
      '.MuiTextField-root': {
        '.MuiInputLabel-root': {
          color: '#7F7F7F',
          fontFamily: 'Rubik, sans-serif',
          fontWeight: 400,
          //fontSize: '1.1667rem',
          maxWidth: 'calc(85% - 24px)',
        },
      },
      '.MuiInputAdornment-root': {
        transform: open ? 'rotate(270deg)' : 'rotate(90deg)',
        transition: 'all 0.2s linear',
        cursor: 'pointer',
      },
    },
  })
);

export const BdAutocomplete = (props: BdAutocompleteProps) => {
  const { options, label, ...rest } = props;
  const [open, setOpen] = React.useState(false);

  const onAdornmentClicked = () => {
    setOpen(!open);
  };
  return (
    <BdAutocompleteImpl
      {...rest}
      size={'small'}
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      options={options}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <InputAdornment position='end' onClick={onAdornmentClicked}>
                <BdArrowIcon />
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
};
