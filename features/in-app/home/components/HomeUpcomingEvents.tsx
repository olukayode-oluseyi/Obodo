import BirthdayIcon from "@/assets/icons/birthday.svg";
import { Text, YView } from "@/theme/component";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

const data = [
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
    day: "25",
    month: "dec",
    title: "Birthdays today",
    description: "Jane Doe and 3 others.",
  },
];
const HomeUpcomingEvents = () => {
  return (
    <YView
      paddingHorizontal={"l"}
      gap={"x16"}
      style={{

      }}
    >
      <YView flex={1}>
        <Text variant={"homeSubHeading"}>Upcoming events</Text>
      </YView>
      <YView gap={"m"}>
        {data?.map((item, id) => {
          return (
            <TouchableOpacity key={id}>
              <YView
                flexDirection={"row"}
                alignItems={"center"}
                backgroundColor={"white"}
                padding={"m"}
                gap={"x16"}
                borderRadius={"x20"}
              >
                <YView
                  height={40}
                  width={40}
                  // paddingHorizontal={'s'}
                  // paddingVertical={'xs'}
                  borderRadius={"m"}
                  backgroundColor={"GrayScale100"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  {item.title === "Birthdays today" ? (
                    <BirthdayIcon />
                  ) : (
                    <>
                      <Text
                        fontSize={16}
                        fontFamily={"InterBold"}
                        lineHeight={19}
                        textAlign={"center"}
                        color={"GrayScale900"}
                      >
                        {item.day}
                      </Text>
                      <Text
                        fontSize={10}
                        fontFamily={"InterRegular"}
                        textTransform={"uppercase"}
                        lineHeight={12}
                        textAlign={"center"}
                        color={"GrayScale900"}
                      >
                        {item.month}
                      </Text>
                    </>
                  )}
                </YView>
                <YView gap={"x2"}>
                  <Text variant={"homeSubHeading2"}>{item.title}</Text>
                  <Text fontSize={12} lineHeight={16} color={"GrayScale600"}>
                    {item.description}
                  </Text>
                </YView>
              </YView>
            </TouchableOpacity>
          );
        })}
      </YView>
    </YView>
  );
};

export default HomeUpcomingEvents;

const styles = StyleSheet.create({});
