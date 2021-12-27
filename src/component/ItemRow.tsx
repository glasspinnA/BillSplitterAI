import * as React from "react";
import { Fontsize } from "../constant/Fontsize";
import { FlatListItem, FlexDirection, AlignItems } from "../styles/SharedStyles";
import { SumToPay } from "./SumToPay";
import { Text } from "@ui-kitten/components";
import { getPaymentModeName } from "../enums/PaymentMode";
import { IItem } from "../interfaces/IItem";
import { View } from "react-native";

export interface ItemRowProps {
  item: IItem;
}

export function ItemRow(props: ItemRowProps) {
  return (
    <View style={{ flex: 1 }}>
      <FlatListItem.Item>
        <FlatListItem.Row>
          <FlatListItem.Column flex={3}>
            <FlatListItem.Row flexDirection={FlexDirection.COLUMN}>
              <FlatListItem.Column alignSelf={AlignItems.FLEX_START}>
                <Text category={Fontsize.H6}>{props.item?.title}</Text>
              </FlatListItem.Column>
              {props.item.paymentMode && (
                <FlatListItem.Column>
                  <Text>{getPaymentModeName(props.item?.paymentMode)}</Text>
                </FlatListItem.Column>
              )}
            </FlatListItem.Row>
          </FlatListItem.Column>
          {props.item?.sumToPay && (
            <FlatListItem.Column alignSelf={AlignItems.CENTER}>
              <SumToPay sumToPay={props.item?.sumToPay} />
            </FlatListItem.Column>
          )}
        </FlatListItem.Row>
      </FlatListItem.Item>
    </View>
  );
}
