import * as React from "react";
import { useForm } from "react-hook-form";
import { View } from "react-native";
import { AddButton } from "../AddButton";
import { FormContent } from "../../interfaces/IFormData";
import { FormElement } from "./FormElement";
import { CustomFormProvider } from "./FormProvider";
export interface UserFormProps {
  data: FormContent[];
  onUserSubmit: (data: any) => void;
}
export function UserForm(props: UserFormProps) {
  const methods = useForm();

  const onPress = (data: any) => {
    methods.reset();
    props.onUserSubmit(data);
  };

  return (
    <View style={{ flex: 1, alignContent: "center" }}>
      <CustomFormProvider form={methods}>
        <View
          style={{
            flex: 2,
            justifyContent: "flex-start",
          }}
        >
          <FormElement data={props.data} />
        </View>
        <View style={{ justifyContent: "center", flex: 1 }}>
          <AddButton onPress={methods.handleSubmit(onPress)}>Add User</AddButton>
        </View>
      </CustomFormProvider>
    </View>
  );
}
