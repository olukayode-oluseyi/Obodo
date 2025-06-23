import WelcomeItem from "@/components/ui/auth/WelcomeItem";

import { Box } from "@/theme/component";
import React, { useCallback, useRef } from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import { interpolate } from "react-native-reanimated";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";


interface WelcomeCarouselProps {
    data: {
        title: string;
        id: number;
    }[];
    setCurrentIndex: (id: number)=>void
}

const WelcomeCarousel: React.FC<WelcomeCarouselProps> = ({ data , setCurrentIndex}) => {
  const { width } = useWindowDimensions();
  const carouselRef = useRef<ICarouselInstance | null>(null);
 // const [currentIndex, setCurrentIndex] = React.useState(0);

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
  const onProgress = useCallback((_: unknown, i: number) => {
    setCurrentIndex(Math.round(i));
  }, [setCurrentIndex]);

  return (
    <Box flex={1} >
      <Carousel
        ref={carouselRef}
        data={data}
        style={{
    
        }}
        containerStyle={{
   
        }}
        renderItem={({ item }) => <WelcomeItem key={item.id} item={item} />}
        width={width}
        loop={false}
        customAnimation={animationStyle}
        onProgressChange={onProgress}
      />
     
    </Box>
  );
};

export default WelcomeCarousel;

const styles = StyleSheet.create({});
