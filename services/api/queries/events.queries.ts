

// /v1/users/me

import { UserEventsResponse } from "@/services/types";
import api from "../axios.client.api";

/**
 * Get  events
 * @returns Events
 */
export const getUserEvents= async (): Promise<UserEventsResponse> => {
  const response = await api.get<UserEventsResponse>("/users/me/events");
  return response.data;
};


