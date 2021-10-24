import * as React from "react";
import { UserForm, t } from "../component/UserFormComponent";

export interface CreateUserScreenProps {}

export function CreateUserScreen(props: CreateUserScreenProps) {
  const data: t[] = [
    { Text: "First & Last name", Placeholder: "Enter first & last name", ErrorMessage: "Required", Name: "Name" },
    { Text: "Income", Placeholder: "Enter your income", ErrorMessage: "Required", Name: "Email" },
  ];

  const [users, setUsers] = React.useState([]);

  const onSubmit = (data: any) => {
    setUsers([data, ...users]);
  };

  return (
    <>
      <UserForm data={data} onUserSubmit={onSubmit} canProcced={users.length >= 2}></UserForm>
    </>
  );
}
