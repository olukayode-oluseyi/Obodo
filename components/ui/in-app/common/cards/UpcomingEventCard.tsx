import BirthdayIcon from "@/assets/icons/birthday.svg";
import { Text, YView } from "@/theme/component";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
const UpcomingEventCard = ({ item , theme}: { item: any , theme?: 'home' | 'profile'}) => {
  return (
    <TouchableOpacity>
      <YView
        flexDirection={"row"}
        alignItems={"center"}
        backgroundColor={ theme === 'home' ? "white" : "ProductBlack100"}
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
          backgroundColor={ theme === 'home' ? "GrayScale100" : 'white'}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {item.title === "Birthdays today" ? (
            <BirthdayIcon fill={'#707075'} />
          ) : (
            <>
              <Text
                fontSize={16}
                fontFamily={"InterBold"}
                lineHeight={22}
                textAlign={"center"}
                color={ theme === 'home' ? "GrayScale900" : "text"}
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
};

export default UpcomingEventCard;

const styles = StyleSheet.create({});
