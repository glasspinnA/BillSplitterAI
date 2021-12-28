import * as React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { FormContent } from "../../interfaces/IFormData";
import { Input, Text } from "@ui-kitten/components";
import { Status } from "../../constant/Status";
import { Fontsize } from "../../constant/Fontsize";
export interface FormProps {
  data: FormContent[];
}

export function FormElement(props: FormProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const elements = props.data.map((x: FormContent) => {
    return (
      <>
        {x.Text && <Text category={Fontsize.S1}>{x.Text}</Text>}
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
        <Text style={{ opacity: errors[x.Name] ? 1 : 0 }} category={Fontsize.LABEL} status={Status.DANGER}>
          {x.ErrorMessage}
        </Text>
      </>
    );
  });
  return <>{elements}</>;
}
