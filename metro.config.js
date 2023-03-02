/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
require('dotenv').config();

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: process.env.STORYBOOK !== 'true',
      },
    }),
  },
};
