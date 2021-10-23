import * as React from "react";
import { ThemeProvider as Theme } from "styled-components/native";
import { DarkMode } from "../styles/Colors";

interface ThemeProps {}

const ThemeProvider: React.FC<ThemeProps> = (props) => {
  return <Theme theme={DarkMode}>{props.children}</Theme>;
};

export { ThemeProvider };
