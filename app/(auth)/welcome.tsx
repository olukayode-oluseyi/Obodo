import { welcomeData } from "@/constants/data";
import WelcomeCarousel from "@/features/auth/welcome/components/welcome-carousel";
import WelcomeButtons from "@/features/auth/welcome/components/WelcomeButtons";
import { AppTheme } from "@/theme";
import { YView } from "@/theme/component";
import { useTheme } from "@shopify/restyle";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Welcome = () => {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme<AppTheme>();
  return (
    <YView flex={1} backgroundColor={"background"}>
      <WelcomeCarousel
        currentIndex={currentIndex}
        setCurrentIndex={(id: number) => setCurrentIndex(id)}
        data={welcomeData}
      />

      <WelcomeButtons/>
    </YView>
  );
};

export default Welcome;
