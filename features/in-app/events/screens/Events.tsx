import PageHeaders from "@/components/ui/common/headers/PageHeaders";
import { YView } from "@/theme/component";
import React from "react";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Events = () => {
  const { top, bottom } = useSafeAreaInsets();
  return (
    <YView
      bottom={bottom}
      backgroundColor={"backgroundTertiary"}
      top={top + 10}
      flex={1}
      paddingHorizontal={"x16"}
    >
      <PageHeaders title="Events" />
    </YView>
  );
};

export default Events;

const styles = StyleSheet.create({});
