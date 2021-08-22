<<<<<<< HEAD
/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
=======
module.exports = {
  transformer: {
    assetPlugins: ['expo-asset/tools/hashAssetFiles'],
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
  },
};
