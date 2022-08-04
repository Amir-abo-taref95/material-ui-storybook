import React from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

// interface IBdTextFieldProps extends TextFieldProps {
//   [key: string]: any;
// }
export type IBdTextFieldProps = TextFieldProps & { Icon };

const BdTextFieldImpl = styled(TextField)<IBdTextFieldProps>(() => ({
  fontFamily: 'Rubik',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '17px',
  color: '#000000',
  borderColor: '#000000',
}));

export const BdTextField = (props: IBdTextFieldProps) => {
  const { children, Icon, ...rest } = props;
  return (
    <div>
      <BdTextFieldImpl
        id='Search'
        label={children}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton>{Icon}</IconButton>
            </InputAdornment>
          ),
        }}
        variant='standard'
        {...rest}
        {...props}
      />
    </div>
  );
};
