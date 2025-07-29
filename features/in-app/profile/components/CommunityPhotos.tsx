import { Text, XView, YView } from "@/theme/component";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, useWindowDimensions } from "react-native";

const CommunityPhotos = () => {
  const { width } = useWindowDimensions();
  const imageWidth = (width - 64 - 12) / 2;
  return (
    <YView backgroundColor={"white"} paddingBottom={"l"} borderRadius={"l"}>
      <XView paddingHorizontal={"x16"} paddingTop={"x16"} paddingBottom={"m"}>
        <Text variant={"homeSubHeading"} lineHeight={22}>
          Photos
        </Text>
      </XView>
      <YView gap={"m"} alignItems={"center"}>
        <XView
          flexDirection={"row"}
          gap={"m"}
          alignItems={"center"}
          paddingHorizontal={"x16"}
        >
          <Image
        contentFit="fill"
            style={{
              height: 149.5,
              width: imageWidth,
              borderRadius: 12,
            }}
            source={require("@/assets/images/Obodo Teaser 4.png")}
          />
          <Image
               contentFit="fill"
            style={{
              height: 149.5,
              width: imageWidth,
              borderRadius: 12,
            }}
            source={require("@/assets/images/Obodo Teaser 2.png")}
          />
        </XView>
        <XView
          flexDirection={"row"}
          gap={"m"}
          alignItems={"center"}
          paddingHorizontal={"x16"}
        >
          <Image
           contentFit="cover"
            style={{
              height: 149.5,
              width: imageWidth,
              borderRadius: 12,
            }}
            source={require("@/assets/images/Obodo Teaser 3.png")}
          />
          <Image
            contentFit="cover"
            style={{
              height: 149.5,
              width: imageWidth,
              borderRadius: 12,
            }}
            source={require("@/assets/images/Obodo Teaser 1.1 1.png")}
          />
        </XView>
      </YView>
    </YView>
  );
};

export default CommunityPhotos;

const styles = StyleSheet.create({});
