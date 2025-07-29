import LinkIcon from "@/assets/icons/link.svg";
import { Text, XView, YView } from "@/theme/component";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
const CommunityMembers = () => {
  return (
    <YView backgroundColor={"white"} paddingBottom={'l'} borderRadius={"l"} >
      <XView paddingHorizontal={"x16"} paddingTop={"x16"} paddingBottom={"m"}>
        <Text variant={"homeSubHeading"} lineHeight={22}>
          Members
        </Text>
      </XView>
      <YView gap={'m'} paddingHorizontal={'x16'}>
        <XView flexDirection={"row"} gap={"m"} alignItems={"center"}>
          <Image
            source={require("@/assets/images/PPs.png")}
            style={{
              width: 84,
              height: 32,
            }}
          />
          <Text>200 members</Text>
        </XView>

        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 12,
          }}
        >
          <YView
            backgroundColor={"ProductBlack100"}
            borderRadius={"bottonPrimaryRadius"}
            justifyContent={"center"}
            alignItems={"center"}
            height={32}
            width={32}
          >
            <LinkIcon />
          </YView>
          <Text lineHeight={20}>Invite members</Text>
        </TouchableOpacity>
      </YView>
    </YView>
  );
};

export default CommunityMembers;

const styles = StyleSheet.create({});
