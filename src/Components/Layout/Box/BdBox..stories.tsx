/* eslint-disable */
import { BdBox } from './BdBox.';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Layout/Box',
  component: BdBox,
} as ComponentMeta<typeof BdBox>;

const Template: ComponentStory<typeof BdBox> = (args) => <BdBox {...args} />;

export const bdBox = Template.bind({});
bdBox.args = {
  BoxText: ['כספים', 'שנתית', 'כלשהי', 'מיוחדת'],
};
