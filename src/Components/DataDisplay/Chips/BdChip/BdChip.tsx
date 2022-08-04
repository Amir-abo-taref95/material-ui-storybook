import React from 'react';
import styles from './BdChip.module.css';
import Chip, { ChipProps } from '@mui/material/Chip';
import { styled } from '@mui/material/styles';

interface IBdChipProps extends ChipProps {
  Icon: any;
}

const BdChipImpl = styled(Chip)<IBdChipProps>(({ theme }) => ({
  variant: 'outlined',
  color: '#000000',
  border: '1px solid #FF9D4B',
  backgroundColor: '#FAEFE4',
  borderRadius: '18px',
}));

export const BdChip = (props: IBdChipProps) => {
  const { children, Icon, ...rest } = props;
  return <BdChipImpl {...rest} {...props} />;
};
