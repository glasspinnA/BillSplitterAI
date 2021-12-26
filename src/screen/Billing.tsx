import * as React from "react";
import { RadioButton } from "../component/baseComponents/RadioButton";
import { ButtonGroup } from "../component/baseComponents/ButtonGroup";
import { CheckBox } from "../component/baseComponents/Checkbox";
import { getPaymentModeName, PaymentMode } from "../enums/PaymentMode";
import User from "../interfaces/User/IUser";
import { GET_EXTRA_BILL } from "../tests/constants/constants";
import { ScreenContainer } from "../component/ScreenContainer";
import { Input, Text, Button } from "@ui-kitten/components";
import { Colors } from "../constant/Colors";
import { Fontsize } from "../constant/Fontsize";
import { Header } from "../component/ScreenHeader";
import { Controller, useForm, ValidateResult } from "react-hook-form";
import { Status } from "../constant/Status";
import { KeyBoardDismiss } from "../component/KeyboardDismiss";
import { useAppContext } from "../context/Consumer";
import { ActionType } from "../context/Context";
import { ScreenName } from "../constant/ScreenName";
import { useNavigation } from "@react-navigation/native";
export interface BillingScreenProps {}

export function BillingScreen(props: BillingScreenProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [selectedRadioIndex, setSelectedRadioIndex] = React.useState<number>(PaymentMode.EVEN_PAYED);
  const [selectedCheckboxes, setSelectedCheckboxes] = React.useState<Map<string, number>>(new Map());
  const { dispatchAction, users } = useAppContext();
  const navigation = useNavigation();

  const onCheckBoxPressed = (user: User, index: number) => {
    const selectedUsers = new Map(selectedCheckboxes);
    selectedUsers.has(user.Id) ? selectedUsers.delete(user.Id) : selectedUsers.set(user.Id, index);
    setSelectedCheckboxes(new Map(selectedUsers));
  };
  const onCreateBillPress = (data: any) => {
    dispatchAction(ActionType.ADD_BILL, GET_EXTRA_BILL);
    navigation.navigate(ScreenName.USER_OVERVIEW as never);
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

  const getCheckboxUsers = (): JSX.Element[] => {
    return users.map((user) => <CheckBox data={user}>{user.Name}</CheckBox>);
  };

  const isAnyCheckboxChecked = (): ValidateResult => selectedCheckboxes.size > 0;

  return (
    <ScreenContainer>
      <KeyBoardDismiss>
        <Header>Create{"\n"}New Bill</Header>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input onChangeText={onChange} value={value} placeholder={"Bill Title"} />
          )}
          name="Name"
        />
        <Text style={{ opacity: errors.Name ? 1 : 0 }} category={Fontsize.LABEL} status={Status.DANGER}>
          Bill name required
        </Text>
        <Text category={Fontsize.S1}>Bill Type</Text>
        <ButtonGroup
          selectedIndex={selectedRadioIndex}
          onChange={(index: PaymentMode) => {
            setSelectedRadioIndex(index);
          }}
        >
          {getPaymentModes()}
        </ButtonGroup>
        <Text category={Fontsize.S1}>Users</Text>
        <Controller
          control={control}
          rules={{
            validate: {
              isChecked: () => isAnyCheckboxChecked(),
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <ButtonGroup
              selectedIndex={Array.from(selectedCheckboxes.values())}
              onChange={(user: User, index) => {
                onCheckBoxPressed(user, index);
              }}
            >
              {getCheckboxUsers()}
            </ButtonGroup>
          )}
          name="User"
        />
        <Text style={{ opacity: errors.User ? 1 : 0 }} category={Fontsize.LABEL} status={Status.DANGER}>
          At least one user is required
        </Text>

        <Button onPress={handleSubmit(onCreateBillPress)}>Create Bill</Button>
      </KeyBoardDismiss>
    </ScreenContainer>
  );
}
