import * as React from "react";
import { ListRenderItemInfo, View } from "react-native";
import { ScreenContainer } from "../component/ScreenContainer";
import { ScreenName } from "../constant/ScreenName";
import { INavigateActionButton, OverviewComponent } from "./OverviewComponent";
import User from "../interfaces/User/IUser";
import { FlatListItem, FlexDirection } from "../styles/SharedStyles";
import { Text } from "@ui-kitten/components";
import { useAppContext } from "../context/Consumer";
import { Flatlist } from "../component/baseComponents/Flatlist";
import { ItemRow } from "../component/ItemRow";
import { GetItemData } from "../helpers/MappingHelper";

export interface UserOverviewProps {}

export function UserOverviewScreen(props: UserOverviewProps) {
  const { users } = useAppContext();

  const renderItem = ({ item }: ListRenderItemInfo<User>) => {
    return (
      // <View style={{ flex: 1 }}>
      //   <FlatListItem.Item>
      //     <FlatListItem.Row flexDirection={FlexDirection.ROW}>
      //       <FlatListItem.Column flex={2}>
      //         <Text>{item.Name}</Text>
      //       </FlatListItem.Column>
      //       <FlatListItem.Column>
      //         <Text>{item.Income}</Text>
      //       </FlatListItem.Column>
      //     </FlatListItem.Row>
      //   </FlatListItem.Item>
      // </View>
      <ItemRow item={GetItemData(item.Name, item.Income)} />
    );
  };
  const getFlatList = (): JSX.Element => (
    <Flatlist<User> items={users} keyExtractor={(item: User) => item.Id} renderItem={renderItem} />
  );
  const getOverviewTitle = (): string => "User\nOverview";
  const getButtonTitle = (): string => "Add User";
  const getNavigationButton = (): INavigateActionButton => {
    return {
      title: "Next",
      screenToNavigate: ScreenName.BILLING_OVERVIEW,
    };
  };

  return (
    <ScreenContainer>
      <OverviewComponent
        sceenToNavigate={ScreenName.USER}
        buttonTitle={getButtonTitle()}
        overviewTitle={getOverviewTitle()}
        flatlist={getFlatList()}
        navigateButtonAction={getNavigationButton()}
      />
    </ScreenContainer>
  );
}
