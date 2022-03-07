import { action } from "@storybook/addon-actions";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Header from ".";
import { SEP_CI } from "../assets";

export default {
  title: "layouts/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});

Default.args = {
  logo: <span>Smart Energy Platform</span>,
  pages: [
    {
      key: "Dashboard",
      name: "Dashboard",
      onClick: action("click Dashboard"),
    },
  ],
};
