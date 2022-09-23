import { Button } from "../src/components/Button/Button";

export default {
  title: "Component/Button",
  component: Button,
  argTypes: {
    onClick: "",
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Hello",
};

export const Large = Template.bind({});
Large.args = {
  backgroundColor: "rgba(255, 255, 255, 0.5)",
  backdropFilter: "blur(20px)",
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
