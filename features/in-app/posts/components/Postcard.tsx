import Avatar from "@/assets/icons/avatar2.svg";
import OptionsIcon from "@/assets/icons/options.svg";
import { Text, XView, YView } from "@/theme/component";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import PostImageDisplay from "./PostImageDisplay";

const imgUri =
  "file:///Users/macbook/Library/Developer/CoreSimulator/Devices/7EA916BD-3634-4E87-B79F-B9BE302919A1/data/Containers/Data/Application/5BC5DD69-EC9E-479F-80FB-D6BB40E794DD/Library/Caches/ExponentExperienceData/@anonymous/obodo-851410bc-68bb-4271-b313-084e8fd3f8b4/ImagePicker/DDEC6F18-CEF4-46B2-9470-30D22F928B37.jpg";

interface PostcardProps {
  index?: number;
}

const Postcard: React.FC<PostcardProps> = ({ index }) => {
  const { top } = useSafeAreaInsets();
  return (
    <YView
      borderRadius={"l"}
      //   height={490}
      marginVertical={'x16'}
      style={{
        marginTop: index === 0 ? 156 + 16 + top + 20 + 16 + 16 + 16 : 0,
      }}
      backgroundColor={"white"}
      gap={"x16"}
      padding={"x16"}
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
            {/* <Image
              style={{
                height: 40,
                width: 40,
     
              }}
              source={require("@/assets/images/Avatar (1).png")}
            /> */}
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
        <YView>
          <Text lineHeight={22} fontSize={15}>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs.
          </Text>
        </YView>
        <PostImageDisplay images={[imgUri]} />
        <XView flexDirection={"row"} alignItems={"center"} gap={"l"}></XView>
      </YView>
    </YView>
  );
};

export default Postcard;

const styles = StyleSheet.create({});
