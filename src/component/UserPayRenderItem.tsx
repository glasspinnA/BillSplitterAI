import * as React from "react";
import {
  Dimensions,
  TouchableWithoutFeedback,
  View,
  Animated,
} from "react-native";
import UserPay from "../interfaces/User/IUserPay";
import {
  AlignItems,
  borderRadiusWrapper,
  FlatListItem,
} from "../styles/SharedStyles";
import styled from "styled-components/native";
import BillPaymentInfo from "../interfaces/Bill/IBillPaymentInfo";
import { PaymentMode, getPaymentModeName } from "../enums/PaymentMode";
import { Icon, IconName } from "./Icon";
import { Rotate } from "./animation/Rotate";
import { Divider, Text } from "@ui-kitten/components";
import { Colors } from "../constant/Colors";
import { SumToPay } from "./SumToPay";

export interface UserPayRenderItemProps {
  item: UserPay;
}

export function UserPayRenderItem(props: UserPayRenderItemProps) {
  const [toggle, setToggle] = React.useState(true);
  const { height, width } = Dimensions.get("window");

  const renderRowView = (
    billPaymentInfo: BillPaymentInfo[],
    title: string
  ): JSX.Element => {
    if (billPaymentInfo.length === 0) return <></>;
    return (
      <>
        <Text>{title}</Text>
        {billPaymentInfo.map((x) => (
          <>
            <View>
              <FlatListItem.Row>
                <FlatListItem.Column flex={2}>
                  <Text>{x.Name}</Text>
                </FlatListItem.Column>
                <FlatListItem.Column>
                  {/* <SumToPay>
                  <Text>{x.SumForUserToPay} kr</Text>
                </SumToPay> */}
                </FlatListItem.Column>
              </FlatListItem.Row>
              <FlatListItem.Row>
                {x.SumToPayUser && (
                  <FlatListItem.Column>
                    {/* <UserIcon name={x.UserToPaySumTo!.Name} /> */}
                  </FlatListItem.Column>
                )}
              </FlatListItem.Row>
              <Divider />
            </View>
          </>
        ))}
      </>
    );
  };

  const renderRowHeader = () => {
    return (
      <FlatListItem.Item flex={0}>
        <FlatListItem.Row>
          <FlatListItem.Column flex={3}>
            <Text>{props.item.Name}</Text>
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
    );
  };

  const renderRowBody = () => {
    return (
      <AnimatedItem style={[{ height: interpolatedHeight }]}>
        <FlatListItem.Row>
          <AnimatedColumn style={[{ opacity: opacity }]}>
            {renderRowView(
              props.item.SumToPayIncomeBased,
              getPaymentModeName(PaymentMode.INCOME_BASED_PAYED)
            )}
            {renderRowView(
              props.item.SumToPayEvenBased,
              getPaymentModeName(PaymentMode.EVEN_PAYED)
            )}
          </AnimatedColumn>
        </FlatListItem.Row>
      </AnimatedItem>
    );
  };
  const [animatedHeight, setAnimatedHeight] = React.useState(
    new Animated.Value(0)
  );
  const [opacity, setOpacity] = React.useState(new Animated.Value(0));

  const animationDuration = 950;

  const onItemPressed = () => {
    setToggle(!toggle);
    console.log(toggle);
    if (!toggle) {
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 700,
          useNativeDriver: false,
        } as Animated.TimingAnimationConfig),
      ]).start();
      Animated.sequence([
        Animated.timing(animatedHeight, {
          toValue: 1,
          duration: animationDuration,
          useNativeDriver: false,
        } as Animated.TimingAnimationConfig),
      ]).start();
    } else {
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 0,
          duration: animationDuration + 20,
          useNativeDriver: false,
        } as Animated.TimingAnimationConfig),
      ]).start(() => console.log("done"));
      Animated.sequence([
        Animated.timing(animatedHeight, {
          toValue: 0,
          duration: animationDuration,
          useNativeDriver: false,
        } as Animated.TimingAnimationConfig),
      ]).start(() => console.log("done"));
    }
  };
  const interpolatedHeight = animatedHeight.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1000],
  });
  return (
    <>
      <TouchableWithoutFeedback
        style={{ flex: 1, maxHeight: 300 }}
        onPress={onItemPressed}
      >
        <View style={{ flex: 1 }}>
          {renderRowHeader()}
          {props.item.TotalSumToPay > 0 && renderRowBody()}
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}

const AnimatedColumn = styled(Animated.View)`
  flex: 1;
  align-self: center;
`;

const AnimatedItem = styled(Animated.View)`
  background: ${Colors.BASIC_COLOR.value} 
  ${borderRadiusWrapper} 
  margin-vertical:10px;
  flex: 1;
`;
