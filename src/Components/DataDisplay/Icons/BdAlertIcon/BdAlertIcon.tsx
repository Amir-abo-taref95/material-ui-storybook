import React from 'react';
import { BdBaseIcon, IBdBaseIconProps } from '../BdBaseIcon';
import {IconsPaths} from "../Icons.paths";

interface IBdAlertIconProps extends IBdBaseIconProps {
  variant?: 'error';
}

export const BdAlertIcon = (props: IBdAlertIconProps) => {
  const { variant } = props;
  return (
    <BdBaseIcon>
      {variant === 'error' ? (
        <img src={IconsPaths.BdAlertErrorIcon} alt={'error alert icon'}/>
      ) : (
        <img src={IconsPaths.BdAlertIcon} alt={'alert icon'} />
      )}
    </BdBaseIcon>
  );
};
