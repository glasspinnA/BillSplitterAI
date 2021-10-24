import { DefaultTheme } from "styled-components/native";
import IBaseColor from "../interfaces/Color/IBaseColor";

export const BaseColors: IBaseColor = {
  PRIMARY: "#3366FF",
  INFO: "#0095FF",
  WARNING: "#FFAA00",
  SUCCESS: "#00E096",
  DANGER: "#FF3D71",
  BLACK: "#222B45",
  WHITE: "#F7F9FC",
  NO_COLOR: "transparent",
};

export const DarkMode: DefaultTheme = {
  IS_DARK_THEME: true,
  BACKGROUND: BaseColors.BLACK,
  ...BaseColors,
  COMPONENT: {
    BUTTON: {},
    RADIO: {},
    TEXT_INPUT: {
      HINT: "#8F9BB3",
    },
  },
};
