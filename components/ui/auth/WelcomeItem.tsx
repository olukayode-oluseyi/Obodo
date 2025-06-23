import { Box, Text } from "@/theme/component";
import React from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface WelcomeItemProps {
  item: { id: number; title: string };
}
const WelcomeItem: React.FC<WelcomeItemProps> = ({ item }) => {
  const { height } = useWindowDimensions();
  const { top, bottom } = useSafeAreaInsets();
  return (
    <Box
      //   flex={1}
      paddingHorizontal={"m"}
      style={{
        paddingTop: top + 100,
      }}
    >
      <Text
        color={"text"}
        fontFamily={"InterBold"}
        style={{
          fontSize: 24,
          lineHeight: 32,
        }}
      >
        {item.title}
      </Text>
    </Box>
  );
};

export default WelcomeItem;

const styles = StyleSheet.create({});
