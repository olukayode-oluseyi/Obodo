import { Text, XView } from "@/theme/component";
import React from "react";
import { StyleSheet } from "react-native";

const OrContinue = () => {
  return (
    <XView  gap={"x16"} flexDirection={'row'} alignItems={'center'}>
      <XView height={1} backgroundColor={'borderLight'}   flex={1}/>
      <Text
        fontSize={15}
        color={"ProductBlack500"}
        fontFamily={"InterRegular"}
        lineHeight={16}
      >
        or continue with
      </Text>
      <XView height={1} backgroundColor={'borderLight'} flex={1}/>
    </XView>
  );
};

export default OrContinue;

const styles = StyleSheet.create({});
