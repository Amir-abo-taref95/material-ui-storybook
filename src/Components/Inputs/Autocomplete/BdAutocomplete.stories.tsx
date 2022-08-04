/* eslint-disable */
import { BdAutocomplete } from './BdAutocomplete';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Inputs/Autocomplete',
  component: BdAutocomplete,
} as ComponentMeta<typeof BdAutocomplete>;

const Template: ComponentStory<typeof BdAutocomplete> = (args) => (
  <BdAutocomplete {...args} />
);

export const AutoComplete = Template.bind({});
AutoComplete.args = {
  // skills: [
  //   'html',
  //   'css',
  //   'javascript',
  //   'typescript',
  //   'react',
  //   'ahtml',
  //   'acss',
  //   'ajavascript',
  //   'atypescript',
  //   'areact',
  // ],
};
