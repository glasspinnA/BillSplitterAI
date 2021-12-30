import * as React from "react";
import { View } from "react-native";
import { Text } from "@ui-kitten/components";
import { Fontsize } from "../../constant/Fontsize";

interface UserRequiredProps {
  nbrUsers: number;
  nbrRequiredUsers: number;
}

export const UserRequired: React.FC<UserRequiredProps> = (props) => {
  const [isValid, setIsValid] = React.useState(false);
  const [remaingUsers, setRemaningUsers] = React.useState(props.nbrRequiredUsers);
  React.useEffect(() => {
    setIsValid(props.nbrUsers >= props.nbrRequiredUsers);
    setRemaningUsers(props.nbrRequiredUsers - props.nbrUsers);
  }, [props.nbrUsers]);

  return (
    <View style={{ alignItems: "center" }}>
      {!isValid && props.nbrUsers != 0 && <Text category={Fontsize.P2}>Add more {remaingUsers} users</Text>}
    </View>
  );
};
