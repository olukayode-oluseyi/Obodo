import {
  ForgotPasswordInput,
  LoginInput,
  RegisterInput,
  ResetPasswordInput,
} from "@/services/schemas/auth.schema";
import { useAuthStore } from "@/services/stores/auth.store";
import { LoginResponse } from "@/services/types/dto/auth.dto";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "expo-router";
import { Alert } from "react-native";
import {
  AuthResponse,
  forgotPassword,
  loginUser,
  logoutUser,
  MessageResponse,
  registerUser,
  resetPassword,
  verifyEmail,
} from "../services/api/mutations/auth.api.mutations";

/**
 * Hook for login mutation
 * @returns useMutation result for login
 */
export const useLogin = () => {
  const router = useRouter();

  return useMutation<LoginResponse, Error, LoginInput>({
    mutationFn: loginUser,
    onSuccess: async (data) => {
      // Handle successful login
      console.log("Login successful:", data);
      console.log("data", data.data);
      await useAuthStore.getState().login(data);

      //const userDetails = await useGetUserDetails();

      // You can store user data in state management (Zustand, Context, etc.)
      // Navigate to home screen

      router.replace("/(app)/(home)/dashboard");
    },
    onError: (error) => {
      console.log("Login error", error);
      Alert.alert("Login Failed", error.message);
      console.warn("Login error:", error.message);
    },
  });
};

/**
 * Hook for registration mutation
 * @returns useMutation result for registration
 */
export const useRegister = () => {
  const router = useRouter();

  return useMutation<AuthResponse, Error, RegisterInput>({
    mutationFn: registerUser,
    onSuccess: (data) => {
      // Handle successful registration
      console.log("Registration successful:", data);
      // You can store user data in state management
      // Navigate to onboarding or home screen
      router.replace("/(onboarding)/community-setup");
    },
    onError: (error) => {
      console.error("Registration error:", error.message);
    },
  });
};

/**
 * Hook for forgot password mutation
 * @returns useMutation result for forgot password
 */
export const useForgotPassword = () => {
  return useMutation<MessageResponse, Error, ForgotPasswordInput>({
    mutationFn: forgotPassword,
    onSuccess: (data) => {
      console.log("Password reset email sent:", data.message);
      // You can show a success message to the user
    },
    onError: (error) => {
      console.error("Forgot password error:", error.message);
    },
  });
};

/**
 * Hook for reset password mutation
 * @returns useMutation result for reset password
 */
export const useResetPassword = () => {
  const router = useRouter();

  return useMutation<
    MessageResponse,
    Error,
    { data: ResetPasswordInput; token: string }
  >({
    mutationFn: ({ data, token }) => resetPassword(data, token),
    onSuccess: (data) => {
      console.log("Password reset successful:", data.message);
      // Navigate to login screen
      router.replace("/(auth)/login");
    },
    onError: (error) => {
      console.error("Reset password error:", error.message);
    },
  });
};

/**
 * Hook for logout mutation
 * @returns useMutation result for logout
 */
export const useLogout = () => {
  const router = useRouter();

  return useMutation<MessageResponse, Error, void>({
    mutationFn: logoutUser,
    onSuccess: () => {
      console.log("Logout successful");
      // Clear user data from state management
      // Navigate to welcome/login screen
      router.replace("/(auth)/welcome");
    },
    onError: (error) => {
      console.error("Logout error:", error.message);
    },
  });
};

/**
 * Hook for email verification mutation
 * @returns useMutation result for email verification
 */
export const useVerifyEmail = () => {
  const router = useRouter();

  return useMutation<MessageResponse, Error, string>({
    mutationFn: verifyEmail,
    onSuccess: (data) => {
      console.log("Email verified:", data.message);
      // Navigate to home screen or show success message
      router.replace("/(app)/(tabs)");
    },
    onError: (error) => {
      console.error("Email verification error:", error.message);
    },
  });
};
