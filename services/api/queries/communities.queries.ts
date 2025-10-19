

// /v1/users/me

import { CommunityDashboardDataResponse } from "@/services/types/dto/user.dto";
import api from "../axios.client.api";



// /v1/users/me/dashboard

/**
 * Get  user communities
 * @returns Community dashboard data
 */
export const getUserCommunities= async (): Promise<any> => {
  const response = await api.get<any>("/users/me/communities");
  return response.data;
};





/**
 * Get  community dashboard data
 * @returns Community dashboard data
 */
export const getCommunityDashboardData= async (): Promise<CommunityDashboardDataResponse> => {
  const response = await api.get<CommunityDashboardDataResponse>("/users/me/dashboard");
  return response.data;
};


