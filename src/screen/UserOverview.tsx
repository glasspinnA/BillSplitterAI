import * as React from "react";
import { ListRenderItemInfo } from "react-native";
import { ScreenContainer } from "../component/ScreenContainer";
import { ScreenName } from "../constant/ScreenName";
import { INavigateActionButton, OverviewComponent } from "./OverviewComponent";
import User from "../interfaces/User/IUser";
import { useAppContext } from "../context/Consumer";
import { Flatlist } from "../component/baseComponents/Flatlist";
import { ItemRow } from "../component/ItemRow";
import { GetItemData } from "../helpers/MappingHelper";
import { EmptyList } from "../component/baseComponents/ListEmpty";
import { UserRequired } from "../component/form/UserRequired";
import { ActionType } from "../context/Context";
import { IContextMenuAction } from "../component/ContextMenu";

export interface UserOverviewProps {}

export function UserOverviewScreen(props: UserOverviewProps) {
  const { users, dispatchAction } = useAppContext();
  const NBR_REQUIRED_USERS = 2;
  const getFlatList = (): JSX.Element => {
    const renderItem = ({ item }: ListRenderItemInfo<User>) => {
      const getAction = (): IContextMenuAction => {
        return {
          onDelete: deleteUser,
        };
      };
      const deleteUser = () => dispatchAction(ActionType.DELETE_USER, item.Id);

      return <ItemRow item={GetItemData(item.Id, item.Name, item.Income)} action={getAction()} />;
    };

    return (
      <Flatlist<User>
        items={users}
        keyExtractor={(item: User) => item.Id}
        renderItem={renderItem}
        listEmptyComponent={<EmptyList title="Add a user" />}
      />
    );
  };
  const getOverviewTitle = (): string => "User\nOverview";
  const getButtonTitle = (): string => "Add User";
  const getNavigationButton = (): INavigateActionButton => {
    return {
      title: "Next",
      screenToNavigate: ScreenName.BILLING_OVERVIEW,
      shouldDisable: users.length < NBR_REQUIRED_USERS,
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
        extraComponent={<UserRequired nbrRequiredUsers={NBR_REQUIRED_USERS} nbrUsers={users.length} />}
      />
    </ScreenContainer>
  );
}
