import React from "react";
import { ApplicationProvider } from "react-native-ui-kitten/theme/application/applicationProvider.component";
import { Stack } from "./src/navigation/Stack";
import * as eva from "@eva-design/eva";
import { CustomStatusBar } from "./src/component/StatusBar";
export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <>
        <CustomStatusBar />
        <Stack />
      </>
    </ApplicationProvider>
  );
}
