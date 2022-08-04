/* eslint-disable */
import { BdCheckBox } from './BdCheckBox';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Inputs/Check box',
  component: BdCheckBox,
} as ComponentMeta<typeof BdCheckBox>;

const Template: ComponentStory<typeof BdCheckBox> = (args) => (
  <BdCheckBox {...args} />
);

export const CheckBox = Template.bind({});
CheckBox.args = {
  children: 'Checkbox',
};
