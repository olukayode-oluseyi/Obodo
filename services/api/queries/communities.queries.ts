

// /v1/users/me

import { CommunityDashboardDataResponse, UserCommunitiesResponse } from "@/services/types/dto/user.dto";
import api from "../axios.client.api";



// /v1/users/me/dashboard

/**
 * Get  user communities
 * @returns Community dashboard data
 */
export const getUserCommunities= async (): Promise<UserCommunitiesResponse> => {
  const response = await api.get<any>("/users/me/communities");
  return response.data;
};





/**
 * Get  community dashboard data
 * @param communityId - Community ID
 * @returns Community dashboard data
 */
export const getCommunityDashboardData= async (communityId: number | null): Promise<CommunityDashboardDataResponse> => {
  if (!communityId) {
    throw new Error("Community ID is required");
  }
  const response = await api.get<CommunityDashboardDataResponse>(`/communities/${communityId}/dashboard`);
  return response.data;
};


