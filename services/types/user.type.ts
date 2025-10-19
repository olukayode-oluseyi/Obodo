





export enum UserType {
    ADMIN = "admin",
    USER = "user",
    MODERATOR = "moderator",
    SUPER_ADMIN = "super_admin",
}

/**
 * User object returned from API
 */
export interface User {

    id: number;
    cid: number;
    firstname: string;
    lastname: string;
    fullname: string;
    bio: string;
    city_id: number;
    dob: {
      formatted: string;
      year: string;
      month: string;
      day: string;
    };
    call_code: number;
    mobile_number: string;
    avatar_data: {
      has_avatar: boolean;
      avatar_url: string;
      size: string;
      shape: string;
      name: string;
    };
    active_community_id: number | null;
    email: string;
    email_is_verified: boolean;
    user_type: UserType;
    notifications_last_seen_at: string;
  };


//     "id": 1,
//     "cid": 1719792635,
//     "firstname": "Andrew",
//     "lastname": "Diete-Koki",
//     "fullname": "Andrew Diete-Koki",
//     "bio": "Follower of Jesus. Modelling The Life of Love\nThe UX Samurai",
//     "city_id": 76749,
//     "dob": {
//         "formatted": "Dec 2",
//         "year": "1988",
//         "month": "12",
//         "day": "02"
//     },
//     "call_code": 161,
//     "mobile_number": "8068691884",
//     "avatar_data": {
//         "has_avatar": true,
//         "avatar_url": "https://app.useobodo.com/cdn/users/1719792635/avatar_1719792635.png",
//         "size": "lg",
//         "shape": "square",
//         "name": "Andrew Diete-Koki"
//     },
//     "active_community_id": null,
//     "email": "andrew@plogged.com",
//     "email_is_verified": true,
//     "user_type": "admin",
//     "notifications_last_seen_at": "2025-09-14 11:44:01"
// }



  


  
  