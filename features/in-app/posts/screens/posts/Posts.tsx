import { YView } from "@/theme/component";
import React, { useRef } from "react";
import { Dimensions, StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import PageHeaders from "@/components/ui/common/headers/PageHeaders";
import {
  DataProvider,
  LayoutProvider,
  RecyclerListView,
} from "recyclerlistview";
import PostField from "../../components/PostField";
import Postcard from "../../components/Postcard";

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

  const scrollY = useSharedValue(0);
  const previousScrollY = useRef(0);
  const headerVisible = useSharedValue(true);
  const scrollDelta = useRef(0);

  const animatedHeaderStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: headerVisible.value
            ? withTiming(0, { duration: 200 })
            : withTiming(-50, { duration: 200 }),
        },
      ],
      opacity: headerVisible.value
        ? withTiming(1, { duration: 200 })
        : withTiming(0, { duration: 200 }),
    };
  });

  return (
    <YView
      flex={1}
      // bottom={bottom}
      backgroundColor={"backgroundTertiary"}
      // gap={"x16"}
      // top={top + 10}
    >
      <Animated.View
        style={[
          {
            position: "absolute",
            zIndex: 100,
            left: 16,
            right: 16,
            top: top + 10,
          },
          animatedHeaderStyle,
        ]}
      >
        <YView gap={"x16"}>
         <PageHeaders title="Posts"/>
          <PostField />
        </YView>
      </Animated.View>

      <YView flex={1} paddingHorizontal={"x16"} style={{}} gap={"x16"}>
        <RecyclerListView
          style={{ flex: 1 }}
          contentContainerStyle={{
            paddingBottom: 200,
            paddingTop: 6,
            gap: 16,
            // padding: 16,
          }}
          forceNonDeterministicRendering={true}
          layoutProvider={layoutProvider}
          dataProvider={dataProvider}
          rowRenderer={(type, data, index) => {
            return <Postcard type="post" index={index} />;
          }}
          onEndReached={() => {
            console.log("end");
          }}
          onScroll={(event) => {
            const currentY = event.nativeEvent.contentOffset.y;

            // Always show header if back to top
            if (currentY <= 0) {
              headerVisible.value = true;
              scrollDelta.current = 0;
            } else if (currentY < previousScrollY.current) {
              // Scrolling up
              const delta = previousScrollY.current - currentY;

              if (scrollDelta.current >= 0) {
                scrollDelta.current += delta;
              } else {
                // direction changed from down to up, reset
                scrollDelta.current = delta;
              }

              if (scrollDelta.current > 100) {
                headerVisible.value = true;
              }
            } else if (currentY > previousScrollY.current) {
              // Scrolling down
              const delta = currentY - previousScrollY.current;

              if (scrollDelta.current <= 0) {
                scrollDelta.current -= delta;
              } else {
                // direction changed from up to down, reset
                scrollDelta.current = -delta;
              }

              if (currentY > 10) {
                headerVisible.value = false;
              }
            }

            previousScrollY.current = currentY;
            scrollY.value = currentY;
          }}
          scrollEventThrottle={16}
        />
      </YView>
    </YView>
  );
};

export default Posts;

const styles = StyleSheet.create({});
