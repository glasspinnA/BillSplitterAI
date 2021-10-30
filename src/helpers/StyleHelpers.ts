import { DefaultTheme } from "styled-components/native";
import { BaseColor } from "../enums/BaseColor";
import { FontSize } from "../enums/Text/FontSize";
import { FontWeight } from "../enums/Text/FontWeight";
import { BaseColors } from "../styles/Colors";

const GetFontSize = (size: FontSize | undefined): string => {
  switch (size) {
    case FontSize.H1:
      return "60px";
    case FontSize.H2:
      return "50px";
    case FontSize.H3:
      return "40px";
    case FontSize.H4:
      return "30px";
    case FontSize.H5:
      return "25px";
    case FontSize.H6:
      return "20px";
    case FontSize.P1:
    case FontSize.S1:
      return "20px";
    case FontSize.P2:
    case FontSize.S2:
      return "16px";
    default:
      return "15px";
  }
};
const getFontWeight = (size: FontSize | undefined | FontWeight): string => {
  switch (size) {
    case FontWeight.EXTRA_BOLD:
      return "800";
    case FontSize.H1:
    case FontSize.H2:
    case FontSize.H3:
    case FontSize.H4:
    case FontSize.H5:
    case FontSize.H6:
    case FontWeight.BOLD:
      return "600";
    case FontSize.S1:
      return "500";
    default:
      return "normal";
  }
};
const getHEXColor = (color?: BaseColor | string): string => {
  switch (color) {
    case BaseColor.PRIMARY:
      return BaseColors.PRIMARY;
    case BaseColor.DANGER:
      return BaseColors.DANGER;
    case BaseColor.INFO:
      return BaseColors.INFO;
    case BaseColor.WARNING:
      return BaseColors.WARNING;
    case BaseColor.SUCCESS:
      return BaseColors.SUCCESS;
    case BaseColor.BLACK:
      return BaseColors.BLACK;
    case BaseColor.WHITE:
      return BaseColors.WHITE;
    case undefined:
      return "transparent";
    default:
      return color?.toString();
  }
};

export const getTextColorByBaseColor = (color?: BaseColor) => {
  switch (color) {
    case BaseColor.PRIMARY:
    case BaseColor.BLACK:
      return BaseColor.WHITE;
    case BaseColor.WHITE:
    case BaseColor.DANGER:
    case BaseColor.INFO:
    case BaseColor.WARNING:
    case BaseColor.SUCCESS:
    default:
      return BaseColor.BLACK;
  }
};

const getSystemTextColor = (theme: DefaultTheme | undefined): BaseColor => {
  return theme?.IS_DARK_THEME ? BaseColor.WHITE : BaseColor.WHITE;
};

export { GetFontSize, getFontWeight, getHEXColor, getSystemTextColor };
