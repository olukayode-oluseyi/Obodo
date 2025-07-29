import Option from "@/assets/icons/options.svg";
import { YView } from "@/theme/component";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

const Options = () => {
  return (
    <TouchableOpacity hitSlop={20}>
      <YView
        height={32}
        width={32}
        borderRadius={"x12"}
        paddingHorizontal={"x16"}
        paddingVertical={"m"}
        justifyContent={"center"}
        alignItems={"center"}
        backgroundColor={"ProductBlack100"}
      >
        <Option />
      </YView>
    </TouchableOpacity>
  );
};

export default Options;

const styles = StyleSheet.create({});
