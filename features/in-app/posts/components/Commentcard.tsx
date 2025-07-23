import OptionsIcon from "@/assets/icons/h-options.svg";
import { Text, XView, YView } from "@/theme/component";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import PostActions from "./PostActions";

const Commentcard = () => {
  return (
    <XView
      gap={"m"}
      paddingHorizontal={"x16"}
      flexDirection={"row"}
      alignItems={"flex-start"}
      width={"100%"}
    >
      <XView>
        <Image
          style={{
            height: 40,
            width: 40,
          }}
          source={require("@/assets/images/Avatar (3).png")}
        />
      </XView>
      <YView flex={1} width={"100%"} gap={"m"}>
        <YView gap={'xs'} flex={1}>
          <XView
            flex={1}
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <XView gap={"xs"} flexDirection={"row"} alignItems={"center"}>
              <Text
                fontFamily={"InterBold"}
                fontSize={14}
                lineHeight={20}
                color={"text"}
              >
                Karina Alagoa
              </Text>
              <YView
                height={2}
                width={2}
                backgroundColor={"ProductBlack400"}
                borderRadius={"bottonPrimaryRadius"}
              />
              <Text fontSize={14} lineHeight={20} color={"ProductBlack400"}>
                Dec 22, 2022
              </Text>
            </XView>
            <TouchableOpacity hitSlop={20}>
              <OptionsIcon />
            </TouchableOpacity>
          </XView>
          <YView flex={1}>
            <Text fontSize={14} lineHeight={20} color={"text"}>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs.
            </Text>
          </YView>
        </YView>

        <PostActions />
      </YView>
    </XView>
  );
};

export default Commentcard;

const styles = StyleSheet.create({});
