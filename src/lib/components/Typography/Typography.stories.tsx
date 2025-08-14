import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Typography, { TypeVariant, TypeComponent } from "./Typography";

const meta = {
  title: "Components/Typography",
  component: Typography,
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
  argTypes: {},
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    variant: TypeVariant.H1,
    component: TypeComponent.h1,
    children: "H1",
  },
};

export const H2: Story = {
  args: {
    variant: TypeVariant.H2,
    component: TypeComponent.h2,
    children: "H2",
  },
};

export const H3: Story = {
  args: {
    variant: TypeVariant.H3,
    component: TypeComponent.h3,
    children: "H3",
  },
};

export const H4: Story = {
  args: {
    variant: TypeVariant.H4,
    component: TypeComponent.h4,
    children: "H4",
  },
};

export const H5: Story = {
  args: {
    variant: TypeVariant.H5,
    component: TypeComponent.h5,
    children: "H5",
  },
};

export const H6: Story = {
  args: {
    variant: TypeVariant.H6,
    component: TypeComponent.h6,
    children: "H6",
  },
};

export const Body1: Story = {
  args: {
    variant: TypeVariant.Body1,
    component: TypeComponent.p,
    children: "Body1",
  },
};

export const Button1: Story = {
  args: {
    variant: TypeVariant.Button1,
    component: TypeComponent.span,
    children: "Button1",
  },
};

export const Primary: Story = {
  args: {
    children: null,
  },
  render: () => {
    return (
      <>
        <Typography {...H1.args}>This is a H1</Typography>
        <Typography {...H2.args}>This is a H2</Typography>
        <Typography {...H3.args}>This is a H3</Typography>
        <Typography {...H4.args}>This is a H4</Typography>
        <Typography {...H5.args}>This is a H5</Typography>
        <Typography {...H6.args}>This is a H6</Typography>
        <Typography {...Body1.args}>This is a Body1</Typography>
        <Typography {...Button1.args}>This is a Button1</Typography>
      </>
    );
  },
};
