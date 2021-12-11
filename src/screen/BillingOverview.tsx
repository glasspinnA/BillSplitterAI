import * as React from "react";
import { View, ListRenderItemInfo } from "react-native";
import { Flatlist } from "../component/baseComponents/Flatlist";
import { Button, Text } from "@ui-kitten/components";
import Bill from "../interfaces/Bill/IBill";
import {
  AlignItems,
  FlatListItem,
  FlexDirection,
} from "../styles/SharedStyles";
import { GetDummy_Bills } from "../tests/constants/constants";
import { getPaymentModeName } from "../enums/PaymentMode";
import { ScreenContainer } from "../component/ScreenContainer";
import { Fontsize } from "../constant/Fontsize";
import { SumToPay } from "../component/SumToPay";
import { ScreenName } from "../constant/ScreenName";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "../component/Icon";
import { AddButton } from "../component/AddButton";

export interface BillingOverViewScreenProps {}

export function BillingOverViewScreen(props: BillingOverViewScreenProps) {
  // const Future = (params) => {
  //   <FlatListItem.Row>
  //         <Text>👤</Text>
  //         {item.Payers.map((x) => (
  //           <UserIcon name={x.Name} />
  //         ))}
  //       </FlatListItem.Row>
  //       {item.PaidByUser && (
  //         <FlatListItem.Row>
  //           <Text>Paid By</Text>
  //           <UserIcon name={item.PaidByUser.Name} />
  //         </FlatListItem.Row>
  //       )}
  // }
  const renderItem = ({ item }: ListRenderItemInfo<Bill>) => {
    return (
      <FlatListItem.Item>
        <FlatListItem.Row>
          <FlatListItem.Column flex={3}>
            <FlatListItem.Row flexDirection={FlexDirection.COLUMN}>
              <FlatListItem.Column>
                <Text category={Fontsize.H6}>{item.Name}</Text>
              </FlatListItem.Column>
              <FlatListItem.Column>
                <Text>{getPaymentModeName(item.PaymentMode)}</Text>
              </FlatListItem.Column>
            </FlatListItem.Row>
          </FlatListItem.Column>
          <FlatListItem.Column alignSelf={AlignItems.CENTER}>
            <SumToPay sumToPay={item.Price} />
          </FlatListItem.Column>
        </FlatListItem.Row>
      </FlatListItem.Item>
    );
  };

  const navigation = useNavigation();
  const navigate = () => {
    navigation.navigate(ScreenName.BILLING as never);
  };

  return (
    <ScreenContainer>
      <Text category={Fontsize.H1}>Billing {"\n"}Overview</Text>
      <Flatlist<Bill>
        items={GetDummy_Bills()}
        keyExtractor={(item: Bill) => item.Id}
        renderItem={renderItem}
      />
      <AddButton onPress={navigate}>Add Billing</AddButton>
    </ScreenContainer>
  );
}
