import PlusIcon from "@/assets/icons/plus.svg";
import { Button } from "@/components/ui/common/button";
import { Text, XView, YView } from "@/theme/component";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet } from "react-native";

const HomeGreetings = () => {
  return (
    <YView gap={"l"} padding={"l"} paddingBottom={"none"}>
      <YView gap={"x16"}>
        <YView gap={"s"}>
          <Text
            fontFamily={"InterBold"}
            fontSize={24}
            lineHeight={36}
            color={"text"}
          >
            Hello Drewee,
          </Text>
          <Text lineHeight={24} color={"ProductBlack5002"}>
            Welcome to Obodo. You can now manage and host your community like
            never before.
          </Text>
        </YView>

        <Button
          style={{
            width: 119,
            height: 40,
          }}
          variant="primary"
          title="Get started"
        />
      </YView>
      <YView
        borderRadius={"l"}
        backgroundColor={"white"}
        padding={"l"}
        gap={"x16"}
      >
        <XView flexDirection={"row"} gap={"s"} alignItems={"center"}>
          {Array.from({ length: 4 }).map((item, id) => {
            if (id === 1 || id === 4) {
              return (
                <XView
                key={id}
                  height={48}
                  width={48}
                  justifyContent={"center"}
                  alignItems={"center"}
                  borderRadius={"bottonPrimaryRadius"}
                  backgroundColor={ id === 4 ? 'text' :"primary"}
                >
                  <Text color={"white"} fontFamily={"InterSemiBold"}>
                    O
                  </Text>
                </XView>
              );
            } else
              return (
                <Image
                  key={id}
                  contentFit="cover"
                  style={{
                    height: 48,
                    width: 48,
                  }}
                  source={require(`@/assets/images/Avatar (${'2'}).png`)}
                />
              );
          })}
          <XView
            height={48}
            width={48}
            borderStyle={"dashed"}
            borderWidth={1.5}
            borderColor={"borderColor"}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={"bottonPrimaryRadius"}
            backgroundColor={"white"}
          >
            <PlusIcon />
          </XView>
        </XView>
        <Text color={"ProductBlack500"} fontSize={14} lineHeight={16}>
          8 new members
        </Text>
      </YView>
    </YView>
  );
};

export default HomeGreetings;

const styles = StyleSheet.create({});
