import React from 'react';
import Tooltip, { TooltipProps } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

interface IBdTooltipProps extends TooltipProps {
  [key: string]: any;
}

const BdTooltipImpl = styled(Tooltip)<IBdTooltipProps>(() => ({
  fontFamily: 'Rubik, sans-serif',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '12px',
  lineHeight: '16px',
  alignItems: 'center',
  color: '#444344',
  padding: '5px',
  gap: '8px',
  background: '#F5F5F5',
  border: '1px solid #444344',
  boxShadow: '0px 2px 4px rgba(0,0,0,0.212295)',
  borderRadius: '4px',
  display: 'inline',
}));

export const BdTooltip = (props: IBdTooltipProps) => {
  const { Children, label, title, placement, ...rest } = props;
  return (
    <BdTooltipImpl title={title} placement={placement} {...rest}>
      <div>{Children}</div>
    </BdTooltipImpl>
  );
};
