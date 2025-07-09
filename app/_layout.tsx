import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { themes } from "@/theme";
import { ThemeProvider } from "@shopify/restyle";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? themes.dark : themes.light;
  const [loaded] = useFonts({
    InterRegular: require("../assets/fonts/Inter_24pt-Regular.ttf"),
    InterMedium: require("../assets/fonts/Inter_24pt-Medium.ttf"),
    InterSemiBold: require("../assets/fonts/Inter_24pt-SemiBold.ttf"),
    InterBold: require("../assets/fonts/Inter_24pt-Bold.ttf"),
    InterExtraBold: require("../assets/fonts/Inter_24pt-ExtraBold.ttf"),
    MigraExtraBold: require("../assets/fonts/Migra-Extrabold.ttf")
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Slot />

      <StatusBar style="dark" />
    </ThemeProvider>
  );
}
