export interface UserEventLocation {
    type: number;
    label: 'Virtual' | 'In-Person';
    icon: string;
}
export interface UserEventAvatar {
    has_avatar: boolean;
    avatar_url: string;
    size: string;
    shape: string;
    name: string;
}  


export interface UserEventRegistrants {
    count: number;
    avatars: UserEventAvatar[];
}


export type EventPricing = 'Free' | 'Paid';

export interface UserEvent {
    cid: number;
    id: number;
    title: string;
    slug: string;
    url: string;
    starts_at: string;
    ends_at: string;
    community_username: string;
    community_cid: string;
    cover: string;
    location: UserEventLocation;
    pricing: EventPricing;
    views: number;
    registrants: UserEventRegistrants;


}