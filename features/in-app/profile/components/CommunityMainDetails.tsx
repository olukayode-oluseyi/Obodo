import CalenderIcon from "@/assets/icons/calender2.svg";
import CommunityIcon from "@/assets/icons/community-icon.svg";
import GlobeIcon from "@/assets/icons/globe.svg";
import LocationIcon from "@/assets/icons/location.svg";
import { Button } from "@/components/ui/common/button";
import { Text, XView, YView } from "@/theme/component";
import React from "react";
import { StyleSheet } from "react-native";

const CommunityMainDetails = () => {
  return (
    <YView
      backgroundColor={"white"}
      borderRadius={"l"}
      alignItems={"center"}
      gap={"x32"}
      padding={"l"}
    >
      <YView alignItems={"center"} gap={"x16"}>
        <XView
          height={96}
          width={96}
          justifyContent={"center"}
          alignItems={"center"}
          borderRadius={"bottonPrimaryRadius"}
          backgroundColor={"Green800"}
        >
          <CommunityIcon fill={"white"} />
        </XView>
        <YView gap={"s"} alignItems={"center"}>
          <Text variant={"homeSubHeading"}>Clover</Text>
          <Text textAlign={"center"} lineHeight={20}>
            One platform for all your community needs: Events, membership,
            messaging and more. Obodo provides the tools to stay connected with
            your community.
          </Text>
          <Text color={"ProductBlack600"} lineHeight={20}>
            Art & Creativity · 200 members
          </Text>
        </YView>
        <XView flexDirection={"row"} gap={"s"} alignItems={"center"}>
          <Button
            title="Join"
            style={{
              //width: 57,
              height: 32,
              paddingHorizontal: 15,
              //   paddingVertical: 4,
            }}
          />
          <Button
            variantText={"buttonOutline"}
            title="Share profile"
            variant="outline"
            style={{
              height: 32,
              paddingHorizontal: 15,
              // paddingVertical: 12,
            }}
          />
        </XView>
      </YView>
      <YView width={"100%"}>
        <YView gap={"x16"}>
          <XView gap={"m"} flexDirection={"row"} alignItems={"center"}>
            <CalenderIcon />
            <Text color={"ProductBlack700"}>
              Created <Text fontFamily={"InterSemiBold"}>Jun 24, 2024</Text>
            </Text>
          </XView>
          <XView gap={"m"} flexDirection={"row"} alignItems={"center"}>
            <GlobeIcon />
            <Text>www.clover.com</Text>
          </XView>
          <XView gap={"m"} flexDirection={"row"} alignItems={"center"}>
            <LocationIcon fill={"#32323A"} height={20} width={20} />
            <Text color={"ProductBlack700"}>
              Located in{" "}
              <Text fontFamily={"InterSemiBold"}>Abuja, Nigeria</Text>
            </Text>
          </XView>
        </YView>
      </YView>
    </YView>
  );
};

export default CommunityMainDetails;

const styles = StyleSheet.create({});
