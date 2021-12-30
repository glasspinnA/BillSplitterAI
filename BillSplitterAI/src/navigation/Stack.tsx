import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CreateUserScreen } from "../screen/CreateUser";
import { BillingOverViewScreen } from "../screen/BillingOverview";
import { BillingScreen } from "../screen/Billing";
import { UserPayOverViewScreen } from "../screen/UserPayOverview";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ScreenName } from "../constant/ScreenName";
import { UserOverviewScreen } from "../screen/UserOverview";
const Tab = createBottomTabNavigator();
const _Stack = createNativeStackNavigator();

export const Stack = () => {
  const screens: Screen[] = [
    { name: ScreenName.USER, component: CreateUserScreen },
    { name: ScreenName.USER_OVERVIEW, component: UserOverviewScreen },
    { name: ScreenName.BILLING, component: BillingScreen },
    { name: ScreenName.BILLING_OVERVIEW, component: BillingOverViewScreen },
    { name: ScreenName.USER_PAY, component: UserPayOverViewScreen },
  ];
  return <NavigationContainer>{__DEV__ ? devStack(screens) : prodStack(screens)}</NavigationContainer>;
};

const prodStack = (screens: Screen[]) => {
  return (
    <_Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {getScreens(screens, true)}
    </_Stack.Navigator>
  );
};

const devStack = (screens: Screen[]) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {getScreens(screens)}
    </Tab.Navigator>
  );
};

const getScreens = (screens: Screen[], isProd?: boolean): JSX.Element[] => {
  return screens.map((x) =>
    isProd ? (
      <_Stack.Screen name={x.name} component={x.component} options={{ animation: "default" }} />
    ) : (
      <Tab.Screen name={x.name} component={x.component} />
    )
  );
};

interface Screen {
  name: string;
  component: React.ComponentType<any>;
}
