import React from 'react';
import { styled } from '@mui/material/styles';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Button from '@mui/material/Button';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';

interface IBdAlertProps extends AlertProps {
  [key: string]: any;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

const BdAlertErrorPropsImpl = styled(Alert)<IBdAlertProps>(({}) => ({
  '& .MuiAlert-action': {
    order: '3',
  },
  '& .MuiAlert-icon': {
    order: '1',
  },
  '& .MuiAlert-message': {
    order: '2',
  },
  fontFamily: 'Rubik, sans-serif',
  fontStyle: 'normal',
  color: '#CF2323',
  backgroundColor: '#FDE4E4',
  fontSize: '16px',
  fontheight: '19px',
  fontWeight: 400,
  textAlign: 'right',
  padding: '8px 10px',
  gap: '8px',
  borderRadius: '4px',
  boxShadow: '-1px 4px 7px rgba(0, 0, 0, 0.212295)',
}));

export const BdAlertError = (props: IBdAlertProps) => {
  const { children } = props;

  return (
    <BdAlertErrorPropsImpl
      icon={<WarningAmberOutlinedIcon />}
      action={
        <Button
          sx={{ cursor: 'pointer', textDecoration: 'underline' }}
          color='inherit'
        >
          יציאה ללא שמירה
        </Button>
      }
      sx={{ width: '440px' }}
    >
      {children}
    </BdAlertErrorPropsImpl>
  );
};
