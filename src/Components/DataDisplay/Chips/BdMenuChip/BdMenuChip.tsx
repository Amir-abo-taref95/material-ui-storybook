import React from 'react';
import styles from './BdChip.module.css';
import Chip, { ChipProps } from '@mui/material/Chip';
import { styled } from '@mui/material/styles';

interface IBdMenuChipProps extends ChipProps {
  Variant: 'completed' | 'rejected' | 'open' | 'inProcess';
}

const BdMenuChipImpl = styled(Chip)<IBdMenuChipProps>(({ Variant }) => ({
  ...(Variant === 'completed' && {
    color: '#FFFFFF',
    backgroundColor: '#FF9D4B',
    order: 2,
    '& .MuiButtonBase-root': {
      order: 1,
    },
  }),
  ...(Variant === 'rejected' && {
    color: '#FFFFFF',
    backgroundColor: '#7F7F7F',
  }),
  ...(Variant === 'open' && {
    color: '7F7F7F',
    backgroundColor: '#FAEFE4',
  }),
  ...(Variant === 'inProcess' && {
    color: '7F7F7F',
    background: 'linear-gradient(0deg , #ff9d4b66 , #ff9d4b66, #ffffff33)',
  }),
  fontFamily: 'Rubik, sans-serif',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '15px',
  lineHeight: '18px',
  textAlign: 'center',
  borderRadius: '16px',
  alignItems: 'center',
  padding: '5px',
  '& .MuiChip-label': {
    padding: '0px 5px 0px 5px',
    order: 1,
  },
  '& .MuiSvgIcon-root': {
    marginRight: '2px',
    transform: 'scale(0.8)',
    color: 'inherit',
    order: 3,
  },
}));

export const BdMenuChip = (props: IBdMenuChipProps) => {
  const { Variant, children, deleteIcon, icon, ...rest } = props;

  return (
    <BdMenuChipImpl
      deleteIcon={deleteIcon}
      {...props}
      {...rest}
    ></BdMenuChipImpl>
  );
};
