import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Bucket from "./Bucket";
import { fn } from "storybook/test";

const meta = {
  title: "Components/Bucket",
  component: Bucket,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    // layout: "centered",
    nextjs: {
      appDirectory: true,
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // label: { control: "text" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Bucket>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Discoverers",
    subtitle: "2-4 Year Olds",
    buttonText: "View Room",
  },
};

export const Lilac: Story = {
  args: {
    title: "Discoverers",
    subtitle: "2-4 Year Olds",
    buttonText: "View Room",
    containerClass: "bg-lilac",
    buttonClass: "button-outline-lilac text-lilac",
  },
};

export const Yellow: Story = {
  args: {
    title: "Discoverers",
    subtitle: "2-4 Year Olds",
    buttonText: "View Room",
    containerClass: "bg-yellow",
    buttonClass: "button-outline-yellow text-yellow",
  },
};

export const Blue: Story = {
  args: {
    title: "Discoverers",
    subtitle: "2-4 Year Olds",
    buttonText: "View Room",
    containerClass: "bg-blue",
    buttonClass: "button-outline-blue text-blue",
  },
};
