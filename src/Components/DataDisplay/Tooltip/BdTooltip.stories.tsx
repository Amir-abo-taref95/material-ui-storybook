/* eslint-disable */
import { BdTooltip } from './BdTooltip';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Data Display/Tooltip',
  component: BdTooltip,
} as ComponentMeta<typeof BdTooltip>;

const Template: ComponentStory<typeof BdTooltip> = (args) => (
  <BdTooltip {...args} />
);

export const Bdtooltip = Template.bind({});
Bdtooltip.args = {
  title: 'Tooltip',
  Children: 'קרנות השקעה חשובותת,אשראי לא זחיר,פרוטוקול,נדל"ן',
};
