import * as React from "react";
import { ListRenderItemInfo } from "react-native";
import { Flatlist } from "../component/baseComponents/Flatlist";
import { GetDummy_Users } from "../tests/constants/constants";
import { ScreenContainer } from "../component/ScreenContainer";
import { ScreenName } from "../constant/ScreenName";
import { OverviewComponent } from "./OverviewComponent";
import User from "../interfaces/User/IUser";
import { FlatListItem, FlexDirection } from "../styles/SharedStyles";
import { Text } from "@ui-kitten/components";

export interface UserOverviewProps {}

export function UserOverviewScreen(props: UserOverviewProps) {
  const renderItem = ({ item }: ListRenderItemInfo<User>) => {
    return (
      <FlatListItem.Item>
        <FlatListItem.Row flexDirection={FlexDirection.ROW}>
          <FlatListItem.Column flex={2}>
            <Text>{item.Name}</Text>
          </FlatListItem.Column>
          <FlatListItem.Column>
            <Text>{item.Income}</Text>
          </FlatListItem.Column>
        </FlatListItem.Row>
      </FlatListItem.Item>
    );
  };
  const getFlatList = (): JSX.Element => (
    <Flatlist<User> items={GetDummy_Users()} keyExtractor={(item: User) => item.Id} renderItem={renderItem} />
  );
  const getOverviewTitle = (): string => "User\nOverview";
  const getButtonTitle = (): string => "Add User";
  return (
    <ScreenContainer>
      <OverviewComponent
        sceenToNavigate={ScreenName.USER}
        buttonTitle={getButtonTitle()}
        overviewTitle={getOverviewTitle()}
        flatlist={getFlatList()}
      />
    </ScreenContainer>
  );
}
