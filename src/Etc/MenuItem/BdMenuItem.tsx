import { MenuItem, MenuItemProps } from '@mui/material';
import * as React from 'react';
import styles from './BdMenuItem.module.css';
import { styled } from '@mui/material/styles';


interface BdMenuItemProps extends MenuItemProps {

}

const BdMenuItemImpl = styled(MenuItem)<BdMenuItemProps>(({ theme }) => ({
  backgroundColor: 'white !important',
  '&:hover': {
    backgroundColor: '#FAEFE4 !important',
  },
}));

export const BdMenuItem = (props: BdMenuItemProps) => {
  const { children, ...rest } = props;
  return <BdMenuItemImpl {...rest}>{children}</BdMenuItemImpl>
};
