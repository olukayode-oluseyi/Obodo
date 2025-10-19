import { getUserDetails } from "@/services/api/queries/auth.query.mutation";
import { useAuthStore } from "@/services/stores/auth.store";
import { UserDetailsResponse } from "@/services/types/dto/auth.dto";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

/**
 * Hook for getting user details
 * @returns User details
 */
export const useGetUserDetails = () => {
  const { data, error, isLoading, isFetching, refetch, isSuccess } =
    useQuery<UserDetailsResponse>({
      queryKey: ["user-details"],
      queryFn: getUserDetails,
      enabled: useAuthStore.getState().isLoggedIn,
    });

    useEffect(() => {
      if (isSuccess) {
        useAuthStore.getState().setUser(data);
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
