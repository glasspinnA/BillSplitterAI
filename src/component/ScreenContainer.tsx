import { Layout } from "@ui-kitten/components";
import * as React from "react";

interface AppProps {}

const ScreenContainer: React.FC<AppProps> = (props) => {
  return <Layout style={{ flex: 1, paddingHorizontal: 5, zIndex: 1, position: "relative" }}>{props.children}</Layout>;
};

export { ScreenContainer };
