import { DefaultTheme } from "styled-components/native";
import { Colors } from "../constant/Colors";
export interface IButtonChildProps<T> {
  data: T;
  color?: Colors;
  isChecked?: boolean;
  theme?: DefaultTheme;
  index?: number;
  onPress?: (data: T) => void;
}
