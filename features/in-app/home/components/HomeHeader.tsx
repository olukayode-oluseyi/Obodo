import NotificationIcon from "@/assets/icons/home-notification.svg";
import Logo from "@/assets/icons/logo.svg";
import { Text, XView, YView } from "@/theme/component";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
const HomeHeader = () => {
  return (
    <YView
    paddingHorizontal={"x16"}
      flexDirection={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <XView>
        <Logo />
      </XView>
      <XView flexDirection={"row"} alignItems={"center"} gap={"s"}>
        <TouchableOpacity hitSlop={10}>
          <XView
            height={40}
            borderRadius={"bottonPrimaryRadius"}
            paddingLeft={"s"}
            flexDirection={"row"}
            paddingVertical={"s"}
            paddingRight={"x16"}
            backgroundColor={"white"}
          >
            <NotificationIcon fill={'#707075'} />

            <Text
              lineHeight={22}
              fontSize={15}
              fontFamily={"InterRegular"}
              color={"text"}
            >
              10
            </Text>
          </XView>
        </TouchableOpacity>

        <TouchableOpacity hitSlop={10}>
          <Image
            contentFit="cover"
            style={{
              height: 40,
              width: 40,
            }}
            source={require("@/assets/images/Avatar.png")}
          />
        </TouchableOpacity>
      </XView>
    </YView>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({});
