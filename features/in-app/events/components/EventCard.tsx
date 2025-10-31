import CalenderIcon from "@/assets/icons/calender.svg";
import VideoCameraIcon from "@/assets/icons/video-camera.svg";
import Options from "@/components/ui/common/Options";
import { UserEvent } from "@/services/types";

import { Text, XView, YView } from "@/theme/component";
import { formatDateTime } from "@/utils";

import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";

const EventCard = ({ item }: { item: UserEvent }) => {
  const { width } = useWindowDimensions();
  const router = useRouter();
  const attendeesCount = item.registrants.count;
  const attendeesAvatars = item.registrants.avatars;

  
  return (
    <YView backgroundColor={"white"} borderRadius={"x20"}>
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
            source={{ uri: item.cover }}
          />
        </XView>
        <YView gap={"s"} padding={"x20"}>
          <XView>
            <Text variant={"homeSubHeading"}>{item.title}</Text>
          </XView>
          <XView gap={"m"} flexDirection={"row"} alignItems={"center"}>
            <CalenderIcon />
            <Text>{formatDateTime(item.starts_at)}</Text>
          </XView>
          <XView gap={"m"} flexDirection={"row"} alignItems={"center"}>
            <VideoCameraIcon />
            <Text>{item.location.label}</Text>
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
            {attendeesAvatars.slice(0, 3).map((avatar, index) => (
              <Image
                key={index}
                style={{
                  height: 28,
                  width: 28,
                  borderRadius: 14,
                  marginRight: -8,
                }}
                source={{ uri: avatar.avatar_url }}
              />
            ))}

            <Text>{attendeesCount}+ Attending</Text>
          </XView>

          <Options />
        </XView>
      </TouchableOpacity>
    </YView>
  );
};

export default EventCard;

const styles = StyleSheet.create({});
