import * as React from "react";
import { FormProvider, UseFormReturn, FieldValues } from "react-hook-form";

interface FormProviderProps {
  form: UseFormReturn<FieldValues, object>;
}

export const CustomFormProvider: React.FC<FormProviderProps> = (props) => {
  return <FormProvider {...props.form}>{props.children}</FormProvider>;
};
