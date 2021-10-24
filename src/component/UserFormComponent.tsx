import * as React from "react";
import { BaseColor } from "../enums/BaseColor";
import { FontSize } from "../enums/Text/FontSize";
import { FontWeight } from "../enums/Text/FontWeight";
import { useForm, Controller } from "react-hook-form";
import { Text } from "./baseComponents/Text";
import { TextInput } from "./baseComponents/TextInput";
import { Button } from "./baseComponents/Button";

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
            <TextInput
              fontWeight={FontWeight.EXTRA_BOLD}
              fontSize={FontSize.H4}
              placeholder={x.Placeholder}
              text={value}
              onChangeText={onChange}
            />
          )}
          name={x.Name}
          defaultValue=""
        />
        {errors[x.Name] && <Text color={BaseColor.DANGER}>{x.ErrorMessage}</Text>}
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
      <Button color={BaseColor.PRIMARY} onPress={handleSubmit(onPress)}>
        Hello
      </Button>
      {props.canProcced && (
        <Button color={BaseColor.PRIMARY} onPress={null}>
          Hello
        </Button>
      )}
    </>
  );
}
