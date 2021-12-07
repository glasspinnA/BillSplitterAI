import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CreateUserScreen } from "../screen/CreateUser";
import { BillingOverViewScreen } from "../screen/BillingOverview";
import { BillingScreen } from "../screen/Billing";
import { UserPayOverViewScreen } from "../screen/UserPayOverview";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Tab = createBottomTabNavigator();
const _Stack = createNativeStackNavigator();
import { useColorScheme } from "react-native";
import { BaseColor } from "../enums/BaseColor";

const MyTheme = {
  dark: false,
  colors: {
    primary: BaseColor.WARNING,
    background: BaseColor.WARNING,
    card: BaseColor.WARNING,
    text: BaseColor.WARNING,
    border: BaseColor.WARNING,
    notification: BaseColor.WARNING,
  },
};

export const Stack = () => {
  const scheme = useColorScheme();

  return <NavigationContainer>{__DEV__ ? devStack() : prodStack()}</NavigationContainer>;
};

const prodStack = () => {
  return (
    <_Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <_Stack.Screen name={ScreenNames.USER} component={CreateUserScreen} />
      <_Stack.Screen name={ScreenNames.BILLING_OVERVIEW} component={BillingOverViewScreen} />
      <_Stack.Screen name={ScreenNames.BILLING} component={BillingScreen} />
      <_Stack.Screen name={ScreenNames.USER_PAY} component={UserPayOverViewScreen} />
    </_Stack.Navigator>
  );
};

const devStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* <Tab.Screen name={ScreenNames.USER} component={CreateUserScreen} />
      <Tab.Screen name={ScreenNames.BILLING_OVERVIEW} component={BillingOverViewScreen} />
      <Tab.Screen name={ScreenNames.BILLING} component={BillingScreen} /> */}
      <Tab.Screen name={ScreenNames.USER_PAY} component={UserPayOverViewScreen} />
    </Tab.Navigator>
  );
};

class ScreenNames {
  static USER: string = "User";
  static BILLING_OVERVIEW: string = "Billing Overview";
  static BILLING: string = "Billing";
  static USER_PAY: string = "User Pay";
}
