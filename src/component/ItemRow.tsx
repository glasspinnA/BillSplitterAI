import * as React from "react";
import { Fontsize } from "../constant/Fontsize";
import {
  FlatListItem,
  FlexDirection,
  AlignItems,
} from "../styles/SharedStyles";
import { SumToPay } from "./SumToPay";
import { Text } from "@ui-kitten/components";
import { getPaymentModeName } from "../enums/PaymentMode";
import { IItem } from "../interfaces/IItem";

export interface ItemRowProps {
  item: IItem;
}

export function ItemRow(props: ItemRowProps) {
  return (
    <FlatListItem.Item>
      <FlatListItem.Row>
        <FlatListItem.Column flex={3}>
          <FlatListItem.Row flexDirection={FlexDirection.COLUMN}>
            <FlatListItem.Column alignSelf={AlignItems.FLEX_START}>
              <Text category={Fontsize.H6}>{props.item?.title}</Text>
            </FlatListItem.Column>
            <FlatListItem.Column>
              <Text>{getPaymentModeName(props.item?.paymentMode)}</Text>
            </FlatListItem.Column>
          </FlatListItem.Row>
        </FlatListItem.Column>
        <FlatListItem.Column alignSelf={AlignItems.CENTER}>
          <SumToPay sumToPay={props.item?.sumToPay} />
        </FlatListItem.Column>
      </FlatListItem.Row>
    </FlatListItem.Item>
  );
}
