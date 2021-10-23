import IBaseColor from "./IBaseColor";

declare module "styled-components" {
  export interface DefaultTheme extends IBaseColor {
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
