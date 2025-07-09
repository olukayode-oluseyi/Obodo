import CloseIcon from "@/assets/icons/close.svg";
import { AppTheme } from "@/theme";
import { YView } from "@/theme/component";
import { useTheme } from "@shopify/restyle";
import { Image } from "expo-image";
import React from "react";
import {
    StyleSheet,
    TouchableOpacity,
    useWindowDimensions
} from "react-native";

interface SingleImageDisplayProps {
  image: string | string[];
  handleCancel: () => void;
}
const SingleImageDisplay: React.FC<SingleImageDisplayProps> = ({
  image,
  handleCancel,
}) => {
  const theme = useTheme<AppTheme>();
  const { height, width } = useWindowDimensions();
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          handleCancel();
        }}
        activeOpacity={0.8}
        style={{
          position: "absolute",
          top: 16,
          right: 16,
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
      <Image
        source={image}
        contentFit="cover"
        style={{
          width: width - 32 * 2,
          height: 312,
          borderRadius: theme.borderRadii.x20,
        }}
      />
    </>
  );
};

export default SingleImageDisplay;

const styles = StyleSheet.create({});
