import * as React from "react";
import { ThemeProvider as Theme } from "styled-components/native";
import { DarkMode } from "../../styles/Colors";
import * as eva from "@eva-design/eva";

interface ThemeProps {}

const ThemeProvider: React.FC<ThemeProps> = (props) => {
  return <Theme theme={eva.dark}>{props.children}</Theme>;
};

export { ThemeProvider };
