import { User } from "../user.type";

/**
 * Simple message response
 */
export interface MessageResponse {
  success: boolean;
  message: string;
}

export interface LoginResponse {
  // Login successful: {"data": {"access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1c2VvYm9kby5jb20iLCJhdWQiOiJ1c2VvYm9kby5jb20iLCJpYXQiOjE3NjA4NTU5MTYsImV4cCI6MTc2MTQ2MDcxNiwic3ViIjoyMjUsInVzZXJfY2lkIjoiMTc1MTUyNzQ4MCJ9.lbFLHvfHscUzihbBSKvHZ6o0i5ubq9SDNuGuPSocca4", "access_token_expires_at": null, "channel": "direct", "oauth_uid": "422417955184006152318", "provider": "obodo", "refresh_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjIyNSwiaWF0IjoxNzYwODU1OTE2LCJleHAiOjE3NjM0NDc5MTYsInVzZXJfY2lkIjoiMTc1MTUyNzQ4MCJ9.QIkTWMIa3CM3BLaX_2Yp7RRJvRMUGAl4zf1njrv7-DY", "refresh_token_expires_at": 1763447916, "user_cid": "1751527480", "user_id": 225}, "status": "success"}

  data: {
    access_token: string;
    access_token_expires_at: string;
    channel: string;
    oauth_uid: string;
    provider: string;
    refresh_token: string;
    refresh_token_expires_at: string;
    user_cid: string;
    user_id: string;
  };
}


export interface UserDetailsResponse {
    data: User;
    message: string;
    status: string;
}