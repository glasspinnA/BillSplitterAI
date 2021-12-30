import { Animated } from "react-native";

const GetRowItemAnimationConfig = (isPressed: boolean, useNativeDriver?: boolean): Animated.TimingAnimationConfig => {
  return {
    toValue: isPressed ? 1 : 0,
    duration: 400,
    useNativeDriver: useNativeDriver ?? true,
  };
};

export { GetRowItemAnimationConfig };
