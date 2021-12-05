import * as React from "react";
import { Animated } from "react-native";
interface RotateProps {
  isClicked: boolean;
}

const Rotate: React.FC<RotateProps> = (props) => {
  const [rotateAnimation, setRotateAnimation] = React.useState(new Animated.Value(0));

  React.useEffect(() => {
    handleAnimation();
  }, [props.isClicked]);

  const handleAnimation = () => {
    Animated.timing(rotateAnimation, {
      toValue: props.isClicked ? 1 : 0,
      duration: 400,
      useNativeDriver: true,
    } as Animated.TimingAnimationConfig).start();
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
