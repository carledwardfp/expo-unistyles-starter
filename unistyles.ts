import { StyleSheet } from "react-native-unistyles";

const gap = (v: number) => v * 4;

const components = {
  // button: {
  //   deepKey: {},
  // },
};

const utils = {
  hexToRGBA: () => {},
};

const premiumFeatures = {
  //
};

const lightTheme = {
  colors: {
    primary: "rgb(0, 122, 255)",
    background: "rgb(242, 242, 242)",
    card: "rgb(255, 255, 255)",
    text: "rgb(28, 28, 30)",
    border: "rgb(216, 216, 216)",
    notification: "rgb(255, 59, 48)",
  },
  components,
  utils,
  gap,
  ...premiumFeatures,
};

const darkTheme = {
  colors: {
    primary: "rgb(10, 132, 255)",
    background: "rgb(1, 1, 1)",
    card: "rgb(18, 18, 18)",
    text: "rgb(229, 229, 231)",
    border: "rgb(39, 39, 41)",
    notification: "rgb(255, 69, 58)",
  },
  components,
  utils,
  gap,
  ...premiumFeatures,
};

const appThemes = {
  light: lightTheme,
  dark: darkTheme,
};

type AppThemes = typeof appThemes;

declare module "react-native-unistyles" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface UnistylesThemes extends AppThemes {}
}

StyleSheet.configure({
  themes: appThemes,
  settings: {
    adaptiveThemes: true,
  },
});
