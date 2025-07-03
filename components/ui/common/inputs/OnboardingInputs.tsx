import { AppTheme } from "@/theme";
import { Text, XView, YView } from "@/theme/component";
import { useTheme } from "@shopify/restyle";
import React from "react";
import { StyleSheet, TextInput } from "react-native";

interface OnboardingTextfieldProps {
  label: string;
  placeholder?: string;
}
const OnboardingTextfield: React.FC<OnboardingTextfieldProps> = ({
  label,
  placeholder,
}) => {
  const theme = useTheme<AppTheme>();
  return (
    <YView flexDirection={"column"} gap={'m'}>
      <XView>
        <Text
          variant={"textDefault"}
          fontSize={18}
          fontFamily={"InterSemiBold"}
          lineHeight={26}
        >
          {label}
        </Text>
      </XView>

      <TextInput
        placeholder={placeholder}
        placeholderTextColor={"#99999D"}
        style={{
          width: "100%",
          borderBottomColor: theme.colors.borderLight,
          borderBottomWidth: 1,
          paddingBottom: 8,
          fontSize: 15,
          lineHeight: 15,
          fontFamily: theme.fontFamilies.medium,
          color: theme.colors.text,
        }}
      />
    </YView>
  );
};

export default OnboardingTextfield;

const styles = StyleSheet.create({});
