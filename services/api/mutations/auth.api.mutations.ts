import {
  ForgotPasswordInput,
  LoginInput,
  RegisterInput,
  ResetPasswordInput,
} from "@/services/schemas/auth.schema";
import { LoginResponse } from "@/services/types/dto/auth.dto";
import api from "../axios.client.api";

// Types for API responses
export interface AuthResponse {
  success: boolean;
  data: {
    user: {
      id: string;
      email: string;
      fullname: string;
      avatar?: string;
    };
    token: string;
    refreshToken?: string;
  };
  message: string;
}

export interface MessageResponse {
  success: boolean;
  message: string;
}

/**
 * Login user
 * @param credentials - User login credentials (email and password)
 * @returns Authentication response with user data and token
 */
export const loginUser = async (
  credentials: LoginInput
): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>("/users/login", credentials);
  return response.data;
};

/**
 * Register new user
 * @param userData - User registration data
 * @returns Authentication response with user data and token
 */
export const registerUser = async (
  userData: RegisterInput
): Promise<AuthResponse> => {
  // Remove confirmPassword before sending to API
  const { confirmPassword, ...registrationData } = userData;

  const response = await api.post<AuthResponse>(
    "/auth/register",
    registrationData
  );

  return response.data;
};

/**
 * Request password reset email
 * @param data - Email to send password reset link
 * @returns Message response confirming email sent
 */
export const forgotPassword = async (
  data: ForgotPasswordInput
): Promise<MessageResponse> => {
  const response = await api.post<MessageResponse>(
    "/auth/forgot-password",
    data
  );
  return response.data;
};

/**
 * Reset password with token
 * @param data - New password and confirmation
 * @param token - Password reset token from email
 * @returns Message response confirming password reset
 */
export const resetPassword = async (
  data: ResetPasswordInput,
  token: string
): Promise<MessageResponse> => {
  // Remove confirmPassword before sending to API
  const { confirmPassword, ...resetData } = data;

  const response = await api.post<MessageResponse>("/auth/reset-password", {
    ...resetData,
    token,
  });

  return response.data;
};

/**
 * Logout user
 * @returns Message response confirming logout
 */
export const logoutUser = async (): Promise<MessageResponse> => {
  const response = await api.post<MessageResponse>("/auth/logout");


  return response.data;
};

/**
 * Verify user email with token
 * @param token - Email verification token
 * @returns Message response confirming email verification
 */
export const verifyEmail = async (token: string): Promise<MessageResponse> => {
  const response = await api.post<MessageResponse>("/auth/verify-email", {
    token,
  });
  return response.data;
};

/**
 * Refresh authentication token
 * @param refreshToken - Refresh token
 * @returns New authentication token
 */
export const refreshAuthToken = async (
  refreshToken: string
): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>("/auth/refresh-token", {
    refreshToken,
  });



  return response.data;
};

export default api;
