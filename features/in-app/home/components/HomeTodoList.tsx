import ArrowRight from "@/assets/icons/arrow-right.svg";
import CheckCircle from "@/assets/icons/check-circle.svg";
import { AppTheme } from "@/theme";
import { Text, YView } from "@/theme/component";
import { useTheme } from "@shopify/restyle";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

const todolist = [
  {
    title: "Complete your profile",
  },
  {
    title: "Host Juneteenth event",
  },
];
const HomeTodoList = () => {
  const theme = useTheme<AppTheme>();
  return (
    <YView
      padding={"x16"}
      marginHorizontal={'l'}
      borderRadius={"l"}
      gap={"s"}
      backgroundColor={"white"}
    >
      <YView
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Text variant="homeSubHeading2">To-do list</Text>
        <TouchableOpacity>
          <YView
  
            paddingHorizontal={"x16"}
            height={32}
            alignItems={"center"}
            justifyContent={'center'}
            borderRadius={"bottonPrimaryRadius"}
            gap={"s"}
            backgroundColor={"_"}
          >
            <Text fontSize={13} fontFamily={"InterSemiBold"} lineHeight={18}>
              Add Task
            </Text>
          </YView>
        </TouchableOpacity>
      </YView>
      <YView gap={"m"}>
        {todolist.map((item, id) => {
          return (
            <TouchableOpacity key={id}>
              <YView
                padding={"m"}
                borderRadius={"x12"}
                gap={"x16"}
                borderColor={"Green300"}
                borderWidth={id === 0 ? 1 : 0}
                style={{
                  backgroundColor: id === 0 ? theme.colors.Green200 : "#F7F7F7",
                }}
                flexDirection={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Text textDecorationLine={id === 0 ? 'line-through' : 'none'} >{item.title}</Text>
                {id === 0 ? <CheckCircle /> : <ArrowRight />}
              </YView>
            </TouchableOpacity>
          );
        })}
      </YView>
    </YView>
  );
};

export default HomeTodoList;

const styles = StyleSheet.create({});
