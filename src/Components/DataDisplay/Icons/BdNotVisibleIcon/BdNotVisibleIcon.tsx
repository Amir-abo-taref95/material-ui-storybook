import React from 'react';
import { BdBaseIcon } from '../BdBaseIcon';
import {IconsPaths} from "../Icons.paths";

export const BdNotVisibleIcon = () => {
  return (
    <BdBaseIcon>
      <img src={IconsPaths.BdNotVisibleIcon} alt='NotVisibleIcon' />
    </BdBaseIcon>
  );
};
