import CalenderIcon from "@/assets/icons/calender.svg";
import VideoCameraIcon from "@/assets/icons/video-camera.svg";
import Options from "@/components/ui/common/Options";

import { Text, XView, YView } from "@/theme/component";

import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";

const EventCard = () => {
  const { width } = useWindowDimensions();
  const router = useRouter();
  return (
    <YView backgroundColor={"white"} marginVertical={"s"} borderRadius={"x20"}>
      <TouchableOpacity
        onPress={() =>
          router.push({
            pathname: "/(app)/(tabs)/event/[id]",
            params: {
              id: "45",
            },
          })
        }
      >
        <XView padding={"m"} paddingBottom={"none"}>
          <Image
            style={{
              height: 167,
              width: width - 32 - 24,
              borderRadius: 10,
            }}
            source={require("@/assets/images/Cover.png")}
          />
        </XView>
        <YView gap={"s"} padding={"x20"}>
          <XView>
            <Text variant={"homeSubHeading"}>The June Sitout 2024</Text>
          </XView>
          <XView gap={"m"} flexDirection={"row"} alignItems={"center"}>
            <CalenderIcon />
            <Text>03 Sep. 2021 at 3:00 PM</Text>
          </XView>
          <XView gap={"m"} flexDirection={"row"} alignItems={"center"}>
            <VideoCameraIcon />
            <Text>Virtual</Text>
          </XView>
        </YView>
        <XView
          borderTopWidth={1}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          borderColor={"ProductBlack200"}
          padding={"x20"}
        >
          <XView flexDirection={"row"} alignItems={"center"} gap={"s"}>
            <Image
              style={{
                height: 28,
                width: 68,
              }}
              source={require("@/assets/images/PPs.png")}
            />
            <Text>10+ Attending</Text>
          </XView>

        <Options/>
        </XView>
      </TouchableOpacity>
    </YView>
  );
};

export default EventCard;

const styles = StyleSheet.create({});
