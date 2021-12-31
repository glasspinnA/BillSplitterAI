import { css } from "styled-components";
import styled from "styled-components/native";
import { Colors } from "../constant/Colors";

const Container = styled.View`
  background: ${Colors.BASIC_COLOR.value};
`;

const borderRadiusWrapper = css`
  border-radius: 9px;
`;

const sharedPadding = css`
  padding-vertical: 13px;
  padding-horizontal: 16px;
`;

interface Item {
  flex?: number;
}
const Item = styled.View`
  background: ${Colors.BACKGROUND.value} 
  ${borderRadiusWrapper} 
  ${sharedPadding} 
  flex: ${(props: Column) => (props.flex == undefined ? 1 : props.flex)};
  border:1px solid ${Colors.BASIC_COLOR_900.value};
  overflow:hidden;
  margin-vertical: 5px;
`;

interface Row {
  flexDirection?: FlexDirection;
}

const Row = styled.View`
  flex-direction: ${(props: Row) => (props.flexDirection ?? FlexDirection.ROW) as string};
`;

interface Column {
  flex?: number;
  alignItems?: AlignItems;
  alignSelf?: AlignItems;
}
const Column = styled.View`
  flex: ${(props: Column) => (props.flex == undefined ? 1 : props.flex)};
  align-self: ${(props: Column) => (props.alignSelf ?? AlignItems.CENTER) as string};
  align-items: ${(props: Column) => (props.alignItems ?? AlignItems.FLEX_START) as string};
`;

class AlignItems {
  static FLEX_START: string = "flex-start";
  static FLEX_END: string = "flex-end";
  static CENTER: string = "center";
}

class FlexDirection {
  static ROW: string = "row";
  static COLUMN: string = "column";
}

const FlatListItem = {
  Row: Row,
  Item: Item,
  Column: Column,
};

const ShadowView = styled.View`
  background: red;
  border-radius: 9px;
  margin-vertical: 10px;
  shadow-color: green;
  shadow-offset: {
    width: 0;
    height: 1;
  }
  shadow-opacity: 1;
`;

export { borderRadiusWrapper, sharedPadding, FlatListItem, AlignItems, Container, ShadowView, FlexDirection };
