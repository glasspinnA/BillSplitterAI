import * as React from "react";
import { Button } from "../component/baseComponents/Button";
import { RadioButton } from "../component/baseComponents/RadioButton";
import { ButtonGroup } from "../component/baseComponents/ButtonGroup";
import { CheckBox } from "../component/baseComponents/Checkbox";
import { Text } from "../component/baseComponents/Text";
import { TextInput } from "../component/baseComponents/TextInput";
import { BaseColor } from "../enums/BaseColor";
import { getPaymentModeName, PaymentMode } from "../enums/PaymentMode";
import { FontSize } from "../enums/Text/FontSize";
import User from "../interfaces/User/IUser";
import { USERS } from "../tests/constants/constants";
export interface BillingScreenProps {}

export function BillingScreen(props: BillingScreenProps) {
  const [selectedRadioIndex, setSelectedRadioIndex] = React.useState<number>(PaymentMode.EVEN_PAYED);
  const [selectedCheckboxes, setSelectedCheckboxes] = React.useState<Map<string, number>>(
    new Map().set("b2ff5870-8aab-44a2-9f40-3b99ecc3a739", 0).set("efcc590d-42c3-4dda-90be-3056fe3495d8", 1)
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
          <RadioButton data={paymentMode} color={BaseColor.PRIMARY}>
            {getPaymentModeName(Number(paymentMode))}
          </RadioButton>
        );
      }
    }
    return elments;
  };
  return (
    <>
      <Text fontSize={FontSize.H2}>Create{"\n"}New Bill</Text>
      <TextInput fontSize={FontSize.S1} onChangeText={onChangeText} placeholder={"Bill Title"} showBackground={true} />
      <Text>Bill Type</Text>
      <ButtonGroup
        selectedIndex={selectedRadioIndex}
        onChange={(index: PaymentMode) => {
          onRadioChange(index);
        }}
      >
        {getPaymentModes()}
      </ButtonGroup>
      <Text>Users</Text>
      <ButtonGroup
        selectedIndex={Array.from(selectedCheckboxes.values())}
        onChange={(user: User, index) => {
          onCheckBoxPressed(user, index);
        }}
      >
        <CheckBox data={USERS[0]}>Hello</CheckBox>
        <CheckBox data={USERS[1]}>Bye</CheckBox>
      </ButtonGroup>
      <Button onPress={onCreateBillPress} color={BaseColor.PRIMARY}>
        Create Bill
      </Button>
    </>
  );
}
