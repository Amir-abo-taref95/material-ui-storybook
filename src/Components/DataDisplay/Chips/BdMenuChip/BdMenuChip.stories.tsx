/* eslint-disable */
import { BdMenuChip } from './BdMenuChip';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BdCompletedIcon } from '../../Icons/BdCompletedIcon/BdCompletedIcon';
import { BdOnGoingIcon } from '../../Icons/BdOnGoingIcon/BdOnGoingIcon';
import { BdAbortIcon } from '../../Icons/BdAbortIcon/BdAbortIcon';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default {
  title: 'Data Display/Chips/With Menu',
  component: BdMenuChip,
} as ComponentMeta<typeof BdMenuChip>;

const Template: ComponentStory<typeof BdMenuChip> = (args) => (
  <BdMenuChip {...args} />
);

export const CompletedMenuChip = Template.bind({});
CompletedMenuChip.args = {
  label: ' הושלם ',
  Variant: 'completed',
  deleteIcon: <BdCompletedIcon variant='contained' />,
  icon: <KeyboardArrowDownIcon />,
};

export const RejectedMenuChip = Template.bind({});
RejectedMenuChip.args = {
  label: 'נדחה ',
  Variant: 'rejected',
  deleteIcon: <BdAbortIcon variant='contained' />,
  icon: <KeyboardArrowDownIcon />,
};

export const OpenMenuChip = Template.bind({});
OpenMenuChip.args = {
  label: 'פתוח ',
  Variant: 'open',
  deleteIcon: <BdOnGoingIcon />,
  icon: <KeyboardArrowDownIcon />,
};

export const InProcessMenuChip = Template.bind({});
InProcessMenuChip.args = {
  label: 'בתהליך ',
  Variant: 'inProcess',
  deleteIcon: <BdOnGoingIcon />,
  icon: <KeyboardArrowDownIcon />,
};
