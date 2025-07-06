import { AppTheme } from "@/theme";
import { Text, YView } from "@/theme/component";
import { useTheme } from "@shopify/restyle";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

const contributors = [
  {
    name: "Karina Alagoa",
    points: "2,400",
    icon: "",
  },
  {
    name: "Omar Najib",
    points: "1,600",
    icon: "",
  },
  {
    name: "Tyrone Davis",
    points: "8,000",
    icon: "",
  },
  {
    name: "Wayne Gerrard",
    points: "2,000",
    icon: "",
  },
];
const HomeTopContributors = () => {
  const theme = useTheme<AppTheme>();
  return (
    <YView
      padding={"x16"}
      marginHorizontal={"l"}
      borderRadius={"l"}
      gap={"s"}
      backgroundColor={"white"}
    >
      <YView
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Text variant="homeSubHeading2">Top contributors</Text>
      </YView>
      <YView gap={"m"}>
        {contributors.map((item, id) => {
          return (
            <TouchableOpacity key={id}>
              <YView
                padding={"m"}
                borderRadius={"x16"}
                gap={"x16"}
                backgroundColor={"ProductBlack100"}
                flexDirection={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <YView gap={'m'} flexDirection={"row"} alignItems={"center"}>
                  <YView>
                    <Image
                      contentFit="cover"
                      style={{
                        height: 40,
                        width: 40,
                        borderRadius: 12,
                      }}
                      source={require("@/assets/images/Avatar.png")}
                    />
                  </YView>
                  <YView>
                    <Text
                      fontFamily={"InterBold"}
                      fontSize={16}
                      lineHeight={24}
                      color={"text"}
                    >
                      {item.name}
                    </Text>
                    <Text
                      fontSize={12}
                      lineHeight={16}
                      color={"ProductBlack600"}
                    >
                      {item.points} points
                    </Text>
                  </YView>
                </YView>
                <YView
                  height={24}
                  width={24}
                  borderRadius={'bottonPrimaryRadius'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  backgroundColor={"Warning100"}
                ><Text fontSize={12} lineHeight={16} >1</Text></YView>
              </YView>
            </TouchableOpacity>
          );
        })}
      </YView>
    </YView>
  );
};

export default HomeTopContributors;

const styles = StyleSheet.create({});
