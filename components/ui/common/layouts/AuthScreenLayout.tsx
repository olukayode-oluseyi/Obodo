import Logo from "@/assets/icons/logo.svg";
import { Text, XView, YView } from "@/theme/component";
import React, { ReactNode } from "react";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type AuthScreenLayoutProps = {
  children: ReactNode;
  title: string;
};

const AuthScreenLayout = ({ children, title }: AuthScreenLayoutProps) => {
  const { top, bottom } = useSafeAreaInsets();
  return (
    <YView
      paddingHorizontal={"l"}
      flex={1}
      gap={'x32'}
      style={{
        paddingTop: top + 20,
        backgroundColor: '#FBFBFB',
      }}
    >
      <YView alignItems={"center"} gap={'x32'}>
        <Logo />
        <XView>
          <Text variant={"authHeading"}>{title}</Text>
        </XView>
      </YView>
      <YView>{children}</YView>
    </YView>
  );
};

export default AuthScreenLayout;

const styles = StyleSheet.create({});
