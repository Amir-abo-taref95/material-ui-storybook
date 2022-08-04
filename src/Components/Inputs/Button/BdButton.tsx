import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';

interface IBdButtonProps extends ButtonProps {
  [key: string]: any;
}

const BdButtonImpl = styled(Button)<IBdButtonProps>(
  ({ size, variant, theme }) => ({
    ...(size === 'small' && {
      fontSize: '14px',
      lineHeight: '17px',
      padding: '3px 8px',
      gap: '8px',
      fontWeight: 400,
    }),
    ...(size === 'large' && {
      fontSize: '20px',
      lineHeight: '24px',
      padding: '11px 29px',
      gap: '10px',
      fontWeight: 500,
    }),
    ...(variant === 'text' && {
      color: '#FF9D4B',
      textDecorationLine: 'none',
      border: 'none',
    }),
    ...(variant === 'contained' && {
      color: '#ffffff',
      backgroundColor: '#444344',
      border: 'none',
    }),
    ...(variant === 'outlined' && {
      color: '#444344',
      backgroundColor: '#ffffff',
      border: '1px solid #444344',
    }),
    ...(variant === 'outlined' &&
      size === 'large' && {
        fontWeight: 400,
      }),

    fontFamily: 'Rubik, sans-serif',
    fontStyle: 'normal',
    borderRadius: '4px',
    cursor: 'pointer',
    ':hover': {
      color: variant === 'contained' ? '#ffffff' : '#444344',
      backgroundColor: variant === 'contained' ? '#444344' : '#ffffff',
      border: variant === 'contained' ? 'none' : '1px solid #444344',
    },
  })
);

export const BdButton = (props: IBdButtonProps) => {
  const { children, ...rest } = props;
  return (
    <BdButtonImpl {...props} {...rest}>
      {children}
    </BdButtonImpl>
  );
};
