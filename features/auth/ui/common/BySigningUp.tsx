import { AppTheme } from "@/theme";
import { Text, XView } from "@/theme/component";
import { useTheme } from "@shopify/restyle";
import React from "react";
import { StyleSheet } from "react-native";

const BySigningUp = () => {
    const theme = useTheme<AppTheme>()
  return (
    <XView alignItems={"center"}>
      <Text
        variant={"textDefault"}
        fontSize={14}
        lineHeight={19}
        textAlign={"center"}
        style={{
          width: "90%",
          color: theme.colors.ProductBlack500
        }}
      >
        By signing up you agree to our{" "}
        <Text textDecorationLine={"underline"} color={'text'} fontSize={14}>
          Terms of Use
        </Text>{" "}
        and{" "}
        <Text textDecorationLine={"underline"} color={'text'} fontSize={14}>
          Privacy Policy.
        </Text>{" "}
      </Text>
    </XView>
  );
};

export default BySigningUp;

const styles = StyleSheet.create({});
