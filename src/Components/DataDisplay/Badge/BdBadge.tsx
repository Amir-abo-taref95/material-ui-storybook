import React from 'react';
import { styled } from '@mui/material/styles';
import Badge, { BadgeProps } from '@mui/material/Badge';

interface IBdBadgeProps extends BadgeProps {
  Icon: any;
}

const BdBadgePropsImpl = styled(Badge)<IBdBadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#FF9D4B',
    transform: 'scale(0.4)',
    marginTop: '3px',
    marginRight: '8px',
  },
}));

export const BdBadge = (props: IBdBadgeProps) => {
  const { children, Icon } = props;

  return (
    <BdBadgePropsImpl {...props}>
      {Icon}
      {children}
    </BdBadgePropsImpl>
  );
};
