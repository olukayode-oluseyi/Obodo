import { Button } from "@/components/ui/common/button";
import { YView } from "@/theme/component";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const WelcomeButtons = () => {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  return (
    <YView
      // position={"absolute"}
      zIndex={1000}
      left={0}
      gap={"m"}
      paddingHorizontal={"ml"}
      right={0}
      style={{
        paddingBottom: insets.bottom + 0,
      }}
    >
      <Button
        variant="primary"
        variantText="button"
        title="Get Started"
        onPress={() =>
          router.replace({
            pathname: "/(auth)/register",
          })
        }
      />

      <Button
        variant="outline"
        variantText="buttonOutline"
        title="Login"
        onPress={() =>
          router.replace({
            pathname: "/(auth)/login",
          })
        }
      />
    </YView>
  );
};

export default WelcomeButtons;

const styles = StyleSheet.create({});
