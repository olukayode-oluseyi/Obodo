import ArrowLeft from "@/assets/icons/arrow-left.svg";
import { YView } from "@/theme/component";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

const GoBack = () => {
    const router = useRouter()
  return (
    <TouchableOpacity onPress={()=>router.back()} >
      <YView
        height={40}
        width={40}
        backgroundColor={'white'}
        hitSlop={20}
        borderRadius={"bottonPrimaryRadius"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <ArrowLeft />
      </YView>
    </TouchableOpacity>
  );
};

export default GoBack;

const styles = StyleSheet.create({});
