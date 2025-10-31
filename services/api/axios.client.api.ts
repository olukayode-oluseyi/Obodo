import axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import * as SecureStore from 'expo-secure-store';
import { useAuthStore } from '../stores/auth.store';
/**
 * API Configuration
 * TODO: Move this to environment variables or constants
 */
const API_CONFIG = {
  baseURL:  'https://api.useobodo.com/v1',
  timeout: 30000, // 30 seconds
  headers: {
    'Content-Type': 'application/json',
  },
};

/**
 * Create Axios instance with base configuration
 */
const api: AxiosInstance = axios.create(API_CONFIG);

/**
 * Token management utilities
 * TODO: Integrate with your secure storage solution (e.g., expo-secure-store)
 */
// let tokenStore: string | null =  await SecureStore.getItemAsync("token");
// let refreshTokenStore: string | null = await SecureStore.getItemAsync("refresh_token");

// export const setAuthToken = (token: string | null) => {


//   tokenStore = token;
// };

export const setRefreshToken = async(token: string | null): Promise<void> => {
   //await SecureStore.setItemAsync("refresh_token", token);
};

export const getAuthToken = async(): Promise<string | null> => {
  return await SecureStore.getItemAsync("token");
};

export const getRefreshToken = async(): Promise<string | null> => {
  //return refreshTokenStore;
  return await SecureStore.getItemAsync("refresh_token");
};

export const clearTokens = async(): Promise<void> => {
  await SecureStore.deleteItemAsync("token");
  await SecureStore.deleteItemAsync("refresh_token");
  // tokenStore = null;
  // refreshTokenStore = null;
};

/**
 * Request Interceptor
 * Adds authentication token to all requests
 */
api.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const token = await getAuthToken();
    const refreshToken = await getRefreshToken();
    console.log("token", token, refreshToken);
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    if (refreshToken && config.headers) {
      config.headers.Authorization = `Bearer ${refreshToken}`;
    }

    // Log requests in development
    if (__DEV__) {
      console.log(`🚀 API Request: ${config.method?.toUpperCase()} ${config.baseURL}${config.url}`);
    }

    return config;
  },
  (error: AxiosError) => {
    if (__DEV__) {
      //console.error('❌ Request Error:', error);
    }
    return Promise.reject(error);
  }
);

/**
 * Response Interceptor
 * Handles responses and errors globally
 */
api.interceptors.response.use(
  (response) => {
    // Log successful responses in development
    if (__DEV__) {
      console.log(`✅ API Response: ${response.config.method?.toUpperCase()} ${response.config.url}`, response.status);
    }
    return response;
  },
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };

    if (__DEV__) {
      //console.error('❌ API Error:', error.response?.status, error.response?.data);
    }

    // Handle 401 Unauthorized - Token expired
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = await getRefreshToken();
        
        console.log("refreshTokenxx", refreshToken);
        if (refreshToken) {
          // Attempt to refresh the token
          const response = await axios.post(`${API_CONFIG.baseURL}/auth/refresh-token`, {
            refreshToken,
          });

          if (response.data.success && response.data.data.token) {
            const newToken = response.data.data.token;
            useAuthStore.getState().setToken(newToken);

            // Update the authorization header with new token
            if (originalRequest.headers) {
              originalRequest.headers.Authorization = `Bearer ${newToken}`;
            }

            // Retry the original request with new token
            return api(originalRequest);
          }
        }
      } catch (refreshError) {
        // Refresh token failed - clear tokens and redirect to login
        clearTokens();
        // TODO: Trigger logout/redirect to login screen
        // You might want to emit an event or use a navigation service here
        return Promise.reject(refreshError);
      }
    }

    // Handle 403 Forbidden
    if (error.response?.status === 403) {
      // TODO: Handle forbidden access (e.g., show permission error)
      console.warn('⛔ Access Forbidden');
    }

    // Handle 404 Not Found
    if (error.response?.status === 404) {
      console.warn('🔍 Resource Not Found');
    }

    // Handle 500+ Server Errors
    if (error.response?.status && error.response.status >= 500) {
      console.warn('🔥 Server Error');
      // TODO: You might want to show a generic error message to the user
    }

    // Handle Network Errors
    if (!error.response) {
      //console.warn('🌐 Network Error - No response received');
      // TODO: Show network error message to user
    }

    return Promise.reject(error);
  }
);

export default api;

