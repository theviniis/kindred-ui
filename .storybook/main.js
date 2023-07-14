const path = require('path');

module.exports = {
  stories: ['../src/components/**/*.stories.@(ts|tsx|js|jsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    // path.resolve('./.storybook/my-preset'),
  ],
  typescript: {
    check: false, // type-check stories during Storybook build
  },
  configureJSX: true,
  babelOptions: {},
  sourceLoaderOptions: null,
  transcludeMarkdown: true,
};
