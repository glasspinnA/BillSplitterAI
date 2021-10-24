import * as React from "react";
import { Text } from "../component/Text";
import { TextInput } from "../component/TextInput";
import { Button } from "../component/Button";
import { FontSize } from "../enums/Text/FontSize";
import { FontWeight } from "../enums/Text/FontWeight";

import { BaseColor } from "../enums/BaseColor";
import { useForm, Controller } from "react-hook-form";

export interface CreateUserScreenProps {}
interface ICreateUserForm {
  name: string;
  email: string;
}
export function CreateUserScreen(props: CreateUserScreenProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateUserForm>();
  const onSubmit = (data: any) => console.log(data);

  return (
    <>
      <Text fontSize={FontSize.P1}>First & Last names</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            fontWeight={FontWeight.EXTRA_BOLD}
            fontSize={FontSize.H3}
            placeholder="hello"
            text={value}
            onChangeText={onChange}
          />
        )}
        name="name"
        defaultValue=""
      />
      {errors.name && <Text color={BaseColor.DANGER}>This is required.</Text>}
      <Text fontSize={FontSize.P1}>Email</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            fontSize={FontSize.H3}
            fontWeight={FontWeight.EXTRA_BOLD}
            placeholder="hello"
            text={value}
            onChangeText={onChange}
          />
        )}
        name="email"
        defaultValue=""
      />
      {errors.email && <Text color={BaseColor.DANGER}>This is required.</Text>}
      <Button color={BaseColor.PRIMARY} onPress={handleSubmit(onSubmit)}>
        Hello
      </Button>
    </>
  );
}
