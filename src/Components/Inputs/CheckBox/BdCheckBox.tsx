import React from 'react';
import Checkbox, { CheckboxProps } from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';
import styles from "./BdCheckBox.module.css"

interface IBdCheckboxProps extends CheckboxProps {
  [key: string]: any;
}

const BdCheckboxImpl = styled(Checkbox)<IBdCheckboxProps>(() => ({
  color: '#000000',
  '&:hover': {
    backgroundColor: 'rgba(255, 157, 75, 0.15)',
  },
  '&.Mui-checked': {
    color: '#FF9D4B',
    fill: '#000000',
  },
}));

export const BdCheckBox = (props: IBdCheckboxProps) => {
  const { children, label, ...rest } = props;
  return (
    <div className={styles.bdcheckbox}>
      <BdCheckboxImpl id='Checkbox' {...rest} />
      <label htmlFor='Checkbox'>{children}</label>
    </div>
  );
};
