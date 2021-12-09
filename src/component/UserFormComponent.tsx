import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { Input, Text, Button } from "@ui-kitten/components";
import { Status } from "./../constant/Status";
export interface UserFormProps {
  data: t[];
  onUserSubmit: (data: any) => void;
  canProcced: boolean;
}
export interface t {
  Text: string;
  Placeholder: string;
  ErrorMessage: string;
  Name: string;
}

export function UserForm(props: UserFormProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const elements = props.data.map((x: t) => {
    return (
      <>
        <Text>{x.Text.toUpperCase()}</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input placeholder={x.Placeholder} value={value} onChangeText={onChange} />
          )}
          name={x.Name}
          defaultValue=""
        />
        {errors[x.Name] && <Text status={Status.DANGER}>{x.ErrorMessage}</Text>}
      </>
    );
  });

  const onPress = (data: any) => {
    reset();
    props.onUserSubmit(data);
  };

  return (
    <>
      {elements}
      <Button onPress={handleSubmit(onPress)}>Hello</Button>
      {props.canProcced && <Button onPress={() => null}>Hello</Button>}
    </>
  );
}
