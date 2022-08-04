/* eslint-disable */
import { BdAlertError } from "./BdAlertError";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Feedback/AlertError",
  component: BdAlertError,
} as ComponentMeta<typeof BdAlertError>;

const Template: ComponentStory<typeof BdAlertError> = (args) => (
  <BdAlertError {...args} />
);

export const ErrorAlert = Template.bind({});
ErrorAlert.args = {
  children: "? אתה לא מרוצה מהשינויים ",
};
