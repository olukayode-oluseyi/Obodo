import { Text, XView, YView } from "@/theme/component";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet } from "react-native";

const RegisteredEventCard = ({index, sliced, lastItem}: {index?: number, lastItem?: boolean, sliced?: boolean}) => {
  return (
    <XView
      // paddingVertical={"m"}
      paddingHorizontal={sliced ? 'none' : "x16"}
      backgroundColor={"white"}
      width={"100%"}
      flexDirection={"row"}
      paddingTop={ sliced  ? 'none' : index === 0 ? 'x16' : 's'}
      paddingBottom={ sliced  ? 'none' : lastItem ? 'x16' : 's'}
      borderTopLeftRadius={ index === 0 ? 'x20' : 'none'}
      borderTopRightRadius={ index === 0 ? 'x20' : 'none'}
      borderBottomRightRadius={ lastItem? 'x20' : 'none'}
      borderBottomLeftRadius={ lastItem? 'x20' : 'none'}
      alignItems={"center"}
      gap={"m"}
    >
      <Image
        style={{
          height: 40,
          width: 40,
        }}
        source={require("@/assets/images/Avatar.png")}
      />
      <YView>
        <Text variant={"homeSubHeading"}>Andrew Diete-Koki</Text>
        <Text color={"ProductBlack400"} fontSize={12} lineHeight={16}>
          andrew@plogged.com
        </Text>
      </YView>
    </XView>
  );
};

export default RegisteredEventCard;

const styles = StyleSheet.create({});
