import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import WarningOutlinedIcon from '@mui/icons-material/WarningOutlined';

interface IBdAlertProps extends AlertProps {
  defaulte: boolean;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

const BdAlertPropsImpl = styled(Alert)<IBdAlertProps>(({ severity }) => ({
  ...(severity === 'warning' && {
    color: 'FDE4E4',
    backgroundColor: '#F24646',
  }),
  ...(severity === 'success' && {
    color: '#444344',
    backgroundColor: '#38CB3E',
  }),
  ...(severity === 'info' && {
    color: '#FFFFFF',
    backgroundColor: '#000000',
  }),
  Variant: 'standard',
  fontFamily: 'Rubik, sans-serif',
  fontStyle: 'normal',
  fontSize: '16px',
  fontheight: '19px',
  fontWeight: 400,
  textAlign: 'right',
  padding: '8px 10px',
  gap: '8px',
  borderRadius: '4px',
  boxShadow: '-1px 4px 7px rgba(0, 0, 0, 0.212295)',
  cursor: 'pointer',
}));

export const BdSnackBar = (props: IBdAlertProps) => {
  const { children, defaulte, severity } = props;
  const [open, setOpen] = React.useState(true);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar open={defaulte} onClose={handleClose} autoHideDuration={6000}>
      <BdAlertPropsImpl
        severity={severity}
        onClose={handleClose}
        icon={<WarningOutlinedIcon />}
        {...props}
        sx={{
          width: '500px',
          '& .MuiAlert-action': {
            order: '3',
          },
          '& .MuiAlert-icon': {
            order: '1',
          },
          '& .MuiAlert-message': {
            order: '2',
          },
        }}
      >
        {children}
      </BdAlertPropsImpl>
    </Snackbar>
  );
};
