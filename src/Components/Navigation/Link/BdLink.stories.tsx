/* eslint-disable */
import { BdLink } from './BdLink';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Navigation/Link',
  component: BdLink,
} as ComponentMeta<typeof BdLink>;

const Template: ComponentStory<typeof BdLink> = (args) => <BdLink {...args} />;

export const ClearFilters = Template.bind({});
ClearFilters.args = {
  children: 'נקה סינונים',
  href: 'https://mui.com/material-ui/react-link/#main-content',
};
