module.exports = function (api) {
  api.cache(true);

  return {
    // for Expo
    presets: ["babel-preset-expo"],

    // other config
    plugins: [
      // other plugins
      [
        "react-native-unistyles/plugin",
        {
          // pass root folder of your application
          // all files under this folder will be processed by the Babel plugin
          // if you need to include more folders, or customize discovery process
          // check available babel options
          root: "src",
        },
      ],
      "babel-plugin-react-compiler", // SHOULD BE AFTER UNISTYLES!
      "react-native-reanimated/plugin", // SHOULD BE LAST!
    ],
  };
};
