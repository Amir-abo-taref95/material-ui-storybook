import React from 'react';
import { BdBaseIcon, IBdBaseIconProps } from '../BdBaseIcon';
import {IconsPaths} from "../Icons.paths";

interface IBdAlertIconProps extends IBdBaseIconProps {
  variant?: 'contained';
}
export const BdAbortIcon = (props: IBdAlertIconProps) => {
  const { variant } = props;
  return (
    <BdBaseIcon {...props}>
      {variant === 'contained' ? (
        <img
          src={IconsPaths.BdFilledAbortIcon}
          alt='ClickedAbortIcon'
        />
      ) : (
        <img src={IconsPaths.BdAbortIcon} alt='AbortIcon' />
      )}
    </BdBaseIcon>
  );
};
