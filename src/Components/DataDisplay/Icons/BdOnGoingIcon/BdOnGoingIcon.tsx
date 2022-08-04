import React from 'react';
import { BdBaseIcon, IBdBaseIconProps } from '../BdBaseIcon';
import {IconsPaths} from "../Icons.paths";

interface IBdOnGoingIconProps extends IBdBaseIconProps {
  variant?: 'contained';
}

export const BdOnGoingIcon = (props: IBdOnGoingIconProps) => {
  const { variant } = props;
  return (
    <BdBaseIcon>
      {variant === 'contained' ? (
        <img
          src={IconsPaths.BdFilledOnGoingIcon}
          alt='filled on going icon'
        />
      ) : (
        <img src={IconsPaths.BdOnGoingIcon} alt='on going icon' />
      )}
    </BdBaseIcon>
  );
};
