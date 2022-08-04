/* eslint-disable */
import { BdSnackBar } from "./BdSnackBar";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Feedback/SnackBar",
  component: BdSnackBar,
} as ComponentMeta<typeof BdSnackBar>;

const Template: ComponentStory<typeof BdSnackBar> = (args) => (
  <BdSnackBar {...args} />
);

export const WarningSnackBar = Template.bind({});
WarningSnackBar.args = {
  severity: "warning",
  children: "שלילי",
  defaulte:true
};

export const SuccessSnackBar = Template.bind({});
SuccessSnackBar.args = {
  severity: "success",
  children: "חיובי",
  defaulte:true
};

export const InfoSnackBar = Template.bind({});
InfoSnackBar.args = {
  severity: "info",
  children: "השינויים נשמרו",
  defaulte:true
};
