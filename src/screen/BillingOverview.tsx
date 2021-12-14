import * as React from "react";
import { ListRenderItemInfo } from "react-native";
import { Flatlist } from "../component/baseComponents/Flatlist";
import Bill from "../interfaces/Bill/IBill";
import { GetDummy_Bills } from "../tests/constants/constants";
import { ScreenContainer } from "../component/ScreenContainer";
import { ScreenName } from "../constant/ScreenName";
import { useNavigation } from "@react-navigation/native";
import { AddButton } from "../component/AddButton";
import { ItemRow } from "../component/ItemRow";
import { GetItemData } from "../helpers/MappingHelper";
import { Header } from "../component/ScreenHeader";

export interface BillingOverViewScreenProps {}

export function BillingOverViewScreen(props: BillingOverViewScreenProps) {
  const navigation = useNavigation();
  const renderItem = ({ item }: ListRenderItemInfo<Bill>) => {
    return <ItemRow item={GetItemData(item.Name, item.PaymentMode, item.Price)} />;
  };
  const navigate = () => {
    navigation.navigate(ScreenName.BILLING as never);
  };
  return (
    <ScreenContainer>
      <Header>Billing {"\n"}Overview</Header>
      <Flatlist<Bill> items={GetDummy_Bills()} keyExtractor={(item: Bill) => item.Id} renderItem={renderItem} />
      <AddButton onPress={navigate}>Add Billing</AddButton>
    </ScreenContainer>
  );
}
