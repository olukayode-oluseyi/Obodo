import GoBack from "@/components/ui/common/headers/GoBack";
import { YView } from "@/theme/component";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CommunityMainDetails from "../components/CommunityMainDetails";
import CommunityMembers from "../components/CommunityMembers";
import CommunityPhotos from "../components/CommunityPhotos";
import UpcomingEvents from "../components/UpcomingEvents";

const ProfileScreen = () => {
  const { top, bottom } = useSafeAreaInsets();
  return (
    <YView
      //bottom={bottom}
      backgroundColor={"backgroundTertiary"}
      style={{
        paddingTop: top + 10,
      }}
      flex={1}
      paddingHorizontal={"x16"}
    >
      <YView gap={"x16"} paddingBottom={"s"}>
        <GoBack />
      </YView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 8,
          paddingBottom: 150,
          gap: 16,
        }}
      >
        <CommunityMainDetails />

        <CommunityMembers />
        <UpcomingEvents/>
        <CommunityPhotos/>
      </ScrollView>
    </YView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
