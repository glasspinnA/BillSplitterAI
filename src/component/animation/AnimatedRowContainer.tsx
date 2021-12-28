import * as React from "react";
import { Animated, View } from "react-native";
import { GetRowItemAnimationConfig } from "../../constant/Animation";

interface AnimatedRowContainerProps {
  nbrItems: number;
  shouldToggleState: boolean;
}

export const AnimatedRowContainer: React.FC<AnimatedRowContainerProps> = (props) => {
  const [rowHeight, setRowHeight] = React.useState(0);
  const EXTRA_MARGIN = 10;
  const [opacityAnimation, setOpacityAnimation] = React.useState(new Animated.Value(0));

  React.useEffect(() => {
    Animated.parallel([
      Animated.timing(opacityAnimation, GetRowItemAnimationConfig(props.shouldToggleState, false)),
    ]).start();
  }, [props.shouldToggleState]);

  const interpolateMarginBottom = opacityAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [10, EXTRA_MARGIN + props.nbrItems * (rowHeight + EXTRA_MARGIN)],
  });

  const animatedStyle = {
    marginBottom: interpolateMarginBottom,
  };

  return (
    <Animated.View
      onLayout={(event) => setRowHeight(event.nativeEvent.layout.height)}
      style={[{ flex: 1 }, animatedStyle]}
    >
      {props.children}
    </Animated.View>
  );
};
