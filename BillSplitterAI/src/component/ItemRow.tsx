import * as React from "react";
import { Fontsize } from "../../../SharedComponent/src/constant/Fontsize";
import { FlatListItem, FlexDirection, AlignItems } from "../../../SharedComponent/src/styles/SharedStyles";
import { SumToPay } from "./SumToPay";
import { Text } from "@ui-kitten/components";
import { getPaymentModeName } from "../enums/PaymentMode";
import { IItem } from "../interfaces/IItem";
import { View, TouchableWithoutFeedback } from "react-native";
import { ContextMenu, IContextMenuAction } from "./ContextMenu";

export interface ItemRowProps {
  item: IItem;
  action?: IContextMenuAction;
}

export function ItemRow(props: ItemRowProps) {
  const [isMenuPressed, setMenuPressed] = React.useState(false);
  const onMenuPressed = () => setMenuPressed(!isMenuPressed);

  return (
    <View style={{ flex: 1 }}>
      <FlatListItem.Item>
        <FlatListItem.Row>
          <FlatListItem.Column flex={3}>
            <FlatListItem.Row flexDirection={FlexDirection.COLUMN}>
              <FlatListItem.Column alignSelf={AlignItems.FLEX_START}>
                <Text category={Fontsize.S1}>{props.item?.title}</Text>
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
          {props.action && (
            <FlatListItem.Column style={{ alignItems: "flex-end" }}>
              <TouchableWithoutFeedback onPress={onMenuPressed}>
                <ContextMenu action={props.action} isMenuPressed={isMenuPressed} />
              </TouchableWithoutFeedback>
            </FlatListItem.Column>
          )}
        </FlatListItem.Row>
      </FlatListItem.Item>
    </View>
  );
}
