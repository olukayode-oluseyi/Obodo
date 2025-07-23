import { Text, YView } from "@/theme/component";
import React from "react";
import { StyleSheet } from "react-native";

const PageHeaders = ({title}: {title: string}) => {
  return (
    <YView backgroundColor={'transparent'} >
      <Text
        fontFamily={"InterBold"}
        fontSize={24}
        lineHeight={36}
        color={"text"}
      >
      {title}
      </Text>
    </YView>
  );
};

export default PageHeaders;

const styles = StyleSheet.create({});
