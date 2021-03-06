import * as React from "react";
import { RadioButton } from "../../../SharedComponent/src/baseComponents/RadioButton";
import { ButtonGroup } from "../../../SharedComponent/src/baseComponents/ButtonGroup";
import { CheckBox } from "../../../SharedComponent/src/baseComponents/Checkbox";
import { getPaymentModeName, PaymentMode } from "../enums/PaymentMode";
import User from "../interfaces/User/IUser";
import { ScreenContainer } from "../../../SharedComponent/src/ScreenContainer";
import { Text } from "@ui-kitten/components";
import { Colors } from "../../../SharedComponent/src/constant/Colors";
import { Fontsize } from "../../../SharedComponent/src/constant/Fontsize";
import { Header } from "../../../SharedComponent/src/ScreenHeader";
import { Controller, useForm, ValidateResult } from "react-hook-form";
import { Status } from "../../../SharedComponent/src/constant/Status";
import { KeyBoardDismiss } from "../../../SharedComponent/src/KeyboardDismiss";
import { useAppContext } from "../context/Consumer";
import { ActionType } from "../context/Context";
import { ScreenName } from "../constant/ScreenName";
import { useNavigation } from "@react-navigation/native";
import { SelectedUser } from "../interfaces/User/ISelectedUser";
import { GetBillData } from "../helpers/MappingHelper";
import { FormElement } from "../component/form/FormElement";
import { FormContent } from "../interfaces/IFormData";
import { CustomFormProvider } from "../component/form/FormProvider";
import { AddButton } from "../component/AddButton";
import { View } from "react-native";
export interface BillingScreenProps {}

export function BillingScreen(props: BillingScreenProps) {
  const methods = useForm();
  const [selectedPaymentMode, setSelectedPaymentMode] = React.useState<number>(PaymentMode.EVEN_PAYED);
  const [selectedPayers, setSelectedPayers] = React.useState<Map<string, SelectedUser>>(new Map());
  const { dispatchAction, users } = useAppContext();
  const navigation = useNavigation();

  const onCheckBoxPressed = (user: User, index: number) => {
    const selectedUsers = new Map(selectedPayers);
    selectedUsers.has(user.Id)
      ? selectedUsers.delete(user.Id)
      : selectedUsers.set(user.Id, { user: user, index: index } as SelectedUser);
    setSelectedPayers(new Map(selectedUsers));
  };
  const onCreateBillPress = (data: any) => {
    dispatchAction(
      ActionType.ADD_BILL,
      GetBillData(data.Name, parseInt(data.Price), selectedPaymentMode, selectedPayers)
    );
    methods.reset();
    navigation.navigate(ScreenName.BILLING_OVERVIEW as never);
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
  const isAnyCheckboxChecked = (): ValidateResult => selectedPayers.size > 0;
  const getFormData = (): FormContent[] => {
    return [
      { Text: "Bill Name", Placeholder: "Bill Name", ErrorMessage: "Bill name is required", Name: "Name" },
      { Text: "Price", Placeholder: "Sum To Pay", ErrorMessage: "Sum is required", Name: "Price", Numeric: true },
    ];
  };

  return (
    <ScreenContainer>
      <KeyBoardDismiss>
        <Header>Create{"\n"}New Bill</Header>
        <CustomFormProvider form={methods}>
          <View style={{ flex: 3 }}>
            <FormElement data={getFormData()} />
            <Text category={Fontsize.S1}>Bill Type</Text>
            <ButtonGroup
              selectedIndex={selectedPaymentMode}
              onChange={(index: PaymentMode) => {
                setSelectedPaymentMode(index);
              }}
            >
              {getPaymentModes()}
            </ButtonGroup>
            <Text category={Fontsize.S1}>Users</Text>
            <Controller
              control={methods.control}
              rules={{
                validate: {
                  isChecked: () => isAnyCheckboxChecked(),
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <ButtonGroup
                  selectedIndex={Array.from(selectedPayers.values()).map((x) => x.index)}
                  onChange={(user: User, index: number) => {
                    onCheckBoxPressed(user, index);
                  }}
                >
                  {getCheckboxUsers()}
                </ButtonGroup>
              )}
              name="User"
            />
            <Text
              style={{ opacity: methods.formState.errors.User ? 1 : 0 }}
              category={Fontsize.LABEL}
              status={Status.DANGER}
            >
              At least two selected user is required
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <AddButton onPress={methods.handleSubmit(onCreateBillPress)}>Create Bill</AddButton>
          </View>
        </CustomFormProvider>
      </KeyBoardDismiss>
    </ScreenContainer>
  );
}
