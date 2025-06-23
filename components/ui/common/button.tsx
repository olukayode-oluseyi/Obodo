// components/ui/common/button.tsx
import { Text } from "@/theme/component";
import {
    createRestyleComponent,
    createVariant,
    VariantProps,
} from "@shopify/restyle";
import React from "react";
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
  loading?: boolean;
  disabled?: boolean;
  onPress?: () => void;
} & TouchableOpacityProps;

export const Button: React.FC<ButtonProps> = ({
  title,
  variant = "primary",
  loading = false,
  disabled = false,
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
        <Text
          textAlign={"center"}
          fontSize={16}
          fontWeight={"700"}
          color={"background"}
          variant="button"
        >
          {title}
        </Text>
      )}
    </ButtonContainer>
  );
};
