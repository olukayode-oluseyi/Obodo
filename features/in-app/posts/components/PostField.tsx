import ArrowDown from "@/assets/icons/arrow-down.svg";
import Avatar from "@/assets/icons/avatar.svg";
import EmojiIcon from "@/assets/icons/emoji.svg";
import ImgIcon from "@/assets/icons/image.svg";
import PollIcon from "@/assets/icons/poll.svg";
import { Button } from "@/components/ui/common/button";
import { useImagePicker } from "@/hooks/useImagePicker";
import { AppTheme } from "@/theme";
import { Text, XView, YView } from "@/theme/component";
import { useTheme } from "@shopify/restyle";
import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import PostImageDisplay from "./PostImageDisplay";

const PostField = () => {
  const theme = useTheme<AppTheme>();
  const { width, height } = useWindowDimensions();
  
  const { pickImages, images, clearImages } = useImagePicker();
    const [post, setPost] = useState('')
    console.log(images)
  const postActions = [
    {
      icon: <ImgIcon />,
      onPress: async () => {
        await pickImages();
      },
    },
    {
      icon: <PollIcon />,
      onPress: async () => {
        //await pickImage();
      },
    },
    {
      icon: <EmojiIcon />,
      onPress: async () => {
        // await pickImage();
      },
    },
  ];
  return (
    <YView
      borderRadius={"x20"}
      alignItems={"flex-start"}
      justifyContent={"flex-start"}
      backgroundColor={"white"}
      paddingVertical={"x16"}
      gap={"x16"}
    >
      <YView paddingHorizontal={"x16"}>
        <XView
          paddingLeft={"s"}
          paddingVertical={"s"}
          paddingRight={"s"}
          gap={"s"}
          flexDirection={"row"}
          alignItems={"center"}
          borderRadius={"x16"}
          backgroundColor={"ProductBlack200"}
        >
          <Avatar fill={"white"} />

          <XView flexDirection={"row"} gap={"s"} alignItems={"center"}>
            <Text fontSize={12} lineHeight={16}>
              Plogged
            </Text>
            <ArrowDown />
          </XView>
        </XView>
      </YView>
      <TextInput
        multiline
        onChangeText={(val)=>setPost(val)}
        placeholderTextColor={theme.colors.ProductBlack400}
        style={{
          paddingHorizontal: 16,
          fontSize: 16,
          lineHeight: 22,
          color: theme.colors.ProductBlack400,
          fontFamily: theme.fontFamilies.medium,
        }}
        placeholder="What do you want to talk about?"
      />
      {images.length > 0 && (
        <XView
          width={"100%"}
          // padding={"x16"}
          flexDirection={"row"}
          position={"relative"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <PostImageDisplay
            handleCancel={(uri: string) => clearImages(uri)}
            images={images}
          />
        </XView>
      )}

      <XView
        width={"100%"}
        paddingHorizontal={"x16"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <XView flexDirection={"row"} alignItems={"center"} gap={"s"}>
          {postActions?.map((item, id) => {
            return (
              <TouchableOpacity
                hitSlop={10}
                activeOpacity={0.8}
                onPress={async () => {
                  item?.onPress();
                }}
                key={id}
              >
                <YView
                  borderRadius={"x16"}
                  backgroundColor={"ProductBlack100"}
                  height={40}
                  width={40}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  {item.icon}
                </YView>
              </TouchableOpacity>
            );
          })}
        </XView>

        <Button
          variantText={post.length ? "button" : "postFieldPostBtn"}
          style={{
            height: 40,
            paddingHorizontal: 20,
            backgroundColor:  post.length > 0 ? theme.colors.primary : theme.colors.ProductBlack100,
          }}
          title="Post"
        />
      </XView>
    </YView>
  );
};

export default PostField;

const styles = StyleSheet.create({});
