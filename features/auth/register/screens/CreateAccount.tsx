import GoogleIcon from "@/assets/icons/google.svg";
import { Button } from "@/components/ui/common/button";
import Textfield from "@/components/ui/common/inputs/Textfield";
import AuthScreenLayout from "@/components/ui/common/layouts/AuthScreenLayout";
import { useRegister } from "@/hooks/useAuthMutations";
import { RegisterInput, registerSchema } from "@/services/schemas/auth.schema";
import { YView } from "@/theme/component";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { Alert, ScrollView, StyleSheet } from "react-native";
import AlreadyHaveAccount from "../../ui/common/AlreadyHaveAccount";
import BySigningUp from "../../ui/common/BySigningUp";
import OrContinue from "../../ui/common/OrContinue";

const CreateAccount = () => {
  const { mutate: register, isPending } = useRegister();
  
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterInput) => {
    register(data, {
      onError: (error) => {
        Alert.alert('Registration Failed', error.message);
      },
    });
  };

  return (
    <AuthScreenLayout title="Create account">
      <ScrollView
        contentContainerStyle={{
          gap: 24,
        }}
      >
        <YView gap={"x16"}>
          <Textfield
            control={control}
            name="fullname"
            label="Fullname"
            placeholder="e.g. Amina Smith"
          />
          <Textfield
            control={control}
            name="email"
            label="E-mail address"
            placeholder="e.g. amina@smith.com"
          />
          <Textfield
            control={control}
            name="password"
            label="Password"
            placeholder=""
          />
          <Textfield
            control={control}
            name="confirmPassword"
            label="Confirm Password"
            placeholder=""
          />
          <BySigningUp />
          <Button 
            title="Sign up" 
            variant="primary" 
            onPress={handleSubmit(onSubmit)}
            loading={isPending}
            disabled={isPending}
          />
          <OrContinue />
          <Button
            icon={<GoogleIcon />}
            variantText="buttonOutline"
            title="Google"
            variant="outline"
          />
        </YView>

        <AlreadyHaveAccount type="signup" />
      </ScrollView>
    </AuthScreenLayout>
  );
};

export default CreateAccount;

const styles = StyleSheet.create({});
