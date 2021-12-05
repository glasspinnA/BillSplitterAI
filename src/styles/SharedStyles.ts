import { css } from "styled-components";
import styled from "styled-components/native";
import { BaseColors } from "./Colors";

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
  background: ${BaseColors.PRIMARY} 
  ${borderRadiusWrapper} 
  ${sharedPadding} 
  margin-vertical:10px;
  flex: ${(props: Column) => (props.flex == undefined ? 1 : props.flex)};
`;

const Row = styled.View`
  flex-direction: row;
  flex: 1;
`;

interface Column {
  flex?: number;
}
const Column = styled.View`
  flex: ${(props: Column) => (props.flex == undefined ? 1 : props.flex)};
  align-self: center;
`;

const FlatListItem = {
  Row: Row,
  Item: Item,
  Column: Column,
};

export { borderRadiusWrapper, sharedPadding, FlatListItem };
