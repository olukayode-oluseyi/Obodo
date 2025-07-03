import Logo from "@/assets/icons/logo.svg";
import { AppTheme } from "@/theme";
import { XView, YView } from "@/theme/component";
import { useTheme } from "@shopify/restyle";
import React, { ReactNode, useEffect } from "react";
import { StyleSheet } from "react-native";
import Animated, {
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type OnboardingScreenLayoutProps = {
  children: ReactNode;
  step: number;
};

const OnboardingScreenLayout = ({
  children,
  step,
}: OnboardingScreenLayoutProps) => {
  const { top, bottom } = useSafeAreaInsets();
  const theme = useTheme<AppTheme>();
  const progress1 = useSharedValue(step === 1 ? 1 : 0);
  const progress2 = useSharedValue(step === 2 ? 1 : 0);

  useEffect(() => {
    progress1.value = withTiming(step >= 1 ? 1 : 0, { duration: 500, easing: Easing.out(Easing.cubic) });
    progress2.value = withTiming(step === 2 ? 1 : 0, { duration: 500, easing: Easing.out(Easing.cubic) });
  }, [step]);

  const animatedStyle1 = useAnimatedStyle(() => ({
    width: `${progress1.value * 100}%`,
  }));

  const animatedStyle2 = useAnimatedStyle(() => ({
    width: `${progress2.value * 100}%`,
  }));

  return (
    <YView
      paddingHorizontal={"l"}
      flex={1}
  
      style={{
        paddingTop: top + 20,
        paddingBottom: bottom + 20,
        backgroundColor: "#FBFBFB",
      }}
    >
      <YView alignItems={"center"} gap={"x32"}>
        <Logo />

        <XView flexDirection="row" gap="s" alignItems="center">
          <YView
            style={{
              flex: 1,
              height: 8,
              borderRadius: 500,
              backgroundColor: theme.colors.borderLight,
              overflow: "hidden",
            }}
          >
            <Animated.View
              style={[
                {
                  height: 8,
                  borderRadius: 500,
                  backgroundColor: theme.colors.primary,
                },
                animatedStyle1,
              ]}
            />
          </YView>
          <YView
            style={{
              flex: 1,
              height: 8,
              borderRadius: 500,
              backgroundColor: theme.colors.borderLight,
              overflow: "hidden",
            }}
          >
            <Animated.View
              style={[
                {
                  height: 8,
                  borderRadius: 500,
                  backgroundColor: theme.colors.primary,
                },
                animatedStyle2,
              ]}
            />
          </YView>
        </XView>
      </YView>
      <YView flex={1}>{children}</YView>
    </YView>
  );
};

export default OnboardingScreenLayout;

const styles = StyleSheet.create({});
