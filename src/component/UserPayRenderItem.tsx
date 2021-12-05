import * as React from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import { Text } from "../component/baseComponents/Text";
import UserPay from "../interfaces/User/IUserPay";
import { borderRadiusWrapper, FlatListItem } from "../styles/SharedStyles";
import styled from "styled-components/native";
import { BaseColors } from "./../styles/Colors";
import { FontSize } from "../enums/Text/FontSize";
import BillPaymentInfo from "../interfaces/Bill/IBillPaymentInfo";
import { PaymentMode, getPaymentModeName } from "../enums/PaymentMode";
import { UserIcon } from "./UserIcon";
import { getHEXColor } from "./../helpers/StyleHelpers";
import Color from "color";
export interface UserPayRenderItemProps {
  item: UserPay;
}

export function UserPayRenderItem(props: UserPayRenderItemProps) {
  const [toggle, setToggle] = React.useState(true);

  const RenderRowView = (billPaymentInfo: BillPaymentInfo[], title: string): JSX.Element => {
    if (billPaymentInfo.length === 0) return <></>;
    return (
      <>
        <Text fontSize={FontSize.S1}>{title}</Text>
        {billPaymentInfo.map((x) => (
          <>
            <FlatListItem.Row>
              <FlatListItem.Column flex={2}>
                <Text>{x.Name}</Text>
              </FlatListItem.Column>
              <FlatListItem.Column>
                <SumToPay>
                  <Text>{x.SumForUserToPay} kr</Text>
                </SumToPay>
              </FlatListItem.Column>
            </FlatListItem.Row>
            <FlatListItem.Row>
              {x.SumToPayUser && (
                <FlatListItem.Column>
                  <UserIcon name={x.UserToPaySumTo!.Name} />
                </FlatListItem.Column>
              )}
            </FlatListItem.Row>
            <Divider />
          </>
        ))}
      </>
    );
  };

  return (
    <TouchableWithoutFeedback onPress={() => setToggle(!toggle)}>
      <View>
        <FlatListItem.Item flex={0}>
          <FlatListItem.Row>
            <FlatListItem.Column flex={2}>
              <Text fontSize={FontSize.S2}>{props.item.Name}</Text>
            </FlatListItem.Column>
            <FlatListItem.Column>
              <SumToPay>
                <Text>{props.item.TotalSumToPay} kr</Text>
              </SumToPay>
            </FlatListItem.Column>
          </FlatListItem.Row>
        </FlatListItem.Item>

        {toggle && props.item.TotalSumToPay > 0 && (
          <>
            <FlatListItem.Item>
              <FlatListItem.Row>
                <FlatListItem.Column>
                  {RenderRowView(props.item.SumToPayIncomeBased, getPaymentModeName(PaymentMode.INCOME_BASED_PAYED))}
                  {RenderRowView(props.item.SumToPayEvenBased, getPaymentModeName(PaymentMode.EVEN_PAYED))}
                </FlatListItem.Column>
              </FlatListItem.Row>
            </FlatListItem.Item>
          </>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const SumToPay = styled.View`
  background: ${BaseColors.SUCCESS} 
  ${borderRadiusWrapper} 
  padding-vertical:6px;
  padding-horizontal:5px;
  min-width:80%;
  align-items:center;
`;

const Divider = styled.View`
  border-bottom-color: ${Color(getHEXColor(BaseColors.WHITE)).darken(0.4).hex()};
  border-bottom-width: 1px;
  margin-vertical: 2px;
`;
