import * as React from "react";
import { Animated, LayoutRectangle, View } from "react-native";
import styled from "styled-components/native";
import { GetRowItemAnimationConfig } from "../../constant/Animation";
import { IItem } from "../../interfaces/IItem";
import { ItemRow } from "../ItemRow";

interface RowContainerProps {
  layout: LayoutRectangle | undefined;
}

export interface AnimatedItemProps extends RowContainerProps {
  item: IItem;
  toggled: boolean;
  index: number;
}

export function AnimatedItemContainer(props: AnimatedItemProps) {
  const [rotateAnimation, setRotateAnimation] = React.useState(new Animated.Value(0));
  const [opacityAnimation, setOpacityAnimation] = React.useState(new Animated.Value(0));

  React.useEffect(() => {
    onItemRowToggled();
  }, [props.toggled]);

  const onItemRowToggled = () => {
    Animated.parallel([
      Animated.timing(rotateAnimation, GetRowItemAnimationConfig(props.toggled)),
      Animated.timing(opacityAnimation, GetRowItemAnimationConfig(props.toggled)),
    ]).start();
  };

  const getHeight = (): number => {
    return (props.layout?.height ?? 0) + 10;
  };

  const interpolateRotating = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["-20px", (props.index * getHeight()).toString() + "px"],
  });
  const interpolateOpacity = opacityAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0", "1"],
  });
  const animatedStyle = {
    transform: [
      {
        translateY: interpolateRotating,
      },
    ],
    opacity: interpolateOpacity,
  };

  return (
    <RowContainer layout={props.layout}>
      <Animated.View style={[{ marginVertical: -10 }, animatedStyle]}>
        <ItemRow item={props.item} />
      </Animated.View>
    </RowContainer>
  );
}

const RowContainer = styled.View`
  position: absolute;
  flex: 1;
  width: ${(props: RowContainerProps) => props.layout?.width ?? 0};
  bottom: ${(props: RowContainerProps) => -(props.layout?.height ?? 0)};
  z-index: -1;
`;
