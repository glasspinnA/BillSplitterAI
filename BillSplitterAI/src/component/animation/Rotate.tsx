import * as React from "react";
import { Animated } from "react-native";
import { GetRowItemAnimationConfig } from "../../constant/Animation";
interface RotateProps {
  isClicked: boolean;
}

const Rotate: React.FC<RotateProps> = (props) => {
  const [rotateAnimation, setRotateAnimation] = React.useState(new Animated.Value(0));

  React.useEffect(() => {
    performAnimation();
  }, [props.isClicked]);

  const performAnimation = () => {
    Animated.timing(rotateAnimation, GetRowItemAnimationConfig(props.isClicked)).start();
  };

  const interpolateRotating = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  const animatedStyle = {
    transform: [
      {
        rotate: interpolateRotating,
      },
    ],
  };
  return <Animated.View style={animatedStyle}>{props.children}</Animated.View>;
};

export { Rotate };
