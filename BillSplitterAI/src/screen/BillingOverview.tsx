import * as React from "react";
import { ListRenderItemInfo, View } from "react-native";
import { Flatlist } from "../../../SharedComponent/src/baseComponents/Flatlist";
import Bill from "../interfaces/Bill/IBill";
import { ScreenContainer } from "../../../SharedComponent/src/ScreenContainer";
import { ScreenName } from "../constant/ScreenName";
import { ItemRow } from "../component/ItemRow";
import { GetItemData } from "../helpers/MappingHelper";
import { INavigateActionButton, OverviewComponent } from "./OverviewComponent";
import { useAppContext } from "../context/Consumer";
import { ActionType } from "../context/Context";
import { CalculateSumsToPay } from "../CalculateBill";
import { EmptyList } from "../../../SharedComponent/src/baseComponents/ListEmpty";
import { IContextMenuAction } from "../component/ContextMenu";

export interface BillingOverViewScreenProps {}

export function BillingOverViewScreen(props: BillingOverViewScreenProps) {
  const { bills, dispatchAction } = useAppContext();

  const getFlatList = (): JSX.Element => {
    const renderItem = ({ item }: ListRenderItemInfo<Bill>) => {
      const getAction = (): IContextMenuAction => {
        return {
          onDelete: deleteUser,
        };
      };
      const deleteUser = () => dispatchAction(ActionType.DELETE_USER, item.Id);
      return <ItemRow item={GetItemData(item.Id, item.Name, item.Price, item.PaymentMode)} action={getAction()} />;
    };
    return (
      <Flatlist<Bill>
        items={bills}
        keyExtractor={(item: Bill) => item.Id}
        renderItem={renderItem}
        listEmptyComponent={<EmptyList title="Add a bill" />}
      />
    );
  };
  const getOverviewTitle = (): string => "Billing\nOverview";
  const getButtonTitle = (): string => "Add Billing";

  const getNavigateButton = (): INavigateActionButton => {
    const action = (): void => {
      dispatchAction(ActionType.ADD_USER_PAY, CalculateSumsToPay(bills));
    };

    return {
      title: "Next",
      screenToNavigate: ScreenName.USER_PAY,
      actionToPerform: () => action(),
      shouldDisable: bills.length < 1,
    };
  };

  return (
    <ScreenContainer>
      <OverviewComponent
        sceenToNavigate={ScreenName.BILLING}
        buttonTitle={getButtonTitle()}
        overviewTitle={getOverviewTitle()}
        flatlist={getFlatList()}
        navigateButtonAction={getNavigateButton()}
      />
    </ScreenContainer>
  );
}
