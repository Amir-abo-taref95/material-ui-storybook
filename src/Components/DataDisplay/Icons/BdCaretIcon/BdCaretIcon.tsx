import React from 'react';
import { BdBaseIcon, IBdBaseIconProps } from '../BdBaseIcon';
import {IconsPaths} from "../Icons.paths";

export const BdCaretIcon = (props: IBdBaseIconProps) => {
  return (
    <BdBaseIcon {...props}>
      <img src={IconsPaths.BdCaretIcon} alt='CaretIcon' />
    </BdBaseIcon>
  );
};
