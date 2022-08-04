import React from 'react';
import { styled } from '@mui/material/styles';
import Radio, { RadioProps } from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

interface IBdRadioProps extends RadioProps {
  [key: string]: any;
}

const BdRadioImpl = styled(Radio)<IBdRadioProps>(() => ({
  color: '#444344',
  '&:hover': {
    background: 'rgba(255, 157, 75, 0.15)',
  },
  '&.Mui-checked': {
    color: '#FF9D4B',
  },
}));

export const BdRadioButton = (props: IBdRadioProps) => {
  const { children, ...rest } = props;
  return (
    <div>
      <BdRadioImpl id='Checkbox' {...rest} />
      <label htmlFor='Checkbox'>{children}</label>
    </div>
  );
};
