import LineChartIcon from "@/assets/icons/line-chart-square.svg";
import UserGroupIcon from "@/assets/icons/user-group.svg";
import { Text, XView, YView } from "@/theme/component";
import React from "react";
import { FlatList, StyleSheet, TouchableOpacity } from "react-native";

const data = [
  {
    title: "Total members",
    value: "24,000",
    icon: <UserGroupIcon fill={'white'} />
  },
  {
    title: "Engagement rate",
    value: "24,000",
    icon: <LineChartIcon fill={'white'} />
  },
  {
    title: "Engagement rate",
    value: "24,000",
    icon: <UserGroupIcon fill={'white'} />
  },
  {
    title: "Engagement rate",
    value: "24,000",
    icon: <LineChartIcon fill={'white'} />
  },
];
const HomeInsights = () => {
  return (
    <YView gap={"x20"}>
      <XView
        gap={"x16"}
        paddingHorizontal={"l"}
        flexDirection={"row"}
        alignItems={"center"}
      >
        <Text
        variant={'homeSubHeading'}
        >
          Insights
        </Text>
        <Text color={"ProductBlack5002"}>Last 30 days</Text>
      </XView>
      <FlatList
        horizontal
        data={data}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, id) => String(id)}
        contentContainerStyle={{
          gap: 16,
        }}
   
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity activeOpacity={.8} >
              <YView
                gap={"x32"}
                borderRadius={"l"}
                padding={"l"}
                width={192}
                marginLeft={index === 0 ? "l" : "none"}
                marginRight={data.length === (index + 1) ? "l" : "none"}
                backgroundColor={"white"}
              >
                <YView
                  height={40}
                  width={40}
                  backgroundColor={"text"}
                  borderRadius={"m"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                 {item.icon}
                </YView>

                <YView gap={"m"}>
                  <YView>
                    <Text
                      fontSize={14}
                      lineHeight={18}
                      color={"ProductBlack500"}
                    >
                      {item.title}
                    </Text>
                  </YView>

                  <XView flexDirection={"row"} gap={"m"} alignItems={"center"}>
                    <Text
                      fontFamily={"InterSemiBold"}
                      fontSize={24}
                      lineHeight={26}
                      color={"text"}
                    >
                      {item.value}
                    </Text>

                    <XView
                      backgroundColor={"ProductBlack200"}
                      paddingVertical={"s"}
                      paddingHorizontal={"m"}
                      gap={"s"}
                      borderRadius={"bottonPrimaryRadius"}
                    >
                      <Text color={"text"} fontSize={11} lineHeight={18}>
                        All-time
                      </Text>
                    </XView>
                  </XView>
                </YView>
              </YView>
            </TouchableOpacity>
          );
        }}
      />
    </YView>
  );
};

export default HomeInsights;

const styles = StyleSheet.create({});
