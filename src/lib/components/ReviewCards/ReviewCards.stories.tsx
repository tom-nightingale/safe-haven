import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import ReviewCards from "./ReviewCards";

const meta = {
  title: "Components/ReviewCards",
  component: ReviewCards,
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
} satisfies Meta<typeof ReviewCards>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    reviews: [
      {
        review:
          "Our Safe Haven journey has been amazing. As parents we trust the team at         Safe Haven with our most precious children and they never disappoint. Huge thank you to all, I really can't say it enough.",
        name: "",
        rating: 5,
      },
      {
        review:
          "Our Safe Haven journey has been amazing. As parents we trust the team at         Safe Haven with our most precious children and they never disappoint. Huge thank you to all, I really can't say it enough.",
        name: "",
        rating: 5,
      },
      {
        review:
          "Our Safe Haven journey has been amazing. As parents we trust the team at         Safe Haven with our most precious children and they never disappoint. Huge thank you to all, I really can't say it enough.",
        name: "",
        rating: 5,
      },
      {
        review:
          "Our Safe Haven journey has been amazing. As parents we trust the team at         Safe Haven with our most precious children and they never disappoint. Huge thank you to all, I really can't say it enough.",
        name: "",
        rating: 5,
      },
      {
        review:
          "Our Safe Haven journey has been amazing. As parents we trust the team at         Safe Haven with our most precious children and they never disappoint. Huge thank you to all, I really can't say it enough.",
        name: "",
        rating: 5,
      },
    ],
  },
};
