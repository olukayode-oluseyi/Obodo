import HomeIcon from "@/assets/icons/home-icon.svg";
import BottomSheetWrapper, {
  BottomSheetRef,
} from "@/components/ui/common/bottomsheet/BottomSheetWrapper";
import { useGetUserCommunities } from "@/hooks/useGetUserCommunities";
import useGetUserEvents from "@/hooks/useGetUserEvents";
import { useAuthStore } from "@/services/stores/auth.store";
import { UserCommunity, UserEvent } from "@/services/types";
import { AppTheme } from "@/theme";
import { Text, XView, YView } from "@/theme/component";
import { useTheme } from "@shopify/restyle";
import { Image } from "expo-image";
import React, { useCallback, useMemo, useRef } from "react";
import { FlatList, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import EventCard from "../../events/components/EventCard";
import EventTabs from "../../events/components/EventTabs";
import HomeDashboardHeader from "../components/HomeDashboardHeader";

const HomeDashboardScreen = () => {
  const { top, bottom } = useSafeAreaInsets();
  const user = useAuthStore((state) => state.user);
  const theme = useTheme<AppTheme>();

  const { data, isLoading, isError } = useGetUserEvents();
  const bottomSheetRef = useRef<BottomSheetRef>(null);

  const {
    isLoading: isLoadingUserCommunities,
    isFetching: isFetchingUserCommunities,
    data: userCommunities,
  } = useGetUserCommunities();

  console.log(userCommunities?.data[0].avatar_data);

  const handleOpenBottomSheet = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);

  const listHeader = useMemo(
    () => (
      <EventTabs
        activeTab={"all"}
        handlePress={function (id: number): void {
          handleOpenBottomSheet();
        }}
      />
    ),
    [handleOpenBottomSheet]
  );

  const renderItem = ({ item }: { item: UserEvent }) => {
    return <EventCard item={item} />;
  };

  const renderCommunityItem = ({ item }: { item: UserCommunity }) => {
    return (
      <XView  padding={"x16"}
      flexDirection={"row"}
      alignItems={"center"}
      gap={"x16"}>
        {item.avatar_data.has_avatar ? (
          <Image
            source={{ uri: item.avatar_data.avatar_url }}
            style={{ width: 24, height: 24 }}
          />
        ) : (
            <XView
              height={16}
              width={16}
              justifyContent={"center"}
              alignItems={"center"}
              backgroundColor={"white"}
              borderRadius={"bottonPrimaryRadius"}
            >
              <Text>{item.avatar_data.initial}</Text>
            </XView>
        )}
        <Text fontSize={16} fontFamily={"InterSemiBold"} lineHeight={24} letterSpacing={0} color={"text"}>{item.name}</Text>
      </XView>
    );
  };
  return (
    <YView flex={1} gap={"m"} backgroundColor={"white"}>
      <HomeDashboardHeader handleOpenBottomSheet={handleOpenBottomSheet} />
      {/* TODO: change to flashlist here */}
      <FlatList
        contentContainerStyle={{
          backgroundColor: theme.colors.ProductBlack100,
          borderTopLeftRadius: 36,
          borderTopRightRadius: 36,
          padding: 16,
          paddingBottom: 100,
          gap: 16,
        }}
        // ItemSeparatorComponent={() => <YView height={16} />}
        ListHeaderComponent={listHeader}
        data={data?.data}
        renderItem={renderItem}
      />

      <BottomSheetWrapper ref={bottomSheetRef}>
        <YView
          style={{
            borderRadius: 32,
            marginBottom: bottom,
            backgroundColor: "white",
          }}
          borderWidth={1}
          borderColor={"ProductBlack200"}
          // height={200}
        >
          <XView
            padding={"x16"}
            flexDirection={"row"}
            alignItems={"center"}
            gap={"x16"}
            borderBottomColor={'text'}
            borderBottomWidth={1}
          >
            <XView
              height={16}
              width={16}
              justifyContent={"center"}
              alignItems={"center"}
              backgroundColor={"white"}
              borderRadius={"bottonPrimaryRadius"}
            >
              <HomeIcon />
            </XView>
            <Text
              fontSize={16}
              fontFamily={"InterSemiBold"}
              lineHeight={24}
              color={"text"}
              letterSpacing={0}
            >
              Home
            </Text>
          </XView>
          <FlatList
            keyExtractor={(item) => item.community_id.toString()}
            data={userCommunities?.data}
            renderItem={renderCommunityItem}
          />
        </YView>
      </BottomSheetWrapper>
    </YView>
  );
};

export default HomeDashboardScreen;

const styles = StyleSheet.create({});
