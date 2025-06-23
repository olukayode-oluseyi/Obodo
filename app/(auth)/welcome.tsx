import { Button } from "@/components/ui/common/button";
import { welcomeData } from "@/constants/data";
import WelcomeCarousel from "@/features/auth/welcome/components/welcome-carousel";
import { AppTheme } from "@/theme";
import { Box } from "@/theme/component";
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
    <Box
      flex={1}
      backgroundColor={"background"}
      style={
        {
          // paddingTop: insets.top + 40,
        }
      }
    >
      <WelcomeCarousel
        setCurrentIndex={(id: number) => setCurrentIndex(id)}
        data={welcomeData}
      />

      <Box
        // position={"absolute"}
        zIndex={1000}
        left={0}
        gap={'s'}
        paddingHorizontal={"m"}
        right={0}
        bottom={insets.bottom + 20}
      >
        <Box
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          mb="xs"
          mt="s"
          gap={'s'}
        >
          {welcomeData.map((_, index) => (
            <Box
              key={index}
              width={theme.spacing.m}
              height={4}
              borderRadius={"m"}
              backgroundColor={index === currentIndex ? 'text' : 'backgroundSecondary'}
              opacity={index === currentIndex ? 1 : 0.3}
            />
          ))}
        </Box>
        <Button
          title="Get Started"
          onPress={() => router.replace({
            pathname: '/(auth)/register'
          })}
          style={{
            backgroundColor: theme.colors.text,
            height: 50,
          }}
        />
      </Box>
    </Box>
  );
};

export default Welcome;
