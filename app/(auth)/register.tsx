import { Box, Text } from "@/theme/component";
import { useRouter } from "expo-router";
import React from "react";
import { TouchableOpacity } from "react-native";

const Register = () => {
  const router = useRouter();
  return (
    <Box
      flex={1}
      bg={"background"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Text
        textAlign={"center"}
        style={{
          fontSize: 24,
          fontWeight: "700",
          lineHeight: 32,
  
        }}
      >
        WELCOME TO AUDIO MIND REGISTER
      </Text>

      <TouchableOpacity
        onPress={() => {
          router.back();
        }}
      >
        <Text
          style={{

          }}
        >
          Get Started
        </Text>
      </TouchableOpacity>
    </Box>
  );
};

export default Register;


