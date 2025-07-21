import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Hero from "./Hero";

const meta = {
  title: "Components/Hero",
  component: Hero,
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
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: [
      {
        _key: "2191f5ac7b0f",
        markDefs: [],
        children: [
          {
            _type: "span",
            marks: [],
            text: "We nurture ",
            _key: "48f6b1d702e7",
          },
          {
            text: "curiosity",
            _key: "e9f017a78d5a",
            _type: "span",
            marks: ["strong"],
          },
          {
            _key: "e44acddb5ed7",
            _type: "span",
            marks: [],
            text: " and ",
          },
          {
            _key: "45a4703f883f",
            _type: "span",
            marks: ["strong"],
            text: "joy",
          },
          {
            _type: "span",
            marks: [],
            text: " through ",
            _key: "714b4fe967ba",
          },
          {
            marks: ["strong"],
            text: "play",
            _key: "28597849ce67",
            _type: "span",
          },
          {
            text: " and ",
            _key: "41b58c146f54",
            _type: "span",
            marks: [],
          },
          {
            _key: "b3c476f3c2c0",
            _type: "span",
            marks: ["strong"],
            text: "nature-based",
          },
          {
            _key: "acdcc6acc58b",
            _type: "span",
            marks: [],
            text: " learning",
          },
        ],
        _type: "block",
        style: "normal",
      },
    ],
    subtitle: [
      {
        _type: "block",
        style: "normal",
        _key: "8952238ef0c5",
        markDefs: [],
        children: [
          {
            _key: "02e6d0db084b",
            _type: "span",
            marks: [],
            text: "Welcome to ",
          },
          {
            _type: "span",
            marks: ["strong"],
            text: "Safe Haven Day Nursery",
            _key: "a6aa64ed9246",
          },
        ],
      },
    ],
    heroCards: [
      {
        title: "Mansfield Woodhouse",
        subtitle: "Safe Haven",
        url: "/our-nurseries/mansfield-woodhouse",
        colourTheme: "peach",
      },
      {
        title: "South Normanton",
        subtitle: "Safe Haven",
        url: "/our-nurseries/south-normanton",
        colourTheme: "blue",
      },
      {
        title: "The Den",
        subtitle: "Safe Haven",
        url: "/our-rooms/the-den",
        colourTheme: "yellow",
      },
    ],
    heroButtons: [
      {
        classes: "",
        label: "Our Rooms",
        href: "/our-rooms",
      },
      {
        classes: "",
        label: "View Our Gallery",
        href: "/gallery",
      },
    ],
  },
};

export const NoCards: Story = {
  args: {
    title: "All of our rooms are specially designed with your child in mind",
    subtitle: "Our Rooms",
    heroButtons: [
      {
        classes: "",
        label: "Our Rooms",
        href: "/our-rooms",
      },
      {
        classes: "",
        label: "View Our Gallery",
        href: "/gallery",
      },
    ],
  },
};
