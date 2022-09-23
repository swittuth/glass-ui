import { Button } from "../src/components/Button/Button";

export default {
  title: "Component/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Large = Template.bind({});
Large.args = {
  backgroundColor: "yellow",
  size: "md",
  label: "Glass Button",
};

export const Medium = Template.bind({});
Medium.args = {
  backgroundColor: "yellow",
  size: "md",
  label: "Glass Button",
};

export const Small = Template.bind({});
Small.args = {
  backgroundColor: "yellow",
  size: "md",
  label: "Glass Button",
};
