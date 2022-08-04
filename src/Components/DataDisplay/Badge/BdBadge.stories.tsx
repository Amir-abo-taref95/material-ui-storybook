/* eslint-disable */
import React from 'react';
import { BdBadge } from './BdBadge';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BdFilterIcon } from '../Icons/BdFilterIcon';

export default {
  title: 'Data Display/Badge',
  component: BdBadge,
} as ComponentMeta<typeof BdBadge>;

const Template: ComponentStory<typeof BdBadge> = (args) => (
  <BdBadge {...args}></BdBadge>
);

export const withoutBadgeContent = Template.bind({});
withoutBadgeContent.args = {
  Icon: <BdFilterIcon />,
};

export const withBadgeContent = Template.bind({});
withBadgeContent.args = {
  Icon: <BdFilterIcon />,
  badgeContent: '',
};
