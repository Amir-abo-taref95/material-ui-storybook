/* eslint-disable */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BdChip } from './BdChip';

export default {
  title: 'Data Display/Chips/Regular',
  component: BdChip,
} as ComponentMeta<typeof BdChip>;

const Template: ComponentStory<typeof BdChip> = (args) => <BdChip {...args} />;

export const Regular = Template.bind({});
Regular.args = {
  label: 'הצגת סננים נוספים',
  onDelete: undefined,
};
