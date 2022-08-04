import React from 'react';
import {BdBaseIcon, IBdBaseIconProps} from '../BdBaseIcon';
import {IconsPaths} from "../Icons.paths";

interface IBdWaitingIconProps extends IBdBaseIconProps {
    variant?: 'contained';
}

export const BdWaitingIcon = (props: IBdWaitingIconProps) => {
    const {variant} = props;
  return (
    <BdBaseIcon>
        {variant === 'contained' ? (
            <img
                src={IconsPaths.BdFilledWaitingIcon}
                alt='ClickedCompletedIcon'
            />
        ) : (
            <img src={IconsPaths.BdWaitingIcon} alt='InProgressIcon' />
        )}
    </BdBaseIcon>
  );
};
