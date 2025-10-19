import { AppTheme } from "@/theme";
import { YView } from "@/theme/component";
import { useTheme } from "@shopify/restyle";
import React from "react";
import { Control, Controller, FieldErrors, FieldValues, Path } from "react-hook-form";
import { StyleSheet, Text, TextInput } from "react-native";
import TextfieldLabel from "../TextfieldLabel";

interface TextfieldProps<T extends FieldValues> {
  label: string;
  placeholder: string;
  multiline?: boolean;
  control: Control<T>;
  name: Path<T>;
  rules?: any;
  secureTextEntry?: boolean;
  errors?: FieldErrors<T>;
}

const Textfield = <T extends FieldValues>({
  label,
  placeholder,
  multiline,
  control,
  name,
  rules,
  secureTextEntry,

}: TextfieldProps<T>) => {
  const theme = useTheme<AppTheme>();



  return (
    <YView gap={'xs'}>
      <TextfieldLabel label={label} />
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, onBlur, value,  }, fieldState: { error } }) => (
          <>
            <TextInput
              placeholder={placeholder}
              multiline={multiline}
              placeholderTextColor={"#99999D"}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              secureTextEntry={secureTextEntry}
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
                borderWidth: error ? 1 : 0,
                borderColor: error ? '#EF4444' : 'transparent',
              }}
            />
            {error && (
              <Text
                style={{
                  color: '#EF4444',
                  fontSize: 12,
                  fontFamily: theme.fontFamilies.regular,
                  marginTop: 4,
                }}
              >
                {error.message}
              </Text>
            )}
          </>
        )}
      />
    </YView>
  );
};

export default Textfield;

const styles = StyleSheet.create({});
