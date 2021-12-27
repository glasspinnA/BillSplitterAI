import * as React from "react";
import { LayoutRectangle, TouchableWithoutFeedback, View } from "react-native";
import UserPay from "../interfaces/User/IUserPay";
import { AlignItems, FlatListItem, FlexDirection } from "../styles/SharedStyles";
import { Icon, IconName } from "./Icon";
import { Rotate } from "./animation/Rotate";
import { Text } from "@ui-kitten/components";
import { SumToPay } from "./SumToPay";
import { Fontsize } from "../constant/Fontsize";
import { AnimatedItemContainer } from "./animation/AnimatedItemContainer";
import { GetItemData } from "../helpers/MappingHelper";

export interface UserPayRenderItemProps {
  item: UserPay;
}

export function UserPayRenderItem(props: UserPayRenderItemProps) {
  const [toggle, setToggle] = React.useState(true);
  const [layout, nSetLayout] = React.useState<LayoutRectangle>();

  const renderRowHeader = () => {
    return (
      <View onLayout={(event) => nSetLayout(event.nativeEvent.layout)}>
        <FlatListItem.Item>
          <FlatListItem.Row flexDirection={FlexDirection.ROW}>
            <FlatListItem.Column flex={3}>
              <Text category={Fontsize.H6}>{props.item.Name}</Text>
            </FlatListItem.Column>
            <FlatListItem.Column>
              <SumToPay sumToPay={props.item.TotalSumToPay} />
            </FlatListItem.Column>
            <FlatListItem.Column alignItems={AlignItems.CENTER}>
              <Rotate isClicked={toggle}>
                <Icon icon={IconName.CHEVRON} />
              </Rotate>
            </FlatListItem.Column>
          </FlatListItem.Row>
        </FlatListItem.Item>
      </View>
    );
  };

  const onItemPressed = () => {
    setToggle(!toggle);
  };

  const renderRowBody = () => {
    const items = [...props.item.SumToPayEvenBased, ...props.item.SumToPayIncomeBased];
    return items.map((x, index) => (
      <AnimatedItemContainer
        item={GetItemData(x.Name, x.SumForUserToPay, x.PaymentMode)}
        index={index}
        toggled={toggle}
        layout={layout}
      />
    ));
  };

  return (
    <>
      <TouchableWithoutFeedback style={{ flex: 1, maxHeight: 300 }} onPress={onItemPressed}>
        <View style={{ flex: 1 }}>
          {renderRowHeader()}
          {props.item.TotalSumToPay > 0 && renderRowBody()}
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}
