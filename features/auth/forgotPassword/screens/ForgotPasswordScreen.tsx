import { Button } from "@/components/ui/common/button";
import Textfield from "@/components/ui/common/inputs/Textfield";
import AuthScreenLayout from "@/components/ui/common/layouts/AuthScreenLayout";
import { useForgotPassword } from "@/hooks/useAuthMutations";
import { ForgotPasswordInput, forgotPasswordSchema } from "@/services/schemas/auth.schema";
import { YView } from "@/theme/component";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { Alert, ScrollView, StyleSheet } from "react-native";
import AlreadyHaveAccount from "../../ui/common/AlreadyHaveAccount";

const ForgotPasswordScreen = () => {
  const { mutate: sendResetEmail, isPending } = useForgotPassword();
  
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordInput>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = (data: ForgotPasswordInput) => {
    sendResetEmail(data, {
      onSuccess: (response) => {
        Alert.alert('Success', response.message || 'Password reset email sent! Please check your inbox.');
      },
      onError: (error) => {
        Alert.alert('Error', error.message);
      },
    });
  };

  return (
    <AuthScreenLayout title="Forgot Password">
      <ScrollView
        contentContainerStyle={{
          gap: 24,
        }}
      >
        <YView gap={"x16"}>
          <Textfield
            control={control}
            name="email"
            label="E-mail address"
            placeholder="e.g. amina@smith.com"
          />

          <Button 
            title="Submit" 
            variant="primary" 
            onPress={handleSubmit(onSubmit)}
            loading={isPending}
            disabled={isPending}
          />
        </YView>

        <AlreadyHaveAccount type="login" />
      </ScrollView>
    </AuthScreenLayout>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({});
