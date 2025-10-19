

// /v1/users/me

import api from "../axios.client.api";

/**
 * Get user details
 * @returns User details
 */
export const getUserDetails= async (): Promise<any> => {
  const response = await api.get<any>("/users/me");
  return response.data;
};


