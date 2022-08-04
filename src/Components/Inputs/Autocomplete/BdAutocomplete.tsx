/* eslint-disable no-dupe-keys */
import React, { useState } from 'react';
import styles from './BdAutocomplete.module.css';
import { styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { BdArrowIcon } from '../../DataDisplay/Icons/BdArrowIcon/BdArrowIcon';
import { BdCheckBox } from '../CheckBox/BdCheckBox';
const checkedIcon = <CheckBoxIcon />;

type IBdTextFieldProps = TextFieldProps & { skills: string };

const skills = [
  'html',
  'css',
  'javascript',
  'typescript',
  'react',
  'ahtml',
  'acss',
  'ajavascript',
  'atypescript',
  'areact',
];

const TextFieldPropsImpl = styled(TextField)<IBdTextFieldProps>(
  ({ theme }) => ({
    '& .Mui-focused': {
      fontFamily: 'Rubik, sans-serif',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '17px',
      color: '#000000',
    },
    '& label.Mui-focused': {
      fontFamily: 'Rubik, sans-serif',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '17px',
      color: '#7F7F7F',
    },
    '&  .MuiButtonBase-root': {
      color: '#000000',
      background: '#FFFFFF',
    },
    '& .MuiButtonBase-root': {
      visibility: 'visible',
    },
  })
);

export const BdAutocomplete = (props: IBdTextFieldProps) => {
  return (
    <Autocomplete
      popupIcon={<BdArrowIcon className={styles.rotate90} />}
      multiple
      autoComplete
      fullWidth
      clearIcon={true}
      clearOnEscape
      disableCloseOnSelect={true}
      disableClearable={true}
      disableListWrap
      noOptionsText
      disabledItemsFocusable
      disablePortal={true}
      limitTags={2}
      options={skills}
      getOptionLabel={(option) => option}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <BdCheckBox
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option}
        </li>
      )}
      style={{ width: 500 }}
      renderInput={(params) => (
        <TextFieldPropsImpl
          focused={false}
          variant='outlined'
          {...params}
          {...props}
          label='וועדה'
        />
      )}
    />
  );
};

{
  /* <TextFieldPropsImpl
error
id="outlined-error-helper-text"
label="Error"
defaultValue="Hello World"
helperText="Incorrect entry."
color="error"
/> */
}

// value={this.target.text}
// onChange={(event) => this.setState({ text: event.target.value })}
// error={text === ''}
// helperText={text === "" ? 'Empty field!' : ' '}
