import React from "react";
import { Stack } from "./src/navigation/Stack";
import * as eva from "@eva-design/eva";
import { CustomStatusBar } from "./src/component/StatusBar";
import { ApplicationProvider } from "@ui-kitten/components";
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
