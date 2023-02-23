const path = require('path');

module.exports = {
  stories: ['../src/components/**/*.stories.@(ts|tsx|js|jsx|mdx)'],
  // stories: ['../stories/**/*.stories.@(ts|tsx|js|jsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    path.resolve('./.storybook/my-preset'),
  ],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  },
};
