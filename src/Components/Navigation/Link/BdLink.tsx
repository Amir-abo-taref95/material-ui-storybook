import * as React from 'react';
import Link, { LinkProps } from '@mui/material/Link';
import { styled } from '@mui/material/styles';

interface IBdLinkProps extends LinkProps {
  [key: string]: any;
}

const BdLinkPropsImpl = styled(Link)<IBdLinkProps>(({ theme }) => ({
  color: '#000000',
  textDecorationLine: 'underline',
  fontWeight: 400,
  fontFamily: 'Rubik, sans-serif',
  fontStyle: 'normal',
  fontSize: '14px',
  lineHeight: '17px',
  textAlign: 'right',
  borderRadius: '4px',
  cursor: 'pointer',
}));

export const BdLink = (props: IBdLinkProps) => {
  const { children, href, ...rest } = props;
  return (
    <BdLinkPropsImpl href={href} color='inherit' target='_blank' {...rest}>
      {children}
    </BdLinkPropsImpl>
  );
};
