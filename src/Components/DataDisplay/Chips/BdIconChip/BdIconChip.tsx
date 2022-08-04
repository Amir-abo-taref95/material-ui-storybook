import React from 'react';
import styles from './BdChip.module.css';
import Chip, { ChipProps } from '@mui/material/Chip';
import { styled } from '@mui/material/styles';

interface IBdIconChipProps extends ChipProps {
  Variant: 'completed' | 'rejected' | 'open' | 'inProcess' | 'deleted';
}

const BdIconChipImpl = styled(Chip)<IBdIconChipProps>(({ Variant }) => ({
  ...(Variant === 'deleted' && {
    color: '#000000',
    border: '1px solid #FF9D4B',
    backgroundColor: '#FAEFE4',
    borderRadius: '18px',
    '& .material-icons': {
      transform: 'scale(0.6)',
      color: '#424242',
      order: 2,
    },
  }),
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
}));

export const BdIconChip = (props: IBdIconChipProps) => {
  const { Variant, children, onDelete, deleteIcon, ...rest } = props;
  return (
    <BdIconChipImpl
      deleteIcon={deleteIcon}
      onDelete={onDelete}
      {...props}
      {...rest}
    />
  );
};
