import ShareIcon from "@/assets/icons/share.svg";
import GoBack from "@/components/ui/common/headers/GoBack";
import { AppTheme } from "@/theme";
import { XView, YView } from "@/theme/component";
import { useTheme } from "@shopify/restyle";
import React, { useRef, useState } from "react";
import {
    FlatList,
    NativeScrollEvent,
    NativeSyntheticEvent,
    StyleSheet,
    TouchableOpacity,
    useWindowDimensions,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import EventAttendance from "../components/EventAttendance";
import EventOverview from "../components/EventOverview";
import EventTabs from "../components/EventTabs";

const SingleEventDetails = () => {
  const { top, bottom } = useSafeAreaInsets();
  const theme = useTheme<AppTheme>();
  const { width, height } = useWindowDimensions();

  const [activeTab, setActiveTab] = useState("Overview");
  const flatListRef = useRef<FlatList<any>>(null);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveTab(index === 0 ? "Overview" : "Attendance");
  };

  const handleTabPress = (index: number) => {
    flatListRef.current?.scrollToIndex({ index, animated: true });
    //setActiveTab(index === 0 ? "Overview" : "Attendance");
  };

  

  const screens = [
    <EventOverview key="overview" />,
    <EventAttendance key={"attendance"} />,
  ];

  return (
    <YView
      backgroundColor={"backgroundTertiary"}
      style={{
        paddingTop: top + 10,
      }}
      flex={1}
      //   paddingHorizontal={"x16"}
    >
      <YView gap={"x16"} paddingBottom={"s"} paddingHorizontal={"x16"}>
        <GoBack />
        <XView
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          gap={"x16"}
          style={{}}
        >
          <EventTabs
            handlePress={handleTabPress}
            intervals={["Overview", "Attendance"]}
            activeTab={activeTab}
          />
          <TouchableOpacity hitSlop={20}>
            <YView
              backgroundColor={"white"}
              height={40}
              width={40}
              borderRadius={"bottonPrimaryRadius"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <ShareIcon />
            </YView>
          </TouchableOpacity>
        </XView>
      </YView>

      <FlatList
        ref={flatListRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={screens}
        renderItem={({ item }) => item}
        keyExtractor={(_, index) => index.toString()}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      />
    </YView>
  );
};

export default SingleEventDetails;

const styles = StyleSheet.create({});
