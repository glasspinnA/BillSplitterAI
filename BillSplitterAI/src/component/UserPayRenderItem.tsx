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
import { AnimatedRowContainer } from "./animation/AnimatedRowContainer";

export interface UserPayRenderItemProps {
  item: UserPay;
}

export function UserPayRenderItem(props: UserPayRenderItemProps) {
  const [shouldToggleState, setToggleState] = React.useState(true);
  const [layout, nSetLayout] = React.useState<LayoutRectangle>();

  const renderRowHeader = () => {
    return (
      <View onLayout={(event) => nSetLayout(event.nativeEvent.layout)}>
        <FlatListItem.Item>
          <FlatListItem.Row flexDirection={FlexDirection.ROW}>
            <FlatListItem.Column flex={3}>
              <Text category={Fontsize.S1}>{props.item.Name}</Text>
            </FlatListItem.Column>
            <FlatListItem.Column>
              <SumToPay sumToPay={props.item.TotalSumToPay} />
            </FlatListItem.Column>
            <FlatListItem.Column alignItems={AlignItems.CENTER}>
              <Rotate isClicked={shouldToggleState}>
                <Icon icon={IconName.CHEVRON} />
              </Rotate>
            </FlatListItem.Column>
          </FlatListItem.Row>
        </FlatListItem.Item>
      </View>
    );
  };

  const renderRowBody = () => {
    return getItems().map((x, index) => (
      <AnimatedItemContainer
        item={GetItemData(x.Id, x.Name, x.SumForUserToPay, x.PaymentMode)}
        index={index}
        toggled={shouldToggleState}
        layout={layout}
      />
    ));
  };

  const getItems = () => {
    return [...props.item.SumToPayEvenBased, ...props.item.SumToPayIncomeBased];
  };

  return (
    <TouchableWithoutFeedback onPress={() => setToggleState(!shouldToggleState)}>
      <View>
        <AnimatedRowContainer shouldToggleState={shouldToggleState} nbrItems={getItems().length}>
          {renderRowHeader()}
          {props.item.TotalSumToPay > 0 && renderRowBody()}
        </AnimatedRowContainer>
      </View>
    </TouchableWithoutFeedback>
  );
}
