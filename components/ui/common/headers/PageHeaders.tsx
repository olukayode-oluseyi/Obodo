import { Text, XView } from "@/theme/component";
import React, { ReactNode } from "react";
import { StyleSheet } from "react-native";

const PageHeaders = ({
  title,
  rightComponent,
}: {
  title: string;
  rightComponent?: ReactNode;
}) => {
  return (
    <XView
      flexDirection={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      backgroundColor={"transparent"}
    >
      <Text
        fontFamily={"InterBold"}
        fontSize={24}
        lineHeight={36}
        color={"text"}
      >
        {title}
      </Text>
      {rightComponent}
    </XView>
  );
};

export default PageHeaders;

const styles = StyleSheet.create({});
