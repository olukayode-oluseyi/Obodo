import UpcomingEventCard from "@/components/ui/in-app/common/cards/UpcomingEventCard";
import { Text, YView } from "@/theme/component";
import React from "react";
import { StyleSheet } from "react-native";

export const upcomingEventsData = [
  {
    day: "16",
    month: "nov",
    title: "Neighbourhood Clean Up",
    description: "10:00 AM · In person",
  },
  {
    day: "02",
    month: "dec",
    title: "AI Community Virtual Meetup",
    description: "4:00 PM · Online",
  },
  {
    day: "25",
    month: "dec",
    title: "Christmas Dinner",
    description: "6:00 PM · In person",
  },
  {
    day: "28",
    month: "dec",
    title: "Birthdays today",
    description: "Jane Doe and 3 others.",
  },
];
const HomeUpcomingEvents = () => {
  return (
    <YView paddingHorizontal={"x20"} gap={"x16"} style={{}}>
      <YView flex={1}>
        <Text variant={"homeSubHeading"}>Upcoming events</Text>
      </YView>
      <YView gap={"m"}>
        {upcomingEventsData?.map((item, id) => {
          return <UpcomingEventCard theme="home" item={item} key={id} />;
        })}
      </YView>
    </YView>
  );
};

export default HomeUpcomingEvents;

const styles = StyleSheet.create({});
