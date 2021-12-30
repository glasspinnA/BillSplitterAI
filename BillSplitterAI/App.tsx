import React from "react";
import { Stack } from "./src/navigation/Stack";
import * as eva from "@eva-design/eva";
import { CustomStatusBar } from "./src/component/StatusBar";
import { ApplicationProvider } from "@ui-kitten/components";
import ContextProvider from "./src/context/Provider";
import { MenuProvider } from "react-native-popup-menu";
export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <ContextProvider>
        <MenuProvider>
          <>
            <CustomStatusBar />
            <Stack />
          </>
        </MenuProvider>
      </ContextProvider>
    </ApplicationProvider>
  );
}
