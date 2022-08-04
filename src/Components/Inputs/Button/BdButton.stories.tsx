/* eslint-disable */
import { BdButton } from './BdButton';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';


export default {
  title: 'Inputs/Button',
  component: BdButton,
} as ComponentMeta<typeof BdButton>;

const Template: ComponentStory<typeof BdButton> = (args) => (
  <BdButton {...args} />
);

export const SmallAndFilled = Template.bind({});
SmallAndFilled.args = {
  variant: 'contained',
  size: 'small',
  color: 'primary',
  children: 'שבץ',
};

export const SmallAndOutlined = Template.bind({});
SmallAndOutlined.args = {
  variant: 'outlined',
  size: 'small',
  color: 'primary',
  children: 'בטל',
};

export const LargeAndFilled = Template.bind({});
LargeAndFilled.args = {
  variant: 'contained',
  size: 'large',
  color: 'primary',
  children: 'הצג תוצאות',
};

export const LargeAndOutlined = Template.bind({});
LargeAndOutlined.args = {
  variant: 'outlined',
  size: 'large',
  color: 'primary',
  children: 'השלך שינויים',
};

export const MediumAndOutlined = Template.bind({});
MediumAndOutlined.args = {
  variant: 'outlined',
  size: 'small',
  color: 'primary',
  children: 'יצירת נושא לישיבה עתידית מההחלטה',
};

export const DisableScrollOption = Template.bind({});
DisableScrollOption.args = {
  variant: 'text',
  size: 'small',
  color: 'primary',
  children: 'בטל אפשרות גלילה',
  startIcon: <HighlightOffRoundedIcon />,
};
