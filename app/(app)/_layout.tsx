import { useGetCommunityDashboardData } from "@/hooks/useGetCommunityDashboardData";
import { useGetUserDetails } from "@/hooks/useGetUserDetails";
import { useAuthStore } from "@/services/stores/auth.store";
import { themes } from "@/theme";
import { YView } from "@/theme/component";
import { Redirect, Stack } from "expo-router";
import { ActivityIndicator } from "react-native";

export default function AppLayout() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const isInitialized = useAuthStore((state) => state.isInitialized);
  const user = useAuthStore((state) => state.user);

  const { isLoading, isFetching, data: userDetails } = useGetUserDetails();

  // const {
  //   isLoading: isLoadingUserCommunities,
  //   isFetching: isFetchingUserCommunities,
  //   data
  // } = useGetUserCommunities();
  const {
    data: communityDashboardData,
    isLoading: isLoadingCommunityDashboardData,
    isFetching: isFetchingCommunityDashboardData,
  } = useGetCommunityDashboardData(user?.active_community_id || null);

  
  // useEffect(() => {
  //   if (isLoading) return;

  //   // const inAuthGroup = segments[0] === '(auth)';
  //   // const inOnboardingGroup = segments[0] === '(onboarding)';
  //   // const inAppGroup = segments[0] === '(app)';

  //   console.log("user:", user);
  //   // Redirect logic
  //   if (true) {
  //     router.replace('/(app)/(home)/dashboard');
  //     return
  //   } else {

  //   }
  // }, [user, isLoading]);



  console.log("isLoggedIn:", isLoggedIn, isInitialized);
  if (!isLoggedIn && isInitialized) {
    return <Redirect href="/welcome" />;
  }

  

  // Wait for auth to initialize before checking login status
  // if (!isInitialized) {
  //   return (
  //     <YView flex={1} justifyContent="center" alignItems="center">
  //       <ActivityIndicator size="large" color={themes.light.colors.primary} />
  //     </YView>
  //   );
  // }

  if (isLoadingCommunityDashboardData || isFetchingCommunityDashboardData) {
    return (
      <YView flex={1} justifyContent="center" alignItems="center">
        <ActivityIndicator size="large" color={themes.light.colors.primary} />
      </YView>
    );
  }

  return (
    <Stack
    initialRouteName="(home)/dashboard"
      screenOptions={{
        headerShown: false,
      
      }}
    >
      <Stack.Screen name="(home)/dashboard" options={{ headerShown: false }} />
      <Stack.Screen name="dashboard" options={{ headerShown: false }} />

      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      

    </Stack>
  );
}
