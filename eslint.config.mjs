// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import tsParser from "@typescript-eslint/parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "**/.DS_STORE",
      "build/**",
      "package/**",
      ".env",
      ".env.*",
      "**/codegen.ts",
      "**/eslint.config.js",
    ],
  },
  eslint.configs.recommended,
  eslintConfigPrettier,
  {
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      // globals: {
      //   ...globals.browser,
      //   ...globals.es2017,
      //   ...globals.node,
      // },
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
        // extraFileExtensions: [".svelte"],
      },
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      // "svelte/no-at-html-tags": "off",
    },
  },
  ...storybook.configs["flat/recommended"],
];

export default eslintConfig;
