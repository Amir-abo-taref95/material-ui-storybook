/* eslint-disable */
import { BdSelect } from './BdSelect';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default {
  title: 'Inputs/Select',
  component: BdSelect,
} as ComponentMeta<typeof BdSelect>;

const Template: ComponentStory<typeof BdSelect> = (args) => (
  <BdSelect {...args} />
);

export const DecisionDetails = Template.bind({});
DecisionDetails.args = {
  children: 'פרטי החלטה',
  startIcon: <KeyboardArrowDownIcon />,
};
