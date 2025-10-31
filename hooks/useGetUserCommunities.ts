    import { getUserCommunities } from "@/services/api/queries/communities.queries";
import { useAuthStore } from "@/services/stores/auth.store";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

/**
 * Hook for getting user communities
 * @returns User communities
 */
export const useGetUserCommunities = () => {
  const { data, error, isLoading, isFetching, refetch, isSuccess } =
    useQuery({
      queryKey: ["user-communities"],
      queryFn: getUserCommunities,
      enabled: useAuthStore.getState().isLoggedIn,
    });

    useEffect(() => {
        if (isSuccess) {
         // useAuthStore.getState().setUserCommunities(data);
        }
      }, [isSuccess]);

  console.log("dataxx", data);


    // useEffect(() => {
    //   if (error) {
    //     //useAuthStore.getState().logout();
    //     //router.replace("/welcome");
    //   }
    // }, [error]);


  return { data, error, isLoading, isFetching, fetchUser: refetch };
};
