import EventIcon from "@/assets/icons/event.svg";
import HomeIcon from "@/assets/icons/home.svg";
import PostIcon from "@/assets/icons/post.svg";
import ProfileIcon from "@/assets/icons/profile.svg";
import { useHaptics } from "@/hooks/useHaptics";
import { AppTheme } from "@/theme";
import { useTheme } from "@shopify/restyle";

import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Animated, {
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withSequence,
    withSpring,
    withTiming,
} from "react-native-reanimated";
import { View } from "react-native-reanimated/lib/typescript/Animated";

const AnimatedHomeIcon = Animated.createAnimatedComponent(HomeIcon);
const AnimatedPostIcon = Animated.createAnimatedComponent(PostIcon);
const AnimatedEventIcon = Animated.createAnimatedComponent(EventIcon);
const AnimatedProfileIcon = Animated.createAnimatedComponent(ProfileIcon);

interface TabTriggerButtonProps {
  title: string;
  isFocused?: boolean;
  onPress?: () => void;
}

const TabTriggerButton = React.forwardRef<View, TabTriggerButtonProps>(
  ({ title, isFocused, onPress }, ref) => {
    const theme = useTheme<AppTheme>();
    const { triggerMedium } = useHaptics();

    const scale = useSharedValue(1);
    const rotate = useSharedValue(0);
    const opacity = useSharedValue(1);

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ scale: scale.value }, { rotate: `${rotate.value}deg` }],
      opacity: opacity.value,
    }));

    const _onPress = React.useCallback(() => {
      scale.value = withSequence(
        withTiming(0.85, { duration: 80, easing: Easing.out(Easing.quad) }),
        withSpring(1, { damping: 5, stiffness: 150 })
      );

      rotate.value = withSequence(
        withTiming(5, { duration: 80, easing: Easing.out(Easing.quad) }),
        withSpring(0, { damping: 5, stiffness: 150 })
      );

      opacity.value = withSequence(
        withTiming(0.8, { duration: 60 }),
        withTiming(1, { duration: 60 })
      );

      triggerMedium();
      onPress?.();
    }, [onPress, triggerMedium]);

    const iconView = {
      Home: <AnimatedHomeIcon style={animatedStyle} fill={"white"} />,
      Posts: <AnimatedPostIcon style={animatedStyle} fill={"white"} />,
      Events: <AnimatedEventIcon style={animatedStyle} fill={"white"} />,
      Profile: <AnimatedProfileIcon style={animatedStyle} fill={"white"} />,
    }[title];

    return (
      <TouchableOpacity
        activeOpacity={0.8}
        hitSlop={10}
        onPress={() => _onPress()}
        ref={ref}
        style={{
          height: 48,
          width: 48,
          borderRadius: 500,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: isFocused ? theme.colors.primary : theme.colors.text,
        }}
      >
        {iconView}
      </TouchableOpacity>
    );
  }
);

TabTriggerButton.displayName = "TabTriggerButton";

export default TabTriggerButton;

const styles = StyleSheet.create({});
