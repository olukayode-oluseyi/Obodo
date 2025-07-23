import { AppTheme } from "@/theme";
import { YView } from "@/theme/component";
import { useTheme } from "@shopify/restyle";
import React from "react";
import { StyleSheet, TextInput } from "react-native";
import TextfieldLabel from "../TextfieldLabel";

interface TextfieldProps {
  label: string;
  placeholder: string;
  multiline?: boolean; 
}
const Textfield: React.FC<TextfieldProps> = ({ label, placeholder, multiline }) => {
  const theme = useTheme<AppTheme>();
  return (
    <YView gap={'xs'}>
      <TextfieldLabel label={label} />
      <TextInput
        placeholder={placeholder}
        multiline={multiline}
        placeholderTextColor={"#99999D"}
        style={{
          height: 48,
          //minHeight: 176,
        
          backgroundColor: theme.colors.backgroundTertiary,
          borderRadius: 11,
          paddingHorizontal: theme.spacing.x16,
          fontSize: 16,
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
