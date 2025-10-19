import { useAuthStore } from "@/services/stores/auth.store";
import { YView } from "@/theme/component";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import HomeGreetings from "../components/HomeGreetings";
import HomeHeader from "../components/HomeHeader";
import HomeInsights from "../components/HomeInsights";
import HomeTodoList from "../components/HomeTodoList";
import HomeTopContributors from "../components/HomeTopContributors";
import HomeUpcomingEvents from "../components/HomeUpcomingEvents";

const Home = () => {
  const { top, bottom } = useSafeAreaInsets();
  const user = useAuthStore((state) => state.user);
  return (
    <YView
      flex={1}
      bottom={bottom}
      backgroundColor={"backgroundTertiary"}
      top={top + 10}
    >
      <HomeHeader />

      <ScrollView
        style={{}}
        contentContainerStyle={{
          gap: 32,
          paddingBottom: 300,
        }}
      >
        <HomeGreetings />
        <HomeInsights />
        
          <HomeUpcomingEvents />
          <HomeTodoList />
            <HomeTopContributors/>
      </ScrollView>
    </YView>
  );
};

export default Home;

const styles = StyleSheet.create({});
