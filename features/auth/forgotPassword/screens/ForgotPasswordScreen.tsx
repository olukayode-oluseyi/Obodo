import { Button } from "@/components/ui/common/button";
import Textfield from "@/components/ui/common/inputs/Textfield";
import AuthScreenLayout from "@/components/ui/common/layouts/AuthScreenLayout";
import { YView } from "@/theme/component";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import AlreadyHaveAccount from "../../ui/common/AlreadyHaveAccount";
const ForgotPasswordScreen = () => {
  return (
    <AuthScreenLayout title="Forgot Password">
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

          <Button title="Submit" variant="primary" />
        </YView>

        <AlreadyHaveAccount type="login" />
      </ScrollView>
    </AuthScreenLayout>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({});
