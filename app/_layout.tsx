import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { useAuthStore } from "@/services/stores/auth.store";
import { themes } from "@/theme";
import { PortalProvider } from "@gorhom/portal";
import { ThemeProvider } from "@shopify/restyle";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
export default function RootLayout() {
  const colorScheme = useColorScheme();
  const queryClient = new QueryClient();
  const theme = colorScheme === "dark" ? themes.dark : themes.light;
  const [loaded] = useFonts({
    InterRegular: require("../assets/fonts/Inter_24pt-Regular.ttf"),
    InterMedium: require("../assets/fonts/Inter_24pt-Medium.ttf"),
    InterSemiBold: require("../assets/fonts/Inter_24pt-SemiBold.ttf"),
    InterBold: require("../assets/fonts/Inter_24pt-Bold.ttf"),
    InterExtraBold: require("../assets/fonts/Inter_24pt-ExtraBold.ttf"),
    MigraExtraBold: require("../assets/fonts/Migra-Extrabold.ttf"),
  });

  const initializeAuth = useAuthStore((state) => state.initializeAuth);
  const [appReady, setAppReady] = useState(false);
  const isInitialized = useAuthStore((state) => state.isInitialized);
  useEffect(() => {
    const prepare = async () => {
      try {
        await initializeAuth(); // Load token/user from SecureStore
      } catch (e) {
        console.warn("Auth init failed", e);
      } finally {
        console.log("appReady:", appReady);
        setAppReady(true);
        await SplashScreen.hideAsync(); // hide splash when ready
      }
    };

    prepare();
  }, []);

  useEffect(() => {
    if (loaded && appReady && isInitialized) {
      console.log("loaded and appReady");
      SplashScreen.hideAsync();
    }
  }, [loaded, appReady, isInitialized]);

  return (
    <GestureHandlerRootView>
      <ThemeProvider theme={theme}>
        <PortalProvider>
          <QueryClientProvider client={queryClient}>
            <Stack screenOptions={{ headerShown: false }} />
          </QueryClientProvider>
        </PortalProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
