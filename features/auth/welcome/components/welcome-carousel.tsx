import WelcomeItem from "@/components/ui/auth/WelcomeItem";
import { AppTheme } from "@/theme";

import { XView, YView } from "@/theme/component";
import { useTheme } from "@shopify/restyle";
import React, { useCallback, useRef } from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import { interpolate } from "react-native-reanimated";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";

interface WelcomeCarouselProps {
  data: {
    title: string;
    id: number;
    description: string;
    image: string;
  }[];
  currentIndex: number;
  setCurrentIndex: (id: number) => void;
}

const WelcomeCarousel: React.FC<WelcomeCarouselProps> = ({
  data,
  setCurrentIndex,
  currentIndex,
}) => {
  const { width } = useWindowDimensions();
  const carouselRef = useRef<ICarouselInstance | null>(null);
  // const [currentIndex, setCurrentIndex] = React.useState(0);
  const theme = useTheme<AppTheme>();
  const animationStyle = React.useCallback((value: number) => {
    "worklet";

    // const zIndex = interpolate(value, [-1, 0, 1], [10, 20, 30]);
    const scale = interpolate(value, [-1, 0, 1], [1.25, 1, 0.25]);
    const opacity = interpolate(value, [-0.75, 0, 1], [0, 1, 0]);

    return {
      transform: [{ scale }],
      opacity,
    };
  }, []);
  const onProgress = useCallback(
    (_: unknown, i: number) => {
      setCurrentIndex(Math.round(i));
    },
    [setCurrentIndex]
  );

  return (
    <YView flex={1} justifyContent={"center"} gap={"xl"} alignItems={"center"}>
      <XView>
        <Carousel
          ref={carouselRef}
          data={data}
          style={{}}
          containerStyle={{}}
          renderItem={({ item }) => <WelcomeItem key={item.id} item={item} />}
          width={width}
          loop={false}
          customAnimation={animationStyle}
          onProgressChange={onProgress}
        />
      </XView>

      <XView
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        gap={"m"}
        flex={1}
        position={"absolute"}
        bottom={20}
      >
        {data.map((_, index) => (
          <XView
            key={index}
            width={16}
            height={8}
            borderRadius={"bottonPrimaryRadius"}
            backgroundColor={
              index === currentIndex
                ? "welcomeCurrentIndex"
                : "_welcomeCurrentIndex"
            }
            opacity={index === currentIndex ? 1 : 0.3}
          />
        ))}
      </XView>
    </YView>
  );
};

export default WelcomeCarousel;

const styles = StyleSheet.create({});
