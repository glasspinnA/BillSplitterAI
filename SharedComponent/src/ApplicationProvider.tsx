import * as React from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider as AppProvider } from "@ui-kitten/components";

interface ApplicationProviderProps {}

export const ApplicationProvider: React.FC<ApplicationProviderProps> = (props) => {
  return (
    <AppProvider {...eva} theme={eva.light}>
      {props.children}
    </AppProvider>
  );
};
