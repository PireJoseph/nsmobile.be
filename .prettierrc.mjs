/** @type {import("prettier").Config} */
export default {
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  trailingComma: "all",
  tabs: true,
  tabWidth: 4,
  semi: false,
  singleQuote: true,
  bracketSameLine: false,
  bracketSpacing: true,
};
