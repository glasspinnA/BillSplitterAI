import React from "react";
import { ThemeProvider } from "./src/component/baseComponents/ThemeProvider";
import { BaseScreenContainer } from "./src/containers/BaseScreenContainer";
import { BillingScreen } from "./src/screen/Billing";
import { BillingOverViewScreen } from "./src/screen/BillingOverview";
import { CreateUserScreen } from "./src/screen/CreateUser";
import { StyleScreen } from "./src/screen/Style";
import { UserPayOverViewScreen } from "./src/screen/UserPayOverview";
export default function App() {
  return (
    <ThemeProvider>
      <BaseScreenContainer>
        {/* <StyleScreen></StyleScreen> */}
        {/* <CreateUserScreen /> */}
        {/* <BillingOverViewScreen /> */}
        {/* <BillingScreen></BillingScreen> */}
        <UserPayOverViewScreen />
      </BaseScreenContainer>
    </ThemeProvider>
  );
}
