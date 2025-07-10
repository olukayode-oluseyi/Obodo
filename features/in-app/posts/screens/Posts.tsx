import { Text, YView } from "@/theme/component";
import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import {
  DataProvider,
  LayoutProvider,
  RecyclerListView,
} from "recyclerlistview";
import PostField from "../components/PostField";
import Postcard from "../components/Postcard";

const SCREEN_WIDTH = Dimensions.get("window").width;

const dataProvider = new DataProvider((r1, r2) => r1 !== r2).cloneWithRows(
  Array(10).fill({}) // Mocking 10 post items; replace with actual data
);

const layoutProvider = new LayoutProvider(
  () => 0,
  (type, dim) => {
    dim.width = SCREEN_WIDTH;
  }
);

const Posts = () => {
  const { top, bottom } = useSafeAreaInsets();

  return (
    <YView
      flex={1}
      bottom={bottom}
      backgroundColor={"backgroundTertiary"}
      // gap={"x16"}
      // top={top + 10}
    >
      <YView
        position={"absolute"}
        zIndex={100}
        left={16}
        right={16}
        style={{
          top: top + 20,
          //display: "none",
        }}
        gap={"x16"}
        //paddingHorizontal={"x16"}
      >
        <YView>
          <Text
            fontFamily={"InterBold"}
            fontSize={24}
            lineHeight={36}
            color={"text"}
          >
            Posts
          </Text>
        </YView>
        <PostField />
      </YView>

      <YView flex={1} paddingHorizontal={"x16"} style={{}} gap={"x16"}>
        <RecyclerListView
          style={{ flex: 1 }}
          contentContainerStyle={{
            paddingBottom: 300,
            paddingTop: 16,
            gap: 16,
            // padding: 16,
          }}
          forceNonDeterministicRendering={true}
          layoutProvider={layoutProvider}
          dataProvider={dataProvider}
          rowRenderer={(type, data, index) => {
            return <Postcard index={index} />;
          }}
        />
      </YView>
    </YView>
  );
};

export default Posts;

const styles = StyleSheet.create({});
