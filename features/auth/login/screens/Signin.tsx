import GoogleIcon from "@/assets/icons/google.svg";
import { Button } from "@/components/ui/common/button";
import Textfield from "@/components/ui/common/inputs/Textfield";
import AuthScreenLayout from "@/components/ui/common/layouts/AuthScreenLayout";
import { useLogin } from "@/hooks/useAuthMutations";
import { LoginInput, loginSchema } from "@/services/schemas/auth.schema";
import { YView } from "@/theme/component";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import React from "react";
import { useForm } from "react-hook-form";
import { Alert, ScrollView, StyleSheet } from "react-native";
import AlreadyHaveAccount from "../../ui/common/AlreadyHaveAccount";
import OrContinue from "../../ui/common/OrContinue";

const Signin = () => {

  const router = useRouter();
  const { mutate: login, isPending, isError, error } = useLogin();
  
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "useobodo@gmail.com",
      password: "xxxxx",
  
    },
  });

  const onSubmit = (data: LoginInput) => {
    login(data, {
    
      onError: (error) => {
        console.log('Login error', error);
        Alert.alert('Login Failed', error.message);
      },
    });
  };
  return (
    <AuthScreenLayout title="Login">
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
          <Textfield
            control={control}
            name="password"
            label="Password"
            placeholder=""
          />

          <Button
            title="Login"
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

        <AlreadyHaveAccount type="login" />
      </ScrollView>
    </AuthScreenLayout>
  );
};

export default Signin;

const styles = StyleSheet.create({});
