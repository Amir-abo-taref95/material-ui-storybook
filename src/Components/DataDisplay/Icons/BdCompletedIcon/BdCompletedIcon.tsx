import React from 'react';
import { BdBaseIcon, IBdBaseIconProps } from '../BdBaseIcon';
import {IconsPaths} from "../Icons.paths";

interface IBdCompletedIconProps extends IBdBaseIconProps {
  variant?: 'contained';
}

export const BdCompletedIcon = (props: IBdCompletedIconProps) => {
  const { variant } = props;
  return (
    <BdBaseIcon>
      {variant === 'contained' ? (
        <img
          src={IconsPaths.BdFilledCompletedIcon}
          alt='ClickedCompletedIcon'
        />
      ) : (
        <img src={IconsPaths.BdCompletedIcon} alt='CompletedIcon' />
      )}
    </BdBaseIcon>
  );
};
