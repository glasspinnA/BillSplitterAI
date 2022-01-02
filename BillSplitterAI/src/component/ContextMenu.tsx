import * as React from "react";
import { View } from "react-native";
import { Menu, MenuOptions, MenuOption, MenuTrigger } from "react-native-popup-menu";
import { Icon, IconName } from "../../../SharedComponent/src/Icon";
import { Colors } from "../../../SharedComponent/src/constant/Colors";
import { Text } from "@ui-kitten/components";
import { useIsMount } from "../../../SharedComponent/src/hooks/IsMount";

export interface IContextMenuAction {
  onEdit?: () => any;
  onDelete?: () => any;
}

export interface ContextMenuProps {
  action: IContextMenuAction;
  isMenuPressed: boolean;
}

export function ContextMenu(props: ContextMenuProps) {
  const menuRef = React.useRef<Menu>(null);
  const isMount = useIsMount();

  React.useEffect(() => {
    if (!isMount) {
      menuRef.current?.open();
    }
  }, [props.isMenuPressed]);

  const getMenuOption = (onSelect: () => void, icon: IconName, text: string) => {
    return (
      <MenuOption style={{ backgroundColor: Colors.BACKGROUND.value }} onSelect={onSelect}>
        <View style={{ flexDirection: "row", paddingVertical: 3 }}>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Icon icon={icon} />
          </View>
          <View style={{ flex: 3 }}>
            <Text>{text}</Text>
          </View>
        </View>
      </MenuOption>
    );
  };

  return (
    <Menu ref={menuRef}>
      <MenuTrigger>
        <Icon icon={IconName.CONTEXT_MENU} />
      </MenuTrigger>
      <MenuOptions>
        {props.action.onDelete && getMenuOption(props.action.onDelete, IconName.TRASH, "Delete")}
        {props.action.onEdit && getMenuOption(props.action.onEdit, IconName.EDIT_PEN, "Edit")}
      </MenuOptions>
    </Menu>
  );
}
