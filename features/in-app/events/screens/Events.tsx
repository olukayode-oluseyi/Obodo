import PlusIcon from "@/assets/icons/plus3.svg";
import PageHeaders from "@/components/ui/common/headers/PageHeaders";
import { XView, YView } from "@/theme/component";
import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  DataProvider,
  LayoutProvider,
  RecyclerListView,
} from "recyclerlistview";
import EventCard from "../components/EventCard"; // Adjust path if needed
import EventTabs from "../components/EventTabs";

const Events = () => {
  const { top, bottom } = useSafeAreaInsets();
  const { width } = Dimensions.get("window");

  const data = React.useMemo(() => {
    return [
      { id: "1", title: "Event 1" },
      { id: "2", title: "Event 2" },
      { id: "3", title: "Event 3" },
      { id: "4", title: "Event 4" },
      { id: "5", title: "Event 5" },
    ];
  }, []);

  const dataProvider = React.useMemo(() => {
    return new DataProvider((r1, r2) => r1.id !== r2.id).cloneWithRows(data);
  }, [data]);

  const layoutProvider = React.useMemo(() => {
    return new LayoutProvider(
      () => "ITEM",
      (type, dim) => {
        dim.width = width - 32; // Adjust for horizontal padding
        dim.height = 180; // Estimate height; can vary depending on EventCard content
      }
    );
  }, []);
  return (
    <YView
      //bottom={bottom}
      backgroundColor={"backgroundTertiary"}

      style={{
        paddingTop: top + 10
      }}
      flex={1}
      paddingHorizontal={"x16"}
    >
      <PageHeaders
        title="Events"
        rightComponent={
          <XView
            backgroundColor={"primary"}
            height={40}
            width={40}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={"bottonPrimaryRadius"}
          >
            <PlusIcon fill={"white"} />
          </XView>
        }
      />
      <YView flex={1} gap={"x16"} paddingVertical={"x16"} style={{}}>
        <EventTabs
          activeTab={"all"}
          handlePress={function (id: number): void {
            throw new Error("Function not implemented.");
          }}
        />
        <YView flex={1}>
          <RecyclerListView
            layoutProvider={layoutProvider}
            dataProvider={dataProvider}
            scrollViewProps={{
              showsVerticalScrollIndicator: false,
              contentContainerStyle: {
                paddingBottom: 200,
              },
            }}
            rowRenderer={(type, item) => <EventCard />}
            style={{ flex: 1 }}
            forceNonDeterministicRendering
            //canChangeSize
          />
        </YView>
      </YView>
    </YView>
  );
};

export default Events;

const styles = StyleSheet.create({});
