import { Button } from "../src/components/Button/Button";

export default {
  title: "Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const GlassButton = Template.bind({});
GlassButton.args = {
  backgroundColor: "yellow",
};
