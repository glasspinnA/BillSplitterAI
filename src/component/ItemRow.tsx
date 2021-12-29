import * as React from "react";
import { Fontsize } from "../constant/Fontsize";
import { FlatListItem, FlexDirection, AlignItems } from "../styles/SharedStyles";
import { SumToPay } from "./SumToPay";
import { Text } from "@ui-kitten/components";
import { getPaymentModeName } from "../enums/PaymentMode";
import { IItem } from "../interfaces/IItem";
import { View } from "react-native";
import { Menu, MenuOptions, MenuOption, MenuTrigger } from "react-native-popup-menu";
import { Icon, IconName } from "./Icon";
import { Colors } from "../constant/Colors";

export interface ItemRowProps {
  item: IItem;
}

export function ItemRow(props: ItemRowProps) {
  const test = () => {
    return (
      <View>
        <Icon icon={IconName.PLUS} />
      </View>
    );
  };

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
          <FlatListItem.Column style={{ alignItems: "flex-end" }}>
            <Menu>
              <MenuTrigger>
                <Icon icon={IconName.CONTEXT_MENU} />
              </MenuTrigger>
              <MenuOptions>
                <MenuOption style={{ backgroundColor: Colors.BACKGROUND.value }} onSelect={() => alert(`Save`)}>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 1 }}>
                      <Icon icon={IconName.TRASH} />
                    </View>
                    <View style={{ flex: 2 }}>
                      <Text>Delete</Text>
                    </View>
                  </View>
                </MenuOption>
              </MenuOptions>
            </Menu>
          </FlatListItem.Column>
        </FlatListItem.Row>
      </FlatListItem.Item>
    </View>
  );
}
