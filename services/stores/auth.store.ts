import * as SecureStore from "expo-secure-store";
import { create } from "zustand";
import { User } from "../types";
import { LoginResponse, UserDetailsResponse } from "../types/dto/auth.dto";

type AuthState = {
  user: User | null;
  setUser: (user: UserDetailsResponse) => void;
  token: string | null;
  userCommunities: any[] | null;
  setUserCommunities: (userCommunities: any[]) => void;
  setToken: (token: string) => void;
  logout: () => void;
  initializeAuth: () => Promise<void>;
  login: (user: LoginResponse) => Promise<void>;
  isLoggedIn: boolean;
  isInitialized: boolean;
};

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  isInitialized: false,
  user: null,
  token: null,
  userCommunities: null,
  setUserCommunities: (userCommunities: any[]) => {
    set({ userCommunities });
  },
  setUser: (user: UserDetailsResponse) => {
    SecureStore.setItemAsync("user", JSON.stringify(user.data));
    set({ user: user.data });
  },
  setToken: async (token: string) => {
    await SecureStore.setItemAsync("token", token);
    set({ token });
  },
  logout: async () => {
    await SecureStore.deleteItemAsync("token");
    await SecureStore.deleteItemAsync("user");
    set({ token: null, user: null, isLoggedIn: false });
  },
  login: async (user: LoginResponse): Promise<void> => {
   
    await SecureStore.setItemAsync("token", user.data.access_token);
    //await SecureStore.setItemAsync("user", JSON.stringify(user));
    set(() => ({ isLoggedIn: true, token: user.data.access_token }));
  },
  initializeAuth: async () => {
    const token = await SecureStore.getItemAsync("token");
    const userString = await SecureStore.getItemAsync("user");
    const refreshToken = await SecureStore.getItemAsync("refresh_token");

    console.log("token:", token);
   
    if (refreshToken) {
      //set({ refreshToken, isLoggedIn: true });
    }

    if (!token) {
      set({  isLoggedIn: false, isInitialized: true });
      return;
    }

    if (userString) {
      try {
        const user = JSON.parse(userString);
        set({ user });
      } catch {
        // fail silently
      }
    }
    // At this point, token exists (we returned early if it didn't)
    set({ token, isLoggedIn: true, isInitialized: true });
  },
}));
