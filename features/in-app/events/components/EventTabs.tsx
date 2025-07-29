import { Text, XView } from "@/theme/component";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

const eventIntervals = ["all", "upcoming", "past"];

const EventTabs = ({
  activeTab = "",
  intervals,
  handlePress,
}: {
  activeTab: string;
  intervals?: string[];
  handlePress: (id: number) => void;
}) => {
  const _intervals = intervals || eventIntervals;
  return (
    <XView flexDirection={"row"} gap={"s"} alignItems={"center"}>
      {_intervals?.map((interval, idx) => {
        return (
          <TouchableOpacity
            onPress={() => {
              handlePress(idx);
            }}
            key={interval}
          >
            <XView
              backgroundColor={activeTab === interval ? "Green800" : "white"}
              borderRadius={"bottonPrimaryRadius"}
              px={"x16"}
              justifyContent={"center"}
              alignItems={"center"}
              style={{
                height: 40,
              }}
            >
              <Text
                fontSize={16}
                lineHeight={24}
                letterSpacing={0}
                fontFamily={
                  activeTab === interval ? "InterSemiBold" : "InterRegular"
                }
                textTransform={"capitalize"}
                color={activeTab === interval ? "white" : "text"}
              >
                {interval}
              </Text>
            </XView>
          </TouchableOpacity>
        );
      })}
    </XView>
  );
};

export default EventTabs;

const styles = StyleSheet.create({});
