import OptionsIcon from "@/assets/icons/options.svg";
import { Text, XView, YView } from "@/theme/component";
import React from "react";
import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Image } from "expo-image";
import {
    DataProvider,
    LayoutProvider,
    RecyclerListView,
} from "recyclerlistview";
import PostField from "../components/PostField";
import PostImageDisplay from "../components/PostImageDisplay";

const SCREEN_WIDTH = Dimensions.get("window").width;

const dataProvider = new DataProvider((r1, r2) => r1 !== r2).cloneWithRows(
  Array(10).fill({}) // Mocking 10 post items; replace with actual data
);

const layoutProvider = new LayoutProvider(
  () => 0,
  (type, dim) => {
    dim.width = SCREEN_WIDTH;
    dim.height = 480;
  }
);

const Posts = () => {
  const { top, bottom } = useSafeAreaInsets();

  return (
    <YView
      flex={1}
      bottom={bottom}
      backgroundColor={"backgroundTertiary"}
      top={top + 10}
    >
      <YView paddingHorizontal={"x16"}>
        <Text
          fontFamily={"InterBold"}
          fontSize={24}
          lineHeight={36}
          color={"text"}
        >
          Posts
        </Text>
      </YView>

      <YView flex={1} p={"x16"} gap={"x16"}>
        <PostField />
        <RecyclerListView
          style={{ flex: 1 }}
          contentContainerStyle={{
            paddingBottom: 300,
            gap: 16,
            // padding: 16,
          }}
          layoutProvider={layoutProvider}
          dataProvider={dataProvider}
          rowRenderer={(type, data, index) => {
            return (
              <YView
                borderRadius={"l"}
                height={460}
                backgroundColor={"white"}
                gap={"x16"}
                padding={"x16"}
              >
                <YView
                  flexDirection={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <XView
                    flexDirection={"row"}
                    alignItems={"center"}
                    gap={"x16"}
                  >
                    <YView>
                      <Image
                        style={{
                          height: 40,
                          width: 40,
                        }}
                        source={require("@/assets/images/Avatar (1).png")}
                      />
                    </YView>

                    <YView>
                      <Text>Plogged</Text>
                      <Text>Just now</Text>
                    </YView>
                  </XView>
                  <TouchableOpacity>
                    <OptionsIcon />
                  </TouchableOpacity>
                </YView>
                <YView gap={"x16"}>
                  <YView>
                    <Text>
                      Lorem ipsum, or lipsum as it is sometimes known, is dummy
                      text used in laying out print, graphic or web designs.
                    </Text>
                  </YView>
                  <PostImageDisplay images={[""]} handleCancel={() => null} />
                    <XView flexDirection={'row'} alignItems={'center'} gap={'l'}>

                    </XView>
                </YView>
              </YView>
            );
          }}
        />
      </YView>
    </YView>
  );
};

export default Posts;

const styles = StyleSheet.create({});
