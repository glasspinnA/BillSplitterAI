import * as React from "react";
import { View, ListRenderItemInfo } from "react-native";
import { Flatlist } from "../component/baseComponents/Flatlist";
import { Text } from '@ui-kitten/components';
import Bill from "../interfaces/Bill/IBill";
import { FlatListItem } from "../styles/SharedStyles";
import { GetDummy_Bills } from "../tests/constants/constants";
import { getPaymentModeName } from "../enums/PaymentMode";
import { UserIcon } from "../component/UserIcon";

export interface BillingOverViewScreenProps {}

export function BillingOverViewScreen(props: BillingOverViewScreenProps) {
  const renderItem = ({ item }: ListRenderItemInfo<Bill>) => {
    return (
      <FlatListItem.Item>
        <FlatListItem.Row>
          <FlatListItem.Column flex={3}>
            <Text>{item.Name}</Text>
          </FlatListItem.Column>
          <FlatListItem.Column>
            <Text>{item.Price} kr</Text>
          </FlatListItem.Column>
        </FlatListItem.Row>
        <FlatListItem.Row>
          <FlatListItem.Column>
            <Text>{getPaymentModeName(item.PaymentMode)}</Text>
          </FlatListItem.Column>
        </FlatListItem.Row>
        <FlatListItem.Row>
          <Text>👤</Text>
          {item.Payers.map((x) => (
            <UserIcon name={x.Name} />
          ))}
        </FlatListItem.Row>
        {item.PaidByUser && (
          <FlatListItem.Row>
            <Text>Paid By</Text>
            <UserIcon name={item.PaidByUser.Name} />
          </FlatListItem.Row>
        )}
      </FlatListItem.Item>
    );
  };
  return <Flatlist<Bill> items={GetDummy_Bills()} keyExtractor={(item: Bill) => item.Id} renderItem={renderItem} />;
}
