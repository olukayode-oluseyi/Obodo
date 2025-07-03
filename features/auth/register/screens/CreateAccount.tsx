import GoogleIcon from "@/assets/icons/google.svg";
import { Button } from "@/components/ui/common/button";
import Textfield from "@/components/ui/common/inputs/Textfield";
import AuthScreenLayout from "@/components/ui/common/layouts/AuthScreenLayout";
import { YView } from "@/theme/component";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import AlreadyHaveAccount from "../../ui/common/AlreadyHaveAccount";
import BySigningUp from "../../ui/common/BySigningUp";
import OrContinue from "../../ui/common/OrContinue";
const CreateAccount = () => {
  return (
    <AuthScreenLayout title="Create account">
      <ScrollView
        contentContainerStyle={{
          gap: 24,
        }}
      >
        <YView gap={"x16"}>
          <Textfield label="Fullname" placeholder="e.g. Amina Smith" />
          <Textfield
            label="E-mail address"
            placeholder="e.g. amina@smith.com"
          />
          <Textfield label="Password" placeholder="" />
          <BySigningUp />
          <Button title="Sign up" variant="primary" />
          <OrContinue />
          <Button
            icon={<GoogleIcon />}
            variantText="buttonOutline"
            title="Google"
            variant="outline"
          />
        </YView>

        <AlreadyHaveAccount type='signup' />
      </ScrollView>
    </AuthScreenLayout>
  );
};

export default CreateAccount;

const styles = StyleSheet.create({});
