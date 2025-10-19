
import { CommunityDashboardData } from "../communities.type";
import { UserEvent } from "../event.type";


 
export interface UserEventsResponse {
    data: UserEvent[];
    message: string;
    status: string;
}

export interface CommunityDashboardDataResponse {
    data: CommunityDashboardData;
    message: string;
    status: string;
}

