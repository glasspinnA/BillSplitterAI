import React from "react";
import { ApplicationProvider } from "../SharedComponent/src/ApplicationProvider";
import { QuoteScreen } from "./src/screen/Quote";
import { CustomStatusBar } from "../SharedComponent/src/StatusBar";
export default function App() {
  return (
    <ApplicationProvider>
      <CustomStatusBar />
      <QuoteScreen />
    </ApplicationProvider>
  );
}
