import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import MeetTheTeam from "./MeetTheTeam";

const meta = {
  title: "Components/MeetTheTeam",
  component: MeetTheTeam,
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
} satisfies Meta<typeof MeetTheTeam>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    profiles: [
      {
        title: "Sarah Atkins",
        subtitle: "Owner",
        shadowClass: "bg-green/20",
        buttonText: "",
        buttonStyle: "icon-only",
        style: "profile",
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
      {
        title: "Sarah Atkins",
        subtitle: "Owner",
        shadowClass: "bg-green/20",
        buttonText: "",
        buttonStyle: "icon-only",
        style: "profile",
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
      {
        title: "Sarah Atkins",
        subtitle: "Owner",
        shadowClass: "bg-green/20",
        buttonText: "",
        buttonStyle: "icon-only",
        style: "profile",
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
    ],
  },
};
