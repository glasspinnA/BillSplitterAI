import IBaseColor from "./IBaseColor";

declare module "styled-components" {
  export interface DefaultTheme extends IBaseColor {
    IS_DARK_THEME: boolean;
    BACKGROUND: string;
    BLACK: string;
    WHITE: string;
    COMPONENT: {
      BUTTON: {};
      RADIO: {};
      TEXT_INPUT: {
        HINT: string;
      };
    };
  }
}
