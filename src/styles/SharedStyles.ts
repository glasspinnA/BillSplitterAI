import { css } from "styled-components";
import styled from "styled-components/native";
import { BaseColors } from "./Colors";

const Container = styled.View`
  background: ${BaseColors.BLACK};
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
  background: ${BaseColors.BLACK} 
  ${borderRadiusWrapper} 
  ${sharedPadding} 
  margin-vertical:10px;
  flex: ${(props: Column) => (props.flex == undefined ? 1 : props.flex)};
`;

const Row = styled.View`
  flex-direction: row;
`;

interface Column {
  flex?: number;
  alignItems?: AlignItems;
}
const Column = styled.View`
  flex: ${(props: Column) => (props.flex == undefined ? 1 : props.flex)};
  align-self: center;
  align-items: ${(props: Column) =>
    props.alignItems == undefined ? (AlignItems.FLEX_START as string) : (props.alignItems as string)};
`;

class AlignItems {
  static FLEX_START: string = "flex-start";
  static FLEX_END: string = "flex-end";
  static CENTER: string = "center";
}

const FlatListItem = {
  Row: Row,
  Item: Item,
  Column: Column,
};

const shadow = css`
  shadow-color: black;
  shadow-offset: {
    width: 0;
    height: 7;
  }
  shadow-opacity: 0.37;
  shadow-radius: 7.84;
  elevation: 12;
  ${borderRadiusWrapper}
`;
export { borderRadiusWrapper, sharedPadding, FlatListItem, AlignItems, Container, shadow };
