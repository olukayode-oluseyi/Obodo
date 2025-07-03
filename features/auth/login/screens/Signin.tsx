import GoogleIcon from "@/assets/icons/google.svg";
import { Button } from "@/components/ui/common/button";
import Textfield from "@/components/ui/common/inputs/Textfield";
import AuthScreenLayout from "@/components/ui/common/layouts/AuthScreenLayout";
import { YView } from "@/theme/component";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import AlreadyHaveAccount from "../../ui/common/AlreadyHaveAccount";
import OrContinue from "../../ui/common/OrContinue";
const Signin = () => {
  const router = useRouter();
  return (
    <AuthScreenLayout title="Login">
      <ScrollView
        contentContainerStyle={{
          gap: 24,
        }}
      >
        <YView gap={"x16"}>
          <Textfield
            label="E-mail address"
            placeholder="e.g. amina@smith.com"
          />
          <Textfield label="Password" placeholder="" />

          <Button
            title="Login"
            variant="primary"
            onPress={() =>
              router.push({
                pathname: "/(onboarding)/community-setup",
              })
            }
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
