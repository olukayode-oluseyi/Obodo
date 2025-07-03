import { Button } from "@/components/ui/common/button";
import OnboardingTextfield from "@/components/ui/common/inputs/OnboardingInputs";
import OnboardingScreenLayout from "@/components/ui/common/layouts/OnboardingScreenLayout";
import { Text, YView } from "@/theme/component";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import Animated, { SlideInLeft, SlideOutRight } from "react-native-reanimated";

const CommunitySetupScreen = () => {
  const [step, setStep] = useState(1);
  return (
    <OnboardingScreenLayout step={step}>
      <YView
        paddingTop={"x16"}
        gap={"x32"}
        flex={1}
        style={{ position: "relative" }}
      >
        {/* Step 1 View */}
        <Animated.View
          style={[
            StyleSheet.absoluteFillObject,
            { display: step === 1 ? "flex" : "none" },
          ]}
          entering={SlideInLeft.duration(400)}
          exiting={SlideOutRight.duration(300)}
        >
          <YView paddingTop={"x16"} gap={"x32"} flex={1}>
            <YView gap={"s"}>
              <Text fontSize={18} lineHeight={26} fontFamily={"InterBold"}>
                Welcome, Andrew Diete-Koki
              </Text>
              <Text>
                Get started by setting up your community and letting us know
                what you are interested in.
              </Text>
            </YView>
            <YView flexDirection={"column"} gap={"x32"}>
              <OnboardingTextfield
                label="What’s your community name?"
                placeholder="Brand name"
              />
              <OnboardingTextfield
                placeholder="useobodo.com/"
                label="Community URL"
              />
            </YView>
          </YView>
        </Animated.View>

        {/* Step 2 View */}
        <Animated.View
          style={[
            StyleSheet.absoluteFillObject,
            { display: step === 2 ? "flex" : "none" },
          ]}
          entering={SlideInLeft.duration(400)}
          exiting={SlideOutRight.duration(300)}
        >
          <YView paddingTop={"x16"} gap={"x32"} flex={1}>
            <YView gap={"s"}>
              <Text fontSize={18} lineHeight={26} fontFamily={"InterBold"}>
                What’s the primary focus of your community?
              </Text>
            </YView>
            <YView flexDirection={"column"} gap={"x32"}>
              <OnboardingTextfield
                label="Focus of your community"
                placeholder="Select focus"
              />
            </YView>
          </YView>
        </Animated.View>
      </YView>
      <YView>
        <Button title="Continue" onPress={() => setStep(step + 1)} />
      </YView>
    </OnboardingScreenLayout>
  );
};

export default CommunitySetupScreen;

const styles = StyleSheet.create({});
