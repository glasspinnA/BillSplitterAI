import * as React from "react";
import { ListRenderItem } from "react-native";
import styled from "styled-components/native";

interface FlatlistProps<T> {
  items: T[];
  renderItem: ListRenderItem<T> | null | undefined;
  keyExtractor: (item: any, index: number) => string;
  listEmptyComponent?: JSX.Element;
}

const Flatlist = <T extends {}>(props: FlatlistProps<T> /*& { children: React.ReactNode }*/) => {
  return (
    <NativeFlatList
      data={props.items}
      renderItem={props.renderItem}
      keyExtractor={props.keyExtractor}
      extraData={props.items}
      ListEmptyComponent={props.listEmptyComponent}
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: props.items == undefined || props.items.length == 0 ? "center" : "flex-start",
      }}
      scrollEnabled={props.items != undefined && props.items.length > 0}
    />
  );
};

const NativeFlatList = styled.FlatList``;

export { Flatlist };
