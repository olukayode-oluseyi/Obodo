// {
//     "status": "success",
//     "data": {
//         "community_id": 1,
//         "stats": {
//             "total_members": 6,
//             "active_members": 0,
//             "engagement_rate": 16.6700000000000017053025658242404460906982421875
//         },
//         "newest_members": {
//             "members": [],
//             "total": 0
//         },
//         "birthdays": [],
//         "top_contributors": [
//             {
//                 "user_id": "1751527480",
//                 "avatar_data": {
//                     "has_avatar": true,
//                     "avatar_url": "https://app.useobodo.com/cdn/users/1751527480/avatar_1751527480.png",
//                     "size": "lg",
//                     "shape": "square",
//                     "name": "Obodo"
//                 },
//                 "name": "Obodo ",
//                 "points": 21
//             }
//         ],
//         "upcoming_events": [
//             {
//                 "event_id": 1,
//                 "event_cid": "1719792700",
//                 "title": "Designing The Future",
//                 "slug": "designing-the-future",
//                 "url": "https://app.useobodo.com/obodo/events/1719792700",
//                 "starts_at": "2025-09-28 15:00:00",
//                 "ends_at": "2025-09-28 18:00:00"
//             }
//         ]
//     }
// }

import { UserEventAvatar } from "./event.type";

export interface CommunityNewestMember {
    user_id: number;
    avatar_data: UserEventAvatar;
    name: string;
}

export interface CommunityNewestMembers {
    members: CommunityNewestMember[];
    total: number;
}

export interface CommunityBirthday {
    user_id: number;
    avatar_data: UserEventAvatar;
    name: string;
    day: number;
    month: string;
}

export interface CommunityTopContributors {
    members: CommunityTopContributor[];
    total: number;
}

export interface CommunityTopContributor {
    user_id: number;
    avatar_data: UserEventAvatar;
    name: string;
    points: number;
}

export interface CommunityUpcomingEvent {
    event_id: number;
    event_cid: string;
    title: string;
    slug: string;
    url: string;
    starts_at: string;
    ends_at: string;
}

export interface CommunityUpcomingEvents {
    events: CommunityUpcomingEvent[];
    total: number;
}

export interface CommunityBirthdays {
    members: CommunityBirthday[];
    total: number;
}

export interface CommunityStats {
    total_members: number;
    active_members: number;
    engagement_rate: number;
}

export interface CommunityDashboardData {
    community_id: number;
    stats: CommunityStats;
    newest_members: CommunityNewestMembers;
    birthdays: CommunityBirthdays;
    top_contributors: CommunityTopContributors;
    upcoming_events: CommunityUpcomingEvents;
}

