import * as React from "react";
import { RadioButton } from "../component/baseComponents/RadioButton";
import { ButtonGroup } from "../component/baseComponents/ButtonGroup";
import { CheckBox } from "../component/baseComponents/Checkbox";
import { getPaymentModeName, PaymentMode } from "../enums/PaymentMode";
import User from "../interfaces/User/IUser";
import { USERS } from "../tests/constants/constants";
import { ScreenContainer } from "../component/ScreenContainer";
import { Input, Text, Button, useTheme } from "@ui-kitten/components";
import { Colors } from "../constant/Colors";
import { Fontsize } from "../constant/Fontsize";
export interface BillingScreenProps {}

export function BillingScreen(props: BillingScreenProps) {
  const theme = useTheme();

  const [selectedRadioIndex, setSelectedRadioIndex] = React.useState<number>(
    PaymentMode.EVEN_PAYED
  );
  const [selectedCheckboxes, setSelectedCheckboxes] = React.useState<
    Map<string, number>
  >(
    new Map()
      .set("b2ff5870-8aab-44a2-9f40-3b99ecc3a739", 0)
      .set("efcc590d-42c3-4dda-90be-3056fe3495d8", 1)
  );

  const onChangeText = (text: string) => {};
  const onRadioChange = (selectedIndex: number) => {
    console.log("Selected index" + selectedIndex);

    setSelectedRadioIndex(selectedIndex);
  };
  const onCheckBoxPressed = (user: User, index: number) => {
    const m = new Map(selectedCheckboxes);
    m.has(user.Id) ? m.delete(user.Id) : m.set(user.Id, index);
    setSelectedCheckboxes(new Map(m));
  };
  const onCreateBillPress = () => {
    console.log(selectedRadioIndex);
  };
  const getPaymentModes = () => {
    const elments: JSX.Element[] = [];

    for (const paymentMode in PaymentMode) {
      if (!isNaN(Number(paymentMode))) {
        elments.push(
          <RadioButton data={paymentMode} color={Colors.PRIMARY.value}>
            {getPaymentModeName(Number(paymentMode))}
          </RadioButton>
        );
      }
    }
    return elments;
  };
  return (
    <ScreenContainer>
      <Text category={Fontsize.H1}>Create{"\n"}New Bill</Text>
      <Input onChangeText={onChangeText} placeholder={"Bill Title"} />
      <Text category={Fontsize.S1}>Bill Type</Text>
      <ButtonGroup
        selectedIndex={selectedRadioIndex}
        onChange={(index: PaymentMode) => {
          onRadioChange(index);
        }}
      >
        {getPaymentModes()}
      </ButtonGroup>
      <Text category={Fontsize.S1}>Users</Text>
      <ButtonGroup
        selectedIndex={Array.from(selectedCheckboxes.values())}
        onChange={(user: User, index) => {
          onCheckBoxPressed(user, index);
        }}
      >
        <CheckBox data={USERS[0]}>Hello</CheckBox>
        <CheckBox data={USERS[1]}>Bye</CheckBox>
      </ButtonGroup>
      <Button onPress={onCreateBillPress}>Create Bill</Button>
    </ScreenContainer>
  );
}
