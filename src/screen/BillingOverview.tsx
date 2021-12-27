import * as React from "react";
import { ListRenderItemInfo } from "react-native";
import { Flatlist } from "../component/baseComponents/Flatlist";
import Bill from "../interfaces/Bill/IBill";
import { ScreenContainer } from "../component/ScreenContainer";
import { ScreenName } from "../constant/ScreenName";
import { ItemRow } from "../component/ItemRow";
import { GetItemData } from "../helpers/MappingHelper";
import { INavigateActionButton, OverviewComponent } from "./OverviewComponent";
import { useAppContext } from "../context/Consumer";
import { ActionType } from "../context/Context";
import { CalculateSumsToPay } from "../CalculateBill";
import { GetDummy_Bills, GetDummy_UserPay } from "../tests/constants/constants";

export interface BillingOverViewScreenProps {}

export function BillingOverViewScreen(props: BillingOverViewScreenProps) {
  const { bills, dispatchAction } = useAppContext();
  const renderItem = ({ item }: ListRenderItemInfo<Bill>) => (
    <ItemRow item={GetItemData(item.Name, item.Price, item.PaymentMode)} />
  );
  const getFlatList = (): JSX.Element => (
    <Flatlist<Bill> items={bills} keyExtractor={(item: Bill) => item.Id} renderItem={renderItem} />
  );
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
