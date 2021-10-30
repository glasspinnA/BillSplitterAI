import { DefaultTheme } from "styled-components/native";
import { BaseColor } from "../enums/BaseColor";

export interface IButtonChildProps<T> {
  data: T;
  color?: BaseColor;
  isChecked?: boolean;
  theme?: DefaultTheme;
  index?: number;
  onPress?: (data: T) => void;
}
