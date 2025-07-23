import { TabList, Tabs, TabSlot, TabTrigger, } from "expo-router/ui";
import React from "react";

import TabTriggerButton from "@/components/ui/common/layouts/TabTriggerButton";
import { XView } from "@/theme/component";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabLayout() {
  const { bottom } = useSafeAreaInsets();

  return (
    <Tabs>
      <TabSlot />
      <TabList asChild>
        <XView
          position={"absolute"}
          // left={20}
          // right={20}
          bottom={32}
          padding={"s"}
          alignSelf={"center"}
          backgroundColor={"black"}
          borderRadius={"bottonPrimaryRadius"}
          gap={"xs"}
          paddingVertical={"s"}
        >
          <TabTrigger name="home" href="/(app)/(tabs)" asChild>
            <TabTriggerButton title={"Home"} />
          </TabTrigger>
          <TabTrigger name="post" href="/(app)/(tabs)/post" asChild>
            <TabTriggerButton title={"Posts"} />
          </TabTrigger>
          <TabTrigger name="event" href="/(app)/(tabs)/event" asChild>
            <TabTriggerButton title={"Events"} />
          </TabTrigger>
          <TabTrigger name="profile" href="/(app)/(tabs)/profile" asChild>
            <TabTriggerButton title={"Profile"} />
          </TabTrigger>

         
          {/* <TabTrigger
            name="home"
            href="/(app)/(tabs)"
            asChild
          >
            <TabTriggerButton
  
              title={"Transactions"}
            />
          </TabTrigger> */}
        </XView>
      </TabList>
    </Tabs>
  );
}
