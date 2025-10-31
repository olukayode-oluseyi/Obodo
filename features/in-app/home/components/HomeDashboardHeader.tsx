import AlarmIcon from "@/assets/icons/alarm.svg";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import HomeIcon from "@/assets/icons/home-icon.svg";
import { useAuthStore } from "@/services/stores/auth.store";
import { AppTheme } from "@/theme";
import { Text, XView } from "@/theme/component";
import { useTheme } from "@shopify/restyle";
import { Image } from "expo-image";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface HomeDashboardHeaderProps {
  handleOpenBottomSheet: () => void;
}
const HomeDashboardHeader = ({ handleOpenBottomSheet }: HomeDashboardHeaderProps) => {
  const theme = useTheme<AppTheme>();
  const user = useAuthStore((state) => state.user);
  const { top } = useSafeAreaInsets();
  return (
    <XView
      style={{
        paddingTop: top,
      }}
      flexDirection={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      paddingHorizontal={"x16"}
    >
      <TouchableOpacity style={{}} hitSlop={10} activeOpacity={0.8} onPress={handleOpenBottomSheet}>
        <XView
          padding={"s"}
          paddingVertical={"xs"}
          flexDirection={"row"}
          gap={"xs"}
          backgroundColor={"ProductBlack100"}
          alignItems={"center"}
          borderRadius={"bottonPrimaryRadius"}
        >
         
            <HomeIcon />
      
          <Text
            fontSize={16}
            fontFamily={"InterMedium"}
            lineHeight={22}
            color={"text"}
          >
            Home
          </Text>
          <ArrowDown height={14} width={14} fill={theme.colors.text} />
        </XView>
      </TouchableOpacity>
      <XView flexDirection={"row"} alignItems={"center"} gap={"s"}>
        <TouchableOpacity hitSlop={10} activeOpacity={0.8}>
          <XView
            padding={"s"}
            paddingVertical={"xs"}
            flexDirection={"row"}
            gap={"xs"}
            backgroundColor={"ProductBlack100"}
            alignItems={"center"}
            borderRadius={"bottonPrimaryRadius"}
          >
            <AlarmIcon />
            <Text
              fontSize={15}
              fontFamily={"InterRegular"}
              lineHeight={22}
              color={"text"}
            >
              10
            </Text>
          </XView>
        </TouchableOpacity>

        <TouchableOpacity hitSlop={10} activeOpacity={0.8}>
          <Image
            style={{
              height: 43,
              width: 43,
              borderRadius: 100,
            }}
            source={user?.avatar_data.avatar_url}
          />
        </TouchableOpacity>
      </XView>
    </XView>
  );
};

export default HomeDashboardHeader;
