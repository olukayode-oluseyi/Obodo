import Avatar from "@/assets/icons/avatar2.svg";
import SendIcon from "@/assets/icons/send.svg";

import { AppTheme } from "@/theme";
import { Text, XView, YView } from "@/theme/component";
import { useTheme } from "@shopify/restyle";
import React from "react";
import {
    FlatList,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Commentcard from "../../components/Commentcard";
import Postcard from "../../components/Postcard";

const SinglePostDetails = () => {
  const { top, bottom } = useSafeAreaInsets();
  const theme = useTheme<AppTheme>();

  const renderItem = ({ item, index }: any) => {
    return <Commentcard />;
  };
  return (
    <YView flex={1} style={{}}>
      <FlatList
        style={{
          paddingTop: top + 10,
          backgroundColor: theme.colors.backgroundTertiary,
          paddingHorizontal: theme.spacing.x16,
        }}
        contentContainerStyle={{
          backgroundColor: theme.colors.white,
          borderRadius: theme.borderRadii.l,
          paddingBottom: theme.spacing.x16 + 250,
          gap: theme.spacing.l,
        }}
        keyExtractor={(item, id) => item.toString()}
        ListHeaderComponent={
          <YView>
            <Postcard location="comments" />
            <XView
              paddingHorizontal={"x16"}
              flexDirection={"row"}
              alignItems={"center"}
              gap={"s"}
            >
              <YView
                width={40}
                backgroundColor={"UIDark100"}
                paddingVertical={"m"}
                borderRadius={"x16"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Avatar />
              </YView>
              <XView
                borderRadius={"m"}
                flex={1}
                backgroundColor={"ProductBlack100"}
                padding={"m"}
                flexDirection={"row"}
                alignItems={"center"}
              >
                <TextInput
                  placeholder="Write a comment"
                  style={{
                    flex: 1,
                  }}
                />
                <SendIcon />
              </XView>
            </XView>
          </YView>
        }
        ListFooterComponent={
          <YView alignItems={"center"}>
            <TouchableOpacity
              style={{
                paddingHorizontal: theme.spacing.x16,
                height: 32,
                justifyContent: 'center',
                borderWidth: 1,
                borderColor: theme.colors.ProductBlack200,
                borderRadius: theme.borderRadii.bottonPrimaryRadius,
              }}
            >
              <Text
                fontFamily={"InterSemiBold"}
                fontSize={14}
                lineHeight={18}
                color={"text"}
              >
                Load more comments
              </Text>
            </TouchableOpacity>
          </YView>
        }
        data={[1, 2, 3]}
        renderItem={renderItem}
      />
    </YView>
  );
};

export default SinglePostDetails;

const styles = StyleSheet.create({});
