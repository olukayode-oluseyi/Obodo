import CalenderIcon from "@/assets/icons/calender.svg";
import LocationIcon from "@/assets/icons/location.svg";
import { Button } from "@/components/ui/common/button";
import Options from "@/components/ui/common/Options";
import { AppTheme } from "@/theme";
import { Text, XView, YView } from "@/theme/component";
import { useTheme } from "@shopify/restyle";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import RegisteredEventCard from "./RegisteredEventCard";

const EventOverview = () => {
  const { width, height } = useWindowDimensions();
  const router = useRouter();
  const theme = useTheme<AppTheme>();
  return (
    <YView flex={1}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          gap: 16,
          width: width - 32,
          paddingVertical: 16,
          paddingBottom: 250,
          marginHorizontal: 16,
        }}
      >
        <YView backgroundColor={"white"} borderRadius={"x20"}>
          <XView padding={"m"} paddingBottom={"none"}>
            <Image
              style={{
                height: 167,
                width: width - 32 - 24,
                borderRadius: 10,
              }}
              source={require("@/assets/images/Cover.png")}
            />
          </XView>
          <YView paddingVertical={"l"} paddingHorizontal={"x20"} gap={"s"}>
            <YView gap={"x16"}>
              <XView
                flexDirection={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Text variant={"homeSubHeading"}>The June Sitout 2024</Text>
                <Options />
              </XView>
              <XView>
                <Text lineHeight={22} fontSize={15}>
                  Mi sodales diam facilisi venenati tincidunt urna tortor. Justo
                  scelerisque quis dui. Mi tellus lectus rutrum libero
                  consequat. Elit habitant tristique eu a sagittis porta.
                </Text>
              </XView>
            </YView>

            <YView gap={"x16"}>
              <XView gap={"x16"} flexDirection={"row"} alignItems={"center"}>
                <Image
                  style={{
                    height: 40,
                    width: 40,
                  }}
                  source={require("@/assets/images/Avatar.png")}
                />
                <Text>
                  By{" "}
                  <Text fontFamily={"InterBold"}>Relationship & Marriage</Text>{" "}
                </Text>
              </XView>
              <XView gap={"x16"} flexDirection={"row"} alignItems={"center"}>
                <XView
                  width={40}
                  height={40}
                  backgroundColor={"ProductBlack200"}
                  borderRadius={"bottonPrimaryRadius"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <CalenderIcon />
                </XView>

                <Text>Happening now</Text>
              </XView>
              <XView
                flex={1}
                gap={"x16"}
                flexDirection={"row"}
                alignItems={"flex-start"}
              >
                <XView
                  width={40}
                  height={40}
                  backgroundColor={"ProductBlack200"}
                  borderRadius={"bottonPrimaryRadius"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <LocationIcon fill={'#707075'} />
                </XView>

                <YView flex={1} gap={"m"}>
                  <Text>
                    Owena House, 76 Ralph Shodeinde, By Ministry of Finance,
                    Central Business District, Abuja, Nigeria.
                  </Text>
                  <Text
                    fontSize={12}
                    lineHeight={16}
                    fontFamily={"InterMedium"}
                    color={"Green800"}
                  >
                    View on Maps
                  </Text>
                </YView>
              </XView>
            </YView>
          </YView>
        </YView>
        <YView backgroundColor={"white"} borderRadius={"x20"}>
          <XView padding={"x16"}>
            <Text fontSize={18} lineHeight={26}>
              200{" "}
              <Text fontSize={18} lineHeight={26} fontFamily={"InterSemiBold"}>
                Registered
              </Text>
            </Text>
          </XView>
          <YView paddingHorizontal={"x16"} gap={"x16"}>
            {Array.from({ length: 5 }).map((ite, idx) => {
              return <RegisteredEventCard sliced key={idx} index={idx} />;
            })}
          </YView>
          <XView padding={"x20"}>
            <Button
              onPress={() => router.push("/(app)/(tabs)/event/[id]/registered")}
              style={{
                backgroundColor: theme.colors.ProductBlack100,
              }}
              variantText={"buttonOutline"}
              title="See all"
            />
          </XView>
        </YView>
      </ScrollView>
    </YView>
  );
};

export default EventOverview;

const styles = StyleSheet.create({});
