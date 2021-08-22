<<<<<<< HEAD
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
=======
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
};
