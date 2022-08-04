/* eslint-disable */
import { BdTextField } from './BdTextField';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BdSearchIcon } from '../../DataDisplay/Icons/BdSearchIcon/BdSearchIcon';

export default {
  title: 'Inputs/TextField',
  component: BdTextField,
} as ComponentMeta<typeof BdTextField>;

const Template: ComponentStory<typeof BdTextField> = (args) => (
  <BdTextField {...args} />
);

export const Search = Template.bind({});
Search.args = {
  label: 'חיפוש חופשי',
  Icon: <BdSearchIcon />,
};
