import React from "react";
import { storiesOf } from "@storybook/react";

import { Button } from "../src/components/Button";

const stories = storiesOf("Button Test", module);

stories.add("Button", () => {
  return <Button />;
});
