import { Input } from "@ui-kitten/components";
import { StatusBar } from "expo-status-bar";
import { Layout, Text } from "@ui-kitten/components";
import React from "react";
import { View, TextInput } from "react-native";
import { ApplicationProvider } from "../SharedComponent/src/ApplicationProvider";
import { ScreenContainer } from "../SharedComponent/src/ScreenContainer";
import { Icon, IconName } from "../SharedComponent/src/Icon";

export default function App() {
  return (
    <ApplicationProvider>
      <ScreenContainer>
        <View style={{ padding: 15, flex: 1, alignItems: "stretch", backgroundColor: "red" }}>
          <View>
            <Icon icon={IconName.CHEVRON}></Icon>
            <TextInput
              multiline={true}
              style={{ flex: 1, backgroundColor: "blue", textAlign: "center", textAlignVertical: "bottom" }}
            />
          </View>
        </View>
      </ScreenContainer>
    </ApplicationProvider>
  );
}
