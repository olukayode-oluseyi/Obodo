import Avatar from "@/assets/icons/avatar2.svg";

import CheckIcon from "@/assets/icons/green-check.svg";
import OptionsIcon from "@/assets/icons/options.svg";
import { AppTheme } from "@/theme";
import { Text, XView, YView } from "@/theme/component";
import { useTheme } from "@shopify/restyle";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import PostActions from "./PostActions";
import PostImageDisplay from "./PostImageDisplay";

const imgUri =
  "file:///Users/macbook/Library/Developer/CoreSimulator/Devices/7EA916BD-3634-4E87-B79F-B9BE302919A1/data/Containers/Data/Application/5BC5DD69-EC9E-479F-80FB-D6BB40E794DD/Library/Caches/ExponentExperienceData/@anonymous/obodo-851410bc-68bb-4271-b313-084e8fd3f8b4/ImagePicker/DDEC6F18-CEF4-46B2-9470-30D22F928B37.jpg";

interface PostcardProps {
  index?: number;
  location?: "comments" | "posts";
  type?: "poll" | "post";
}

const Postcard: React.FC<PostcardProps> = ({
  index,
  location,
  type = "poll",
}) => {
  const { top } = useSafeAreaInsets();
  const router = useRouter();
  const theme = useTheme<AppTheme>();
  const progress = useSharedValue(1);

  const animatedStyle1 = useAnimatedStyle(() => ({
    width: `${progress.value * 100}%`,
  }));
  return (
    <TouchableOpacity
      onPress={() =>
        location === "comments"
          ? null
          : router.push({
              pathname: "/(app)/(tabs)/post/[id]",
              params: {
                id: "45",
              },
            })
      }
    >
      <YView
        borderRadius={"l"}
        //   height={490}
        marginVertical={location === "comments" ? "none" : "x16"}
        style={{
          marginTop: index === 0 ? 156 + 16 + top + 20 + 16 + 16 + 16 : 0,
        }}
        backgroundColor={"white"}
        gap={"x16"}
        padding={"x16"}
        //paddingBottom={location === "comments" ? "none" : "x16"}
      >
        <YView
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <XView flexDirection={"row"} alignItems={"center"} gap={"x16"}>
            <YView
              width={40}
              backgroundColor={"UIDark100"}
              height={40}
              borderRadius={"x16"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Avatar />
            </YView>

            <YView>
              <Text
                fontFamily={"InterBold"}
                lineHeight={24}
                fontSize={15}
                color={"text"}
              >
                Plogged
              </Text>
              <Text
                color={"ProductBlack400"}
                lineHeight={16}
                fontSize={12}
                fontFamily={"InterRegular"}
              >
                Just now
              </Text>
            </YView>
          </XView>
          <TouchableOpacity hitSlop={20}>
            <OptionsIcon />
          </TouchableOpacity>
        </YView>
        <YView gap={"x16"} width={"100%"}>
          {type === "poll" ? (
            <YView
              backgroundColor={"ProductBlack100"}
              padding={"x16"}
              borderRadius={"x16"}
              gap={"m"}
              width={"100%"}
            >
              <XView>
                <Text
                  color={"text"}
                  style={{
                    fontSize: 16,
                    fontFamily: theme.fontFamilies.semiBold,
                    lineHeight: 24,
                  }}
                >
                  How old am I?
                </Text>
              </XView>

              {Array.from({ length: 3 }).map((item: any, idx) => {
                return (
                  <TouchableOpacity key={idx}>
                    <XView
                      width={"100%"}
                      height={48}
                      borderRadius={"x12"}
                      borderWidth={idx === 1 ? 1 : 0}
                      borderColor={"Green300"}
                      backgroundColor={"white"}
                      flexDirection={"row"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                      position={"relative"}
                    >
                      {
                        idx === 1 && 
                        <Animated.View
                        style={[
                          {
                            borderRadius: 12,
                            height: "100%",
                     
                            backgroundColor: theme.colors.Green100,
                            position: "absolute",
                            left: 0,
                            right: 0,
                          },
                          animatedStyle1,
                        ]}
                      />
                      }
                     
                      <XView paddingLeft={"x16"}>
                        <Text
                          color={"text"}
                          style={{
                            fontSize: 16,
                            fontFamily: theme.fontFamilies.semiBold,
                            lineHeight: 24,
                          }}
                        >
                         {idx === 1 ? 32 : 29}
                        </Text>
                      </XView>

                      <XView
                        flexDirection={"row"}
                        gap={"s"}
                        alignItems={"center"}
                        paddingRight={"m"}
                      >
                        {idx === 1 && <CheckIcon />}

                        <Text
                          color={"text"}
                          style={{
                            fontSize: 16,
                            fontFamily: theme.fontFamilies.semiBold,
                            lineHeight: 24,
                          }}
                        >
                        {idx === 1 ? '100%' : "0%"}  
                        </Text>
                      </XView>
                    </XView>
                  </TouchableOpacity>
                );
              })}
              <XView>
                <Text
                  color={"text"}
                  style={{
                    fontSize: 14,
                    fontFamily: theme.fontFamilies.regular,
                    lineHeight: 16,
                  }}
                >
                  0 votes · 1 day left to vote
                </Text>
              </XView>
            </YView>
          ) : (
            <>
              <YView>
                <Text lineHeight={22} fontSize={15}>
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                  used in laying out print, graphic or web designs.
                </Text>
              </YView>
              <PostImageDisplay images={[imgUri]} />
            </>
          )}

          <PostActions />
        </YView>
      </YView>
    </TouchableOpacity>
  );
};

export default Postcard;

const styles = StyleSheet.create({});
