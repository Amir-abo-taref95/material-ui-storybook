import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import MenuItem, { MenuItemProps } from '@mui/material/MenuItem';
import styles from './BdBox.module.css';

interface IMenuItemProps extends MenuItemProps {
  [key: string]: any;
}

const BdMenuItemPropsImpl = styled(MenuItem)<IMenuItemProps>(({ theme }) => ({
  '& .MuiMenuItem-root:hover': {
    backgroundColor: 'red',
  },
  width: '100%',
  color: '#000000',
  backgroundColor: '#FFFFFF',
  fontWeight: 400,
  fontFamily: 'Rubik, sans-serif',
  fontStyle: 'normal',
  fontSize: '14px',
  lineHeight: '17px',
  textAlign: 'right',
  gap: '10px',
}));

export const BdBox = (props: IMenuItemProps) => {
  const { BoxText, ...rest } = props;

  return (
    <Box
      sx={{
        width: '212px',
        p: 0,
        border: '1px solid black',
        borderRadius: '4px',
      }}
    >
      <div className={styles.boxcontainer}>
        {BoxText.map((item, index) => {
          return (
            <BdMenuItemPropsImpl key={index} value={item} {...props} {...rest}>
              {item}
            </BdMenuItemPropsImpl>
          );
        })}
      </div>
    </Box>
  );
};
