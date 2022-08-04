import React from 'react';
import { BdBaseIcon, IBdBaseIconProps } from '../BdBaseIcon';

interface IBdAlerIconProps extends IBdBaseIconProps {
  variant?: 'InProgress';
}

export const BdInProgressIcon = (props: IBdAlerIconProps) => {
  const { variant } = props;
  return (
    <BdBaseIcon>
      {variant === 'InProgress' ? (
        <img
          src='/Assets/Icons/BdClickedInProgressIcon.svg'
          alt='ClickedCompletedIcon'
        />
      ) : (
        <img src='/Assets/Icons/BdInProgressIcon.svg' alt='InProgressIcon' />
      )}
    </BdBaseIcon>
  );
};
