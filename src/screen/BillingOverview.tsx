import * as React from "react";
import { ListRenderItemInfo } from "react-native";
import { Flatlist } from "../component/baseComponents/Flatlist";
import Bill from "../interfaces/Bill/IBill";
import { GetDummy_Bills } from "../tests/constants/constants";
import { ScreenContainer } from "../component/ScreenContainer";
import { ScreenName } from "../constant/ScreenName";
import { ItemRow } from "../component/ItemRow";
import { GetItemData } from "../helpers/MappingHelper";
import { OverviewComponent } from "./OverviewComponent";

export interface BillingOverViewScreenProps {}

export function BillingOverViewScreen(props: BillingOverViewScreenProps) {
  const renderItem = ({ item }: ListRenderItemInfo<Bill>) => (
    <ItemRow item={GetItemData(item.Name, item.PaymentMode, item.Price)} />
  );
  const getFlatList = (): JSX.Element => (
    <Flatlist<Bill> items={GetDummy_Bills()} keyExtractor={(item: Bill) => item.Id} renderItem={renderItem} />
  );
  const getOverviewTitle = (): string => "Billing\nOverview";
  const getButtonTitle = (): string => "Add Billing";
  return (
    <ScreenContainer>
      <OverviewComponent
        sceenToNavigate={ScreenName.BILLING}
        buttonTitle={getButtonTitle()}
        overviewTitle={getOverviewTitle()}
        flatlist={getFlatList()}
      />
    </ScreenContainer>
  );
}
