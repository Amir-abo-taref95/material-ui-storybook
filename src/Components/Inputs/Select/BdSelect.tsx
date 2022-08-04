import * as React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';

interface BdTextButtonProps extends ButtonProps {
  [key: string]: any;
}

const BdTextButtonImpl = styled(Button)<BdTextButtonProps>(({ className }) => ({
  color: '#000000',
  fontWeight: 500,
  textDecorationLine: 'none',
  variant: 'text',
  fontFamily: 'Rubik, sans-serif',
  fontStyle: 'normal',
  fontSize: '14px',
  lineHeight: '17px',
  textAlign: 'right',
  borderRadius: '4px',
  gap: '10px',
  cursor: 'pointer',
}));

export const BdSelect = (props: BdTextButtonProps) => {
  const { children, ...rest } = props;
  return <BdTextButtonImpl {...rest}>{children}</BdTextButtonImpl>;
};
