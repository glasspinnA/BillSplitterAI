import { Text } from "@ui-kitten/components";
import React from "react";
import { View, TextInput, LayoutRectangle, Keyboard } from "react-native";
import { ScreenContainer } from "../../../SharedComponent/src/ScreenContainer";
import { Icon, IconName } from "../../../SharedComponent/src/Icon";
import { KeyboardAvoidingView } from "../component/KeyboardAvodingView";
import { TextInputOverlay } from "../component/TextInputOverlay";
import styled from "styled-components/native";
import { Banner } from "../component/Banner";

export interface QuoteScreenProps {}

export function QuoteScreen(props: QuoteScreenProps) {
  const [layout, setLayout] = React.useState<LayoutRectangle>();
  const [isKeyboardVisible, setKeyboardVisiblity] = React.useState<boolean>(false);
  const inputRef = React.createRef<TextInput>();
  const [quote, setQuote] = React.useState("");
  const [shouldShowError, setShowError] = React.useState(false);
  const onPress = () => {
    inputRef.current?.focus();
    setKeyboardVisiblity(true);
  };

  const onAddQuote = () => {
    if (isTextValid()) {
      Keyboard.dismiss();
      setKeyboardVisiblity(false);
    } else {
      setShowError(!shouldShowError);
    }
  };

  const isTextValid = () => quote.length > 0;

  return (
    <ScreenContainer>
      <Banner shouldRun={shouldShowError}>Text Not Valid</Banner>
      <StyledView onLayout={(e) => setLayout(e.nativeEvent.layout)}>
        <StyledView>
          <StyledTextInput ref={inputRef} onChangeText={(text) => setQuote(text)} multiline={true} layout={layout} />
        </StyledView>
        <TextInputOverlayContainer layout={layout} showPlaceholder={isKeyboardVisible}>
          <TextInputOverlay onPress={onPress}>
            <Icon icon={IconName.CHEVRON}></Icon>
            <Text>Add Quote</Text>
          </TextInputOverlay>
        </TextInputOverlayContainer>
      </StyledView>
      <KeyboardAvoidingView onPress={onAddQuote} isVisible={isKeyboardVisible} />
    </ScreenContainer>
  );
}

interface IStyledComponentParams {
  layout?: LayoutRectangle;
  showPlaceholder?: boolean;
}

const StyledView = styled.View`
  flex: 1;
  justify-content: center;
`;

const StyledTextInput = styled.TextInput`
  text-align: center;
  align-items: flex-end;
  color: white;
  width: ${(props: IStyledComponentParams) => (props.layout ? props.layout?.width.toPX() : "0px")};
  max-height: ${(props: IStyledComponentParams) => (props.layout ? props.layout?.height.toPX() : "0px")};
`;

const TextInputOverlayContainer = styled.View`
  position: absolute;
  z-index: ${(props: IStyledComponentParams) => (props.showPlaceholder ? -1 : 1)};
  opacity: ${(props: IStyledComponentParams) => (props.showPlaceholder ? 0 : 1)};
  flex: 1;
  width: ${(props: IStyledComponentParams) => (props.layout ? props.layout?.width.toPX() : "0px")};
  height: ${(props: IStyledComponentParams) => (props.layout ? props.layout?.height.toPX() : "0px")};
`;

declare global {
  interface Number {
    toPX: () => string;
  }
}
Number.prototype.toPX = function (): string {
  return this + "px";
};
