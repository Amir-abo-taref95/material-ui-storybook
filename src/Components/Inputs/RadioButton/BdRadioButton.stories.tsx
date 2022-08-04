/* eslint-disable */
import { BdRadioButton } from './BdRadioButton';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Inputs/Radio button',
  component: BdRadioButton,
} as ComponentMeta<typeof BdRadioButton>;

const Template: ComponentStory<typeof BdRadioButton> = (args) => (
  <BdRadioButton {...args} />
);

export const RadioButton = Template.bind({});
RadioButton.args = {
  children: 'RadioButton',
};
