/* eslint-disable */
import { BdSelect } from './BdSelect';
import { BdButton } from '../BdButton';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Inputs/Select',
  component: BdSelect,
} as ComponentMeta<typeof BdSelect>;

const Template: ComponentStory<typeof BdSelect> = (args) => (
  <BdSelect {...args} />
);

export const Regular = Template.bind({});
Regular.args = {
  items: [{
    value: 10,
    text: 10
  },{
    value: 16,
    text: 16
  },{
    value: 20,
    text: 20
  },{
    value: 24,
    text: 24
  },{
    value: '*',
    text: "הכל"
  }]
};
