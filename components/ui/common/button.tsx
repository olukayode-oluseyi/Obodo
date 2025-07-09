// components/ui/common/button.tsx
import { Text, XView } from "@/theme/component";
import {
  createRestyleComponent,
  createVariant,
  VariantProps,
} from "@shopify/restyle";
import React, { ReactNode } from "react";
import {
  ActivityIndicator,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { AppTheme } from "../../../theme/types";

const ButtonContainer = createRestyleComponent<
  VariantProps<AppTheme, "buttonVariants"> & TouchableOpacityProps,
  AppTheme
>([createVariant({ themeKey: "buttonVariants" })], TouchableOpacity);

type ButtonProps = {
  title: string;
  variant?: keyof AppTheme["buttonVariants"];
  variantText?: any;
  icon?: ReactNode;
  loading?: boolean;
  disabled?: boolean;
  onPress?: () => void;
} & TouchableOpacityProps;

export const Button: React.FC<ButtonProps> = ({
  title,
  variantText = "button",
  variant = "primary",
  loading = false,
  disabled = false,
  icon,
  onPress,
  ...rest
}) => {
  return (
    <ButtonContainer
      variant={variant}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
      style={{ opacity: disabled || loading ? 0.6 : 1 }}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator color="#FFF" />
      ) : (
        <XView flexDirection={"row"} alignItems={"center"} gap={'s'}>
          {icon}
          <Text variant={variantText}>{title}</Text>
        </XView>
      )}
    </ButtonContainer>
  );
};
