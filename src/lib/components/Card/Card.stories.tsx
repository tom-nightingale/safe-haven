import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Card from "./Card";
import { CardImageType } from "@/utils/propTypes";

const meta = {
  title: "Components/Card",
  component: Card,
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
    title: { control: "text" },
    subtitle: { control: "text" },
    containerClass: { control: "text" },
    buttonText: { control: "text" },
    buttonStyle: { control: "text" },
    buttonClass: { control: "text" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StaffProfile: Story = {
  args: {
    title: "Sarah Atkins",
    subtitle: "Owner",
    shadowClass: "bg-green/20",
    buttonText: "",
    buttonStyle: "icon-only",
    style: CardImageType.PROFILE,
    href: "/",
    image: {
      __typename: "Image",
      asset: {
        __typename: "SanityImageAsset",
        url: "https://cdn.sanity.io/images/smb7rd2w/production/35818a08a34e0646e86ee7247d28de833b1c62bf-1400x2100.jpg",
        altText: null,
        metadata: {
          __typename: "SanityImageMetadata",
          lqip: "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAeABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAgCBgcD/8QAKhAAAgEDAgQEBwAAAAAAAAAAAQIDAAQFBhEHEiFBCBMUURUiMTNhcYH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABoRAAMBAQEBAAAAAAAAAAAAAAACAwESMUH/2gAMAwEAAhEDEQA/AGVz2Tjw2KmvJFL8g+VB9WPYVVNK69lyea+HZTHGyeQbwvzcyt+P3XDjZew2OmYJbiQrGJ132NUCC6hhyuMufMeRgVlHKdwRUlbMj5nwsjBXlrb6MLRUIJBLCkgBAZQetFVkZkHiIvbMYewxlx9+9cpGey+5NYVqDXUeI9PjcXyz+kUIZj3Ye1Wvxb3co1JiYVYhUgLDY9yaXtmJkG+/U70LRV260ZbMi84Plwr1uNTaMs8hcqkc+5jdQem60VinBGeVdFbK5A9S/T+LRTAn/9k=",
        },
      },
      hotspot: {
        __typename: "SanityImageHotspot",
        x: 0.49024108406607053,
        y: 0.3203306764325722,
        width: 0.6702003442990581,
        height: 0.41493968117190866,
      },
      crop: {
        __typename: "SanityImageCrop",
        top: 0.11286083584661782,
        bottom: 0.21402412753123654,
        left: 0,
        right: 0,
      },
    },
  },
};

export const Room: Story = {
  args: {
    title: "Discoverers",
    subtitle: "2-4 Year Olds",
    buttonText: "View Room",
    containerClass: "bg-lilac",
    shadowClass: "bg-lilac/20",
    buttonClass: "button-outline-lilac text-lilac",
    href: "/",
    image: {
      __typename: "Image",
      asset: {
        __typename: "SanityImageAsset",
        url: "https://cdn.sanity.io/images/smb7rd2w/production/79019ce6c262365291ad7206f5f819d82c933466-1400x1200.jpg",
        altText: null,
        metadata: {
          __typename: "SanityImageMetadata",
          lqip: "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAARABQDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAQGBwMF/8QAJxAAAQUAAQIEBwAAAAAAAAAAAQACAwQFERIxBhNBUSEyMzRxcoH/xAAWAQEBAQAAAAAAAAAAAAAAAAAEBQH/xAAbEQADAAMBAQAAAAAAAAAAAAAAAQIRITEDQf/aAAwDAQACEQMRAD8Am3N+pfqV2BobK9vlkc88D0aq0X288SSackTHOJbH0+rfZdTr5dGSKOnlWH2AQXOHxC9LW8QV5BDDdw3NLe0jh1d1HqbzrhUXpK19MN170r9Kw6KNwYXnhFZ9vOhn055azSInO5A9kVCWsII5rJpuT9H+BTLPyu/CIg11iDObP3Mv7FERKRh//9k=",
        },
      },
      hotspot: {
        __typename: "SanityImageHotspot",
        x: 0.4801690998053508,
        y: 0.3609037450996747,
        width: 0.6361802852978059,
        height: 0.7218074901993494,
      },
      crop: {
        __typename: "SanityImageCrop",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
    },
  },
};
