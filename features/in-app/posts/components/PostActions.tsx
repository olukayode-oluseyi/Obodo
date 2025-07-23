import CommentIcon from "@/assets/icons/comment.svg";
import LoveIcon from "@/assets/icons/love-icon.svg";
import ShareIcon from "@/assets/icons/share.svg";
import { Text, XView } from '@/theme/component';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

const PostActions = () => {
  return (
    <XView flexDirection={"row"} alignItems={"center"} gap={"l"}>
    <TouchableOpacity
      style={{
        gap: 4,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <LoveIcon />
      <Text lineHeight={16} fontSize={14} color={"ProductBlack400"}>
        69
      </Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={{
        gap: 4,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <CommentIcon />
      <Text lineHeight={16} fontSize={14} color={"ProductBlack400"}>
        16
      </Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={{
        gap: 4,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <ShareIcon />
    </TouchableOpacity>
  </XView>
  )
}

export default PostActions

const styles = StyleSheet.create({})