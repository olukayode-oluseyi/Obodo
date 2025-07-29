import UpcomingEventCard from "@/components/ui/in-app/common/cards/UpcomingEventCard";
import { Text, XView, YView } from "@/theme/component";
import React from "react";
import { StyleSheet } from "react-native";
import { upcomingEventsData } from "../../home/components/HomeUpcomingEvents";

const UpcomingEvents = () => {
  return (
    <YView
      backgroundColor={"white"}
      paddingBottom={"l"}
      borderRadius={"l"}
 
    >
      <XView paddingHorizontal={"x16"} paddingTop={"x16"} paddingBottom={"m"}>
        <Text variant={"homeSubHeading"} lineHeight={22}>
          Upcoming events
        </Text>
      </XView>
      <YView paddingHorizontal={"x16"} gap={"m"}>
        {upcomingEventsData?.map((item, id) => {
          return <UpcomingEventCard item={item} key={id} />;
        })}
      </YView>
    </YView>
  );
};

export default UpcomingEvents;

const styles = StyleSheet.create({});
