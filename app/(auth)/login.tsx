import { Box, Text } from "@/theme/component";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

const Login = () => {
  const router = useRouter();
  return (
    <Box
      flex={1}
      bg={"background"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Text
      color={'text'}
        textAlign={"center"}
        style={{
          fontSize: 24,
          fontWeight: "700",
          lineHeight: 32,
      
        }}
      >
        WELCOME TO AUDIO MIND LOGIN
      </Text>

      <TouchableOpacity
        onPress={() => {
          router.navigate("/(auth)/register");
        }}
      >
        <Text
        color={'text'}
          
        >
          Get Started
        </Text>
      </TouchableOpacity>
    </Box>
  );
};

export default Login;

const styles = StyleSheet.create({});
