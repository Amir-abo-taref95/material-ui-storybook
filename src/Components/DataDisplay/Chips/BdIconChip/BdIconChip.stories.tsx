/* eslint-disable */
import { BdIconChip } from './BdIconChip';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BdCompletedIcon } from '../../Icons/BdCompletedIcon/BdCompletedIcon';
import { BdOnGoingIcon } from '../../Icons/BdOnGoingIcon/BdOnGoingIcon';
import { BdAbortIcon } from '../../Icons/BdAbortIcon/BdAbortIcon';
import { BdCloseIcon } from '../../Icons/BdCloseIcon/BdCloseIcon';

export default {
  title: 'Data Display/Chips/With Icon',
  component: BdIconChip,
} as ComponentMeta<typeof BdIconChip>;

const Template: ComponentStory<typeof BdIconChip> = (args) => (
  <BdIconChip {...args} />
);

export const WithDeleteIcon = Template.bind({});
WithDeleteIcon.args = {
  label: 'איציק מנדלבאום',
  Variant: 'deleted',
  deleteIcon: <BdCloseIcon />,
};

export const CompletedIconChip = Template.bind({});
CompletedIconChip.args = {
  label: ' הושלם ',
  Variant: 'completed',
  deleteIcon: <BdCompletedIcon variant='contained' />,
};

export const RejectedIconChip = Template.bind({});
RejectedIconChip.args = {
  label: 'נדחה ',
  Variant: 'rejected',
  deleteIcon: <BdAbortIcon variant='contained' />,
};

export const OpenIconChip = Template.bind({});
OpenIconChip.args = {
  label: 'פתוח ',
  Variant: 'open',
  deleteIcon: <BdOnGoingIcon />,
};

export const InProcessIconChip = Template.bind({});
InProcessIconChip.args = {
  label: 'בתהליך ',
  Variant: 'inProcess',
  deleteIcon: <BdOnGoingIcon />,
};
