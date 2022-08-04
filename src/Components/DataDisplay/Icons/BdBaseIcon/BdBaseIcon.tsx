import * as React from 'react';
import styles from './BdBaseIcon.module.css';
import { Icon, IconProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export interface IBdBaseIconProps extends IconProps {}

const BdBaseIconImpl = styled(Icon)<IBdBaseIconProps>(({ theme }) => ({
  width: '26px',
  height: '26px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2px',
}));

export const BdBaseIcon = (props: IBdBaseIconProps) => {
  const { children } = props;

  return <BdBaseIconImpl {...props}>{children}</BdBaseIconImpl>;
};
