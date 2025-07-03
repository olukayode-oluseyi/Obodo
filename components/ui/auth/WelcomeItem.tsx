import { Text, XView, YView } from "@/theme/component";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface WelcomeItemProps {
  item: { id: number; title: string; description: string; image: string };
}
const WelcomeItem: React.FC<WelcomeItemProps> = ({ item }) => {
  const { height, width } = useWindowDimensions();
  const { top, bottom } = useSafeAreaInsets();
  return (
    <YView
      //   flex={1}
      gap={"xl"}
      justifyContent={"center"}
      alignContent={"center"}
      paddingHorizontal={"ml"}
      style={{
         paddingTop: top + 100,
      }}
    >
      <YView gap={"s"} alignItems={"center"}>
        <Text
          color={"text"}
          textAlign={"center"}
          fontFamily={"MigraExtraBold"}
          style={{
            fontSize: 32,
            lineHeight: 40,
          }}
        >
          {item.title}
        </Text>
        <Text
          color={"text"}
          textAlign={"center"}
          fontFamily={"InterRegular"}
          style={{
            fontSize: 16,
            lineHeight: 22,
            width: 303,
          }}
        >
          {item.description}
        </Text>
      </YView>

      <XView alignItems={"center"}>
        <Image
          source={item.image}
          contentFit="contain"
          style={{
            width: 303,
            height: 202,
          }}
        />
      </XView>
    </YView>
  );
};

export default WelcomeItem;

const styles = StyleSheet.create({});
