import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import ReviewCard from "./ReviewCard";

const meta = {
  title: "Components/ReviewCards/ReviewCard",
  component: ReviewCard,
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
} satisfies Meta<typeof ReviewCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    review:
      "Our Safe Haven journey has been amazing. As parents we trust the team at         Safe Haven with our most precious children and they never disappoint. Huge thank you to all, I really can't say it enough.",
    name: "Stacey",
    rating: 5,
  },
};
