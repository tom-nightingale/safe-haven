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
        __typename: "Staff",
        _id: "5f3db94c-5088-477a-8c3f-18c0f2d679a9",
        _type: "staff",
        name: "Paula",
        jobTitle: "Nursery Manager",
        profileImage: {
          __typename: "ImageBlock",
          image: {
            __typename: "Image",
            asset: {
              __typename: "SanityImageAsset",
              url: "https://cdn.sanity.io/images/smb7rd2w/production/699e5ce074967d54a98aa8f8c907902cf7d18981-1400x2100.jpg",
              altText: null,
              metadata: {
                __typename: "SanityImageMetadata",
                lqip: "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAeABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAgCBgcD/8QAKhAAAgEDAgQEBwAAAAAAAAAAAQIDAAQFBhEHEiFBCBMUURUiMTNhcYH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAMBAQEAAAAAAAAAAAAAAAABAgMSMf/aAAwDAQACEQMRAD8AZXPZSPDYua8kUvyD5UH1Y9hVU0rr2XJ5r4dlMcbJ5BvC/NzK34/dcONl7DY6ZgluJCkYnXfY1QYLqGHK4y58x5GUrKOU7gipNdqi0l4W44TeTp+jCUVCCQSwpIAQGUHrRVZEZB4iL2zGHsMXP9+9cpGey+5NYXqDXUeI9PjcXyz+kUIZj3Ye1Wrxb3cq6jxMKsQqQFhse5NL2W3kG+5670NYzVdMad6ieUPlwr1uNTaMs8hdKkc+5jdQem60VinBGeVdFbK5A9S/T+LRTAn/2Q==",
              },
            },
            hotspot: null,
            crop: null,
          },
        },
        biographyRaw: null,
      },
      {
        __typename: "Staff",
        _id: "6eb04e27-239b-4b11-9ae7-efdd8e0b31b7",
        _type: "staff",
        name: "Shellby",
        jobTitle: "Early Years Assistant Deputy",
        profileImage: {
          __typename: "ImageBlock",
          image: {
            __typename: "Image",
            asset: {
              __typename: "SanityImageAsset",
              url: "https://cdn.sanity.io/images/smb7rd2w/production/17f2f890624a1ee4da5462288b10294ae0c9cf67-1680x2520.jpg",
              altText: null,
              metadata: {
                __typename: "SanityImageMetadata",
                lqip: "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAeABQDASIAAhEBAxEB/8QAGgAAAQUBAAAAAAAAAAAAAAAAAAEEBgcIBf/EACYQAAEDAwMEAgMAAAAAAAAAAAECAwQABREGBxIhIjFBE0IkUWH/xAAVAQEBAAAAAAAAAAAAAAAAAAAEAv/EABkRAAMBAQEAAAAAAAAAAAAAAAABAhEDMf/aAAwDAQACEQMRAD8A0lqi+MWC1LlvgrVni22PK1HwBUI03uRMkaiatt+tZgpknDDucgn9Gl3YuTCLvY7e4FKLi1OHH1wOhNQfWcwwYEeUoLdcZeQUYGeIz5o19WrxC+fCa5un6aFophZLixc7VGlxnAtt1AIIP8opKehCkNztUxo0hmRMxyfeDSTjqlHuuiypuVFb7EradRnuHqq31RGF83JtVsfP48Zv5iD9j5qykL4qS2lIGegx6FEcrUxc08crwdQVLgRwxDWthoHPBBwAaKFnirFFVhJ//9k=",
              },
            },
            hotspot: null,
            crop: null,
          },
        },
        biographyRaw: null,
      },
      {
        __typename: "Staff",
        _id: "dcbe64c0-e84e-4d7a-bccb-171d13753d48",
        _type: "staff",
        name: "Sarah",
        jobTitle: "Nursery Owner",
        profileImage: {
          __typename: "ImageBlock",
          image: {
            __typename: "Image",
            asset: {
              __typename: "SanityImageAsset",
              url: "https://cdn.sanity.io/images/smb7rd2w/production/dee9958f56c7e022218a231b668c1e5ae5458c71-1680x2520.jpg",
              altText: null,
              metadata: {
                __typename: "SanityImageMetadata",
                lqip: "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAeABQDASIAAhEBAxEB/8QAGQAAAwADAAAAAAAAAAAAAAAAAAYIBAUH/8QAJhAAAQMDAwQCAwAAAAAAAAAAAQIDBAAFEQYSEwchMWEUQUJRof/EABUBAQEAAAAAAAAAAAAAAAAAAAQD/8QAHREAAgICAwEAAAAAAAAAAAAAAQIAAxIhBBExQf/aAAwDAQACEQMRAD8ApbUd4ZsVqdmyAVBPZKB5UT4FJdi6kOSr01CuttVDQ+cMubsgn3TJru1pudm2qVgtK5AM4yRXF7y8IsyCXJB5kOJ40HyaJda6PryN49CWVkn2UWO9FY9vc5YLDh/JAP8AKKUD2IKTT1w1rPl6tVbrfKdajRFBG1tWApfulWe5KjrRc33lOzuyWwv694pTenrm3V2ZJyt1S+RWT5NbP5b0yWt11ZOBhIP0KM6ZMCYqp8QQPsp7p5r2NdtLxnp6kNyUEtLA7DIx3oqYm5smHubYdUlBO7A/dFXBhyu5/9k=",
              },
            },
            hotspot: null,
            crop: null,
          },
        },
        biographyRaw: null,
      },
    ],
  },
};
