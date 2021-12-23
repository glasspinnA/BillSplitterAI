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
import { Header } from "../component/ScreenHeader";
import { Controller, useForm } from "react-hook-form";
import { Status } from "../constant/Status";
import { KeyBoardDismiss } from "../component/KeyboardDismiss";
export interface BillingScreenProps {}

export function BillingScreen(props: BillingScreenProps) {
  const theme = useTheme();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [selectedRadioIndex, setSelectedRadioIndex] = React.useState<number>(PaymentMode.EVEN_PAYED);
  const [selectedCheckboxes, setSelectedCheckboxes] = React.useState<Map<string, number>>(new Map());

  const onChangeText = (text: string) => {};
  const onRadioChange = (selectedIndex: number) => {
    setSelectedRadioIndex(selectedIndex);
  };
  const onCheckBoxPressed = (user: User, index: number) => {
    const m = new Map(selectedCheckboxes);
    m.has(user.Id) ? m.delete(user.Id) : m.set(user.Id, index);
    setSelectedCheckboxes(new Map(m));
  };
  const onCreateBillPress = (data: any) => {
    console.log("hessllo");

    console.log(data);
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
      <KeyBoardDismiss>
        <Header>Create{"\n"}New Bill</Header>
        <Controller
          control={control}
          rules={{}}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input onChangeText={onChangeText} placeholder={"Bill Title"} />
          )}
          name={"x.Name1"}
          defaultValue=""
        />
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
        <Controller
          control={control}
          rules={{}}
          render={({ field: { onChange, onBlur, value } }) => (
            <ButtonGroup
              selectedIndex={Array.from(selectedCheckboxes.values())}
              onChange={(user: User, index) => {
                onCheckBoxPressed(user, index);
              }}
            >
              <CheckBox data={USERS[0]}>Hello</CheckBox>
              <CheckBox data={USERS[1]}>Bye</CheckBox>
            </ButtonGroup>
          )}
          name={"x.Name"}
          defaultValue=""
        />
        <Text style={{ opacity: errors["x.Name"] ? 1 : 0 }} category={Fontsize.LABEL} status={Status.DANGER}>
          hello
        </Text>

        <Button onPress={handleSubmit(onCreateBillPress)}>Create Bill</Button>
      </KeyBoardDismiss>
    </ScreenContainer>
  );
}
