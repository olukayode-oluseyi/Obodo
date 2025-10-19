import { useGetCommunityDashboardData } from "@/hooks/useGetCommunityDashboardData";
import { useGetUserCommunities } from "@/hooks/useGetUserCommunities";
import { useGetUserDetails } from "@/hooks/useGetUserDetails";
import { useAuthStore } from "@/services/stores/auth.store";
import { themes } from "@/theme";
import { YView } from "@/theme/component";
import { Redirect, Stack } from "expo-router";
import { ActivityIndicator } from "react-native";

export default function AppLayout() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const { isLoading, isFetching } = useGetUserDetails();
  const {
    isLoading: isLoadingUserCommunities,
    isFetching: isFetchingUserCommunities,
    data
  } = useGetUserCommunities();
  const {
    isLoading: isLoadingCommunityDashboardData,
    isFetching: isFetchingCommunityDashboardData,
  } = useGetCommunityDashboardData();

  const user = useAuthStore((state) => state.user);

  console.log("user", data);

  if (!isLoggedIn) {
    return <Redirect href={"/welcome"} />;
  }

  if (
    isLoading ||
    isFetching ||
    isLoadingUserCommunities ||
    isFetchingUserCommunities
  ) {
    return (
      <YView flex={1} justifyContent="center" alignItems="center">
        <ActivityIndicator size="large" color={themes.light.colors.primary} />
      </YView>
    );
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
