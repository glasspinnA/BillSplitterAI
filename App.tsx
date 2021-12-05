import React from "react";
import { ThemeProvider } from "./src/component/baseComponents/ThemeProvider";
import { BaseScreenContainer } from "./src/containers/BaseScreenContainer";
import { Stack } from "./src/navigation/Stack";
export default function App() {
  return (
    <ThemeProvider>
      <BaseScreenContainer>
        <Stack />
      </BaseScreenContainer>
    </ThemeProvider>
  );
}
