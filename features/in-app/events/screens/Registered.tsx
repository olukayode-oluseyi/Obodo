import GoBack from "@/components/ui/common/headers/GoBack";
import { AppTheme } from "@/theme";
import { Text, XView, YView } from "@/theme/component";
import { useTheme } from "@shopify/restyle";
import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
    DataProvider,
    LayoutProvider,
    RecyclerListView,
} from "recyclerlistview";
import RegisteredEventCard from "../components/RegisteredEventCard"; // Adjust path if needed

const EventRegistered = () => {
  const { top, bottom } = useSafeAreaInsets();
  const { width } = Dimensions.get("window");
  const theme = useTheme<AppTheme>();
  const data = React.useMemo(() => {
    return [
      { id: "1", name: "Event 1" },
      { id: "2", name: "Event 2" },
      { id: "3", name: "Event 3" },
      { id: "4", name: "Event 4" },
      { id: "5", name: "Event 5" },
      { id: "1", name: "Event 1" },
      { id: "2", name: "Event 2" },
      { id: "3", name: "Event 3" },
      { id: "4", name: "Event 4" },
      { id: "5", name: "Event 5" },
      { id: "1", name: "Event 1" },
      { id: "2", name: "Event 2" },
      { id: "3", name: "Event 3" },
      { id: "4", name: "Event 4" },
      { id: "5", name: "Event 5" },
      { id: "1", name: "Event 1" },
      { id: "2", name: "Event 2" },
      { id: "3", name: "Event 3" },
      { id: "4", name: "Event 4" },
      { id: "5", name: "Event 5" },
    ];
  }, []);

  const dataProvider = React.useMemo(() => {
    return new DataProvider((r1, r2) => r1.id !== r2.id).cloneWithRows(data);
  }, [data]);

  const layoutProvider = React.useMemo(() => {
    return new LayoutProvider(
      () => "ITEM",
      (type, dim) => {
        dim.width = width - 32;
        dim.height = 40;
      }
    );
  }, []);
  return (
    <YView
      bottom={bottom}
      backgroundColor={"backgroundTertiary"}
      top={top + 10}
      flex={1}
      paddingHorizontal={"x16"}
    >
      <XView flexDirection={"row"} gap={"m"} alignItems={"center"}>
        <GoBack />
        <Text fontSize={18} lineHeight={26}>
          200{" "}
          <Text fontSize={18} lineHeight={26} fontFamily={"InterSemiBold"}>
            Registered
          </Text>
        </Text>
      </XView>
      <RecyclerListView
        layoutProvider={layoutProvider}
        dataProvider={dataProvider}
        rowRenderer={(type, item, idx) => (
          <RegisteredEventCard lastItem={data.length === idx + 1} index={idx} />
        )}
        style={{ flex: 1, paddingVertical: 16 }}
        forceNonDeterministicRendering
        //canChangeSize
        scrollViewProps={{
          showsVerticalScrollIndicator: false,
          contentContainerStyle: {
            paddingBottom: 200,
            // padding: 16,
            // backgroundColor: theme.colors.white,
            // borderRadius: 20,
          },
        }}
      />
    </YView>
  );
};

export default EventRegistered;

const styles = StyleSheet.create({});
