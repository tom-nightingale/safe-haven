import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Button from "./Button";
import { BsTelephone } from "react-icons/bs";
import { FaCaretRight } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { fn } from "storybook/test";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
    nextjs: {
      appDirectory: true,
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    label: { control: "text" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Our Rooms",
    classes: "button-primary button-peach",
  },
};

export const WithIconLeft: Story = {
  args: {
    label: "Get In Touch",
    iconLeft: <BsTelephone />,
    classes: "button-primary button-peach",
  },
};

export const Shadow: Story = {
  args: {
    label: "View Location",
    classes: "button-shadow shadow-peach",
    iconRight: <FaCaretRight />,
  },
};

export const Outlined: Story = {
  args: {
    label: "View Map",
    classes: "button-primary button-outline button-outline-blue",
  },
};

export const OutlinedNaked: Story = {
  args: {
    label: "View Map",
    classes:
      "button-primary button-outline button-outline-naked button-outline-blue",
  },
};

export const IconOnly: Story = {
  args: {
    label: "View Map",
    iconOnly: true,
    icon: <FaBars />,
    classes: "button-icon-only",
  },
};

export const UseFancyLink: Story = {
  args: {
    href: "/hello",
    label: "Visit Google",
    classes: "button-primary button-peach",
  },
};

export const OpenNewTab: Story = {
  args: {
    href: "https://www.google.com",
    label: "Visit Google",
    newTab: true,
    classes: "button-primary button-peach",
  },
};
