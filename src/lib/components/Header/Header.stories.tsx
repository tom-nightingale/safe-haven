import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Header from "./Header";
import { primaryNav, secondaryNav } from "@/data/navigation.data";

const meta = {
  title: "Components/Header",
  component: Header,
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
  //   argTypes: {
  // backgroundColor: { control: "color" },
  //   },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  //   args: { onClick: fn() },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

/* eslint-disable */
export const Primary: Story = {
  args: {
    primaryNav: primaryNav,
    secondaryNav: secondaryNav,
  },
};
/* eslint-enable */
