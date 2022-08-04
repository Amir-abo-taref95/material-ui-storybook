import React from 'react';
import { BdBaseIcon, IBdBaseIconProps } from '../BdBaseIcon';
import {IconsPaths} from "../Icons.paths";

export const BdArrowIcon = (props: IBdBaseIconProps) => {
  return (
    <BdBaseIcon {...props}>
      <img src={IconsPaths.BdArrowIcon} alt='arrow icon' />
    </BdBaseIcon>
  );
};
