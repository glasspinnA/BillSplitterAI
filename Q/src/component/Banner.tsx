import React, { useRef } from "react";
import { Animated, useWindowDimensions } from "react-native";
import { Text } from "@ui-kitten/components";
import { Colors } from "../../../SharedComponent/src/constant/Colors";
import { useIsMount } from "../../../SharedComponent/hooks/IsMount";

interface BannerProps {
  shouldRun: boolean;
}

export const Banner: React.FC<BannerProps> = (props) => {
  const slideAnimation = useRef(new Animated.Value(0)).current;
  const opacityAnimation = useRef(new Animated.Value(0)).current;
  const isMount = useIsMount();

  React.useEffect(() => {
    if (!isMount) {
      runAnimation();
    }
  }, [props.shouldRun]);

  const runAnimation = () =>
    Animated.parallel(getAnimation(false)).start(() => Animated.parallel(getAnimation(true)).start());

  const getAnimation = (isSlideUp: boolean): Animated.CompositeAnimation[] => {
    return [getOpacityAnimation(isSlideUp), getSlideAnimation(isSlideUp)];
  };
  const getSlideAnimation = (isSlideUp: boolean) => Animated.timing(slideAnimation, getAnimationConfig(isSlideUp));
  const getOpacityAnimation = (isSlideUp: boolean) =>
    Animated.timing(opacityAnimation, getAnimationOpacityConfig(isSlideUp));
  const getAnimationConfig = (isSlideUpState: boolean): Animated.TimingAnimationConfig => {
    return {
      toValue: isSlideUpState ? 0 : 50,
      duration: isSlideUpState ? 300 : 200,
      delay: isSlideUpState ? 2500 : 0,
      useNativeDriver: false,
    };
  };

  const getAnimationOpacityConfig = (isSlideUpState?: boolean): Animated.TimingAnimationConfig => {
    return {
      toValue: isSlideUpState ? 1 : 0,
      duration: 100,
      useNativeDriver: true,
    };
  };
  return (
    <Animated.View
      style={{
        width: useWindowDimensions().width,
        backgroundColor: Colors.DANGER.value,
        position: "absolute",
        height: slideAnimation,
        justifyContent: "center",
        paddingLeft: 10,
      }}
    >
      <Animated.View style={{ opacity: opacityAnimation }}>
        <Text>{props.children as string}</Text>
      </Animated.View>
    </Animated.View>
  );
};
