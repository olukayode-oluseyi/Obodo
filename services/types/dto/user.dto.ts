
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

export interface UserCommunity {
 avatar_data: {
        color: string;
        avatar_url: string;
        has_avatar: boolean;
        initial: string;
        name: string;    
        owner_cid: number;
        shape: string;
        size: string;
    };
    community_id: number;
    created_at: number;
    manager: boolean;
    name: string;
    username: string;
}

export interface UserCommunitiesResponse {
    data: UserCommunity[];
    message: string;
    status: string;
}