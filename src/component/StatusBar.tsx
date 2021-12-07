import * as React from "react";
import { Platform, StatusBar, View } from "react-native";
import { useTheme } from "react-native-ui-kitten/theme/theme/theme.service";
export interface CustomStatusBarProps {}
export function CustomStatusBar(props: CustomStatusBarProps) {
  const STATUS_BAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;
  const theme = useTheme();
  return (
    <View style={{ height: STATUS_BAR_HEIGHT, backgroundColor: theme["background-basic-color-1"] }}>
      <StatusBar barStyle={"dark-content"} />
    </View>
  );
}
