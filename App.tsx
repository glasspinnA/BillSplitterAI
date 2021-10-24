import React from "react";
import { ThemeProvider } from "./src/component/baseComponents/ThemeProvider";
import { BaseScreenContainer } from "./src/containers/BaseScreenContainer";
import { CreateUserScreen } from "./src/screen/CreateUser";
import { StyleScreen } from "./src/screen/Style";
export default function App() {
  return (
    <ThemeProvider>
      <BaseScreenContainer>
        {/* <StyleScreen></StyleScreen> */}
        <CreateUserScreen />
      </BaseScreenContainer>
    </ThemeProvider>
  );
}
