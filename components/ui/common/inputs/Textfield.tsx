import { AppTheme } from "@/theme";
import { YView } from "@/theme/component";
import { useTheme } from "@shopify/restyle";
import React from "react";
import { StyleSheet, TextInput } from "react-native";
import TextfieldLabel from "../TextfieldLabel";

interface TextfieldProps {
  label: string;
  placeholder: string;
}
const Textfield: React.FC<TextfieldProps> = ({ label, placeholder }) => {
  const theme = useTheme<AppTheme>();
  return (
    <YView gap={'xs'}>
      <TextfieldLabel label={label} />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={"#99999D"}
        style={{
          height: 48,
          flex: 1,
          backgroundColor: theme.colors.backgroundTertiary,
          borderRadius: 11,
          paddingHorizontal: theme.spacing.x16,
          fontSize: 15,
          lineHeight: 22,
          fontFamily: theme.fontFamilies.regular,
          color: theme.colors.text,
        }}
      />
    </YView>
  );
};

export default Textfield;

const styles = StyleSheet.create({});
