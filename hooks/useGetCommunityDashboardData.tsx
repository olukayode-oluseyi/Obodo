import { getCommunityDashboardData } from "@/services/api/queries/communities.queries";
import { useAuthStore } from "@/services/stores/auth.store";
import { CommunityDashboardDataResponse } from "@/services/types";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

// meant to receive id
/**
 * Hook for getting user details
 * @returns User details
 */
export const useGetCommunityDashboardData = (
    communityId: number | null
) => {
  const { data, error, isLoading, isFetching, refetch, isSuccess } =
    useQuery<CommunityDashboardDataResponse>({
      queryKey: ["community-dashboard-data"],
      queryFn: () => getCommunityDashboardData(communityId),
      enabled: !!communityId,
    });

    useEffect(() => {
      if (isSuccess) {
       
      }
    }, [isSuccess]);


    useEffect(() => {
      if (error) {
        useAuthStore.getState().logout();
        //router.replace("/welcome");
      }
    }, [error]);


  return { data, error, isLoading, isFetching, fetchUser: refetch };
};
