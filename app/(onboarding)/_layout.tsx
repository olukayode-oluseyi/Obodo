import { Stack } from "expo-router";
import React from "react";

const OnboardingLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
       
        //presentation: 'modal'
      }}
    />
  );
};

export default OnboardingLayout;
