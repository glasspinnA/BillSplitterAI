import React from "react";
import { ApplicationProvider } from "../SharedComponent/src/ApplicationProvider";
import { QuoteScreen } from "./src/screen/Quote";
import { CustomStatusBar } from "../SharedComponent/src/StatusBar";
import { BookScreen } from "./src/screen/Books";
import { BookQuotes } from "./src/screen/BookQuotes";
export default function App() {
  return (
    <ApplicationProvider>
      <CustomStatusBar />
      {/* <QuoteScreen /> */}
      {/* <BookScreen /> */}
      <BookQuotes />
    </ApplicationProvider>
  );
}
