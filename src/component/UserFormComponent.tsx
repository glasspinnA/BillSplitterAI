import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { Input, Text, Button } from "@ui-kitten/components";
import { Status } from "./../constant/Status";
import { Fontsize } from "../constant/Fontsize";
import { View } from "react-native";
import { Icon, IconName } from "./Icon";
export interface UserFormProps {
  data: t[];
  onUserSubmit: (data: any) => void;
}
export interface t {
  Text: string;
  Placeholder: string;
  ErrorMessage: string;
  Name: string;
  Numeric: boolean;
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
        <Text category={Fontsize.H1}>{x.Text.toUpperCase()}</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder={x.Placeholder}
              value={value}
              onChangeText={onChange}
              keyboardType={x.Numeric ? "numeric" : "default"}
            />
          )}
          name={x.Name}
          defaultValue=""
        />
        <Text
          style={{ opacity: errors[x.Name] ? 1 : 0 }}
          category={Fontsize.LABEL}
          status={Status.DANGER}
        >
          {x.ErrorMessage}
        </Text>
      </>
    );
  });

  const onPress = (data: any) => {
    reset();
    props.onUserSubmit(data);
  };

  const icon = () => <Icon icon={IconName.PLUS} />;

  return (
    <View style={{ flex: 1, alignContent: "center" }}>
      <View
        style={{
          flex: 2,
          justifyContent: "flex-start",
        }}
      >
        {elements}
      </View>
      <View style={{ justifyContent: "center", flex: 1 }}>
        <Button onPress={handleSubmit(onPress)} accessoryLeft={icon}>
          Add User
        </Button>
      </View>
    </View>
  );
}
