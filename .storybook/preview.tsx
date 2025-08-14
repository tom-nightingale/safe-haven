import type { Preview } from "@storybook/nextjs-vite";
import "../src/lib/styles/globals.css";
import Viewports from "./viewports";
import { literataSerif, interSans } from "../src/lib/utils/fonts";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      options: {
        ...Viewports,
      },
    },
    options: {
      controls: true,
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
    layout: "fullscreen",
  },
  decorators: [
    Story => (
      <div
        className={`${literataSerif.variable} ${interSans.variable} antialiased`}
      >
        <Story />
      </div>
    ),
  ],
};

export default preview;
