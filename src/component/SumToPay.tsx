import * as React from "react";
import styled from "styled-components/native";
import { Colors } from "../constant/Colors";
import { borderRadiusWrapper } from "../styles/SharedStyles";
import { Text } from "@ui-kitten/components";

export interface SumToPayProps {
  sumToPay: number;
  currency?: Currency;
}

export function SumToPay(props: SumToPayProps) {
  return (
    <StyedView>
      <Text>
        {props.sumToPay} {getCurrencyLabel(props.currency)}
      </Text>
    </StyedView>
  );
}

const getCurrencyLabel = (currency?: Currency) => {
  switch (currency) {
    case Currency.SWEDISH:
      return "kr";
    default:
      return "kr";
  }
};

export enum Currency {
  SWEDISH = 0,
}

const StyedView = styled.View`
  background: ${Colors.SUCCESS.value} 
  ${borderRadiusWrapper} 
  padding-vertical:6px;
  padding-horizontal:5px;
  min-width:80%;
  align-items:center;
`;
