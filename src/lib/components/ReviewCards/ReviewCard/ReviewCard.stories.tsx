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
    review: [
      {
        _key: "9ec4555da632",
        markDefs: [],
        children: [
          {
            _type: "span",
            marks: [],
            text: "My child loves her days at this nursery. The staff are so caring and I feel very happy to leave my child in their car. They take the time to up strong relationships with the children they look after and know them so well. I also feel that the nursery has helped my child to develop in many ways.",
            _key: "ed9e2dcaf6fe",
          },
        ],
        _type: "block",
        style: "normal",
      },
    ],
    name: "Stacey",
    rating: 5,
  },
};
