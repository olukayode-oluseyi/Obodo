import CheckIcon from "@/assets/icons/check-mark.svg";
import UserIcon from "@/assets/icons/user.svg";
import { AppTheme } from "@/theme";
import { Text, XView, YView } from "@/theme/component";
import { useTheme } from "@shopify/restyle";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
    DataProvider,
    LayoutProvider,
    RecyclerListView,
} from "recyclerlistview";
import RegisteredEventCard from "./RegisteredEventCard";

const EventAttendance = () => {
  const { width, height } = useWindowDimensions();
  const { bottom } = useSafeAreaInsets();
  const router = useRouter();
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
      borderRadius={"x20"}
      backgroundColor={"white"}
      style={{
        // gap: 16,
        width: width - 32,
        marginTop: 16,
        marginBottom: bottom + 100,
        // bottom: bottom + 50,
        marginHorizontal: 16,
        paddingVertical: 16,
      }}
      flex={1}
    >
      <XView>
        <ScrollView
          horizontal
          hitSlop={20}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 16,
            gap: 12,
            height: 48,
  
          }}
        >
          {[1, 2, 3, 4].map((item, index) => (
            <XView
              key={index}
              //   Width={160}
              height={32}
              flexDirection={"row"}
              alignItems={"center"}
              backgroundColor={
                index === 1
                  ? "Success200"
                  : index === 2
                  ? "Warning100"
                  : "ProductBlack100"
              }
              borderRadius={"bottonPrimaryRadius"}
              paddingHorizontal={"s"}
              gap={"s"}
            >
              {index === 1 ? <CheckIcon /> : <UserIcon />}
              <Text fontFamily={"InterMedium"} fontSize={12} lineHeight={24}>
                {index === 1 ? "Checked in" : " Total registered"}
              </Text>
              <XView
                backgroundColor={"text"}
                height={20}
                paddingHorizontal={"s"}
                borderRadius={"bottonPrimaryRadius"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text fontSize={12} lineHeight={18} color={"white"}>
                  20
                </Text>
              </XView>
            </XView>
          ))}
        </ScrollView>
      </XView>

      <RecyclerListView
        layoutProvider={layoutProvider}
        dataProvider={dataProvider}
        rowRenderer={(type, item, idx) => (
          <RegisteredEventCard lastItem={data.length === idx + 1} index={idx} />
        )}
        style={{ flex: 1 }}
        forceNonDeterministicRendering
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

export default EventAttendance;

const styles = StyleSheet.create({});
