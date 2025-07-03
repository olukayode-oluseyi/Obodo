import { AppTheme } from "@/theme";
import { Text, XView } from "@/theme/component";
import { useTheme } from "@shopify/restyle";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

interface AlreadyHaveAccountProps {
  type: "login" | "signup";
}
const AlreadyHaveAccount: React.FC<AlreadyHaveAccountProps> = ({ type }) => {
  const theme = useTheme<AppTheme>();
  const router = useRouter();
  return (
    <XView
      alignItems={"center"}
      flexDirection={"row"}
      justifyContent={"center"}
    >
      <Text textAlign={"center"} variant={"textDefault"} lineHeight={22}>
        {type === "signup"
          ? "Already have an account?"
          : "Dont have an account?"}{" "}
      
      </Text>
      <TouchableOpacity
        onPress={() =>
          router.push({
            pathname: type === "login" ? "/(auth)/register" : "/(auth)/login",
          })
        }
      >
        <Text
          variant={"textDefault"}
          fontFamily={"InterBold"}
          lineHeight={22}
          color={"primary"}
        >
          {type === "login" ? "Create account" : "Login"}
        </Text>
      </TouchableOpacity>
    </XView>
  );
};

export default AlreadyHaveAccount;

const styles = StyleSheet.create({});
