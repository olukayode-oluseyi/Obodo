import CloseIcon from "@/assets/icons/close.svg";
import { AppTheme } from "@/theme";
import { YView } from "@/theme/component";
import { useTheme } from "@shopify/restyle";
import { Image } from "expo-image";
import React, { useCallback } from "react";
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";

interface PostImageDisplayProps {
  images: string[];
  handleCancel?: (uri: string) => void;
}

const IMAGE_SIZE = 100;

const PostImageDisplay: React.FC<PostImageDisplayProps> = ({
  images,
  handleCancel,
}) => {
  const theme = useTheme<AppTheme>();
  const { height, width } = useWindowDimensions();

  // Ensure data is always an array
  const _images = Array.isArray(images) ? images : [images];

  const renderItem = useCallback(
    ({ item, index }: { item: string; index: number }) => {
      // Determine image size based on number of images
      const isSingleImage = images.length === 1;
      const imageWidth = isSingleImage ? width - 32 * 2 : 151.5;
      const imageHeight = isSingleImage ? 312 : 151.5;
      return (
        <YView
          ml={handleCancel ? (index === 0 ? "x16" : "none") : "none"}
          mr={
            handleCancel
              ? index + 1 === images.length
                ? "x16"
                : "none"
              : "none"
          }
        >
          {handleCancel && (
            <TouchableOpacity
              onPress={() => {
                handleCancel?.(item);
              }}
              activeOpacity={0.9}
              style={{
                position: "absolute",
                top: 12,
                right: 12,
                zIndex: 10,
              }}
            >
              <YView
                justifyContent={"center"}
                alignItems={"center"}
                borderRadius={"s"}
                height={24}
                width={24}
                backgroundColor={"ProductBlack100"}
              >
                <CloseIcon fill={theme.colors.text} />
              </YView>
            </TouchableOpacity>
          )}
          <Image
            source={item}
            style={{
              width: imageWidth,
              height: imageHeight,
              borderRadius: theme.borderRadii.x20,
            }}
          />
        </YView>
      );
    },
    [width, theme, handleCancel, _images.length]
  );

  const keyExtractor = useCallback(
    (item: string, index: number) => item + index,
    []
  );

  const getItemLayout = useCallback(
    (_: any, index: number) => ({
      length: IMAGE_SIZE + 8,
      offset: (IMAGE_SIZE + 8) * index,
      index,
    }),
    []
  );

  return (
    <FlatList
      horizontal
      data={images}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      contentContainerStyle={{
        gap: theme.spacing.s,
      }}
      //getItemLayout={getItemLayout}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default PostImageDisplay;

const styles = StyleSheet.create({});
