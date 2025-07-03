import { createTheme } from "@shopify/restyle";

const baseSpacing = {
  none: 0,
  xs: 4,
  s: 8,
  m: 12,
  x16: 16,
  x20: 20,
  l: 24,
  x28: 28,
  x32: 32,
  ml: 36,
  xl: 40,
  x64: 64
};

const baseBorderRadii = {
  s: 4,
  m: 10,
  l: 25,
  xl: 50,

  bottonPrimaryRadius: 500,
};

export const lightTheme = createTheme({
  colors: {
    transparent: "transparent",
    background: "#FBFBFB",
    primary: "#20B954",
    text: "#32323A",
    textSecondary: "#707075",
    backgroundSecondary: "#B0B0B0",
    backgroundTertiary: "#F5F5F5",
    borderLight: "#E8E8E8",
    white: "#FFFFFF",


    ProductBlack500: '#848489',

    welcomeCurrentIndex: "#242424",
    _welcomeCurrentIndex: "#E4E4E4",
  },
  fontFamilies: {
    regular: "InterRegular",
    medium: "InterMedium",
    semiBold: "InterSemiBold",
    bold: "InterBold",
    extraBold: "InterExtraBold",
  },
  spacing: baseSpacing,
  borderRadii: baseBorderRadii,
  textVariants: {
    defaults: {
      fontSize: 16,
      color: "text",
      fontFamily: "InterRegular",
      lineHeight: 24,
    },
    textDefault: {
      fontSize: 16,
      color: "text",
      fontFamily: "InterRegular",
      lineHeight: 24,
    },
    authHeading: {
      fontSize: 24,
      color: "text",
      fontFamily: "InterBold",
      lineHeight: 32,
    },

    button: {
      fontSize: 16,
      color: "white",
      fontFamily: "InterSemiBold",
    },
    buttonOutline: {
      fontSize: 16,
      color: "text",
      fontFamily: "InterSemiBold",
    },
    error: {
      fontSize: 14,
      color: "error",
      fontFamily: "InterSemiBold",
    },
  },
  buttonVariants: {
    primary: {
      backgroundColor: "primary",
      height: 48,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "bottonPrimaryRadius",
    },
    outline: {
      backgroundColor: "transparent",
      borderWidth: 1,
      borderColor: "borderLight",
      borderRadius: "bottonPrimaryRadius",
      height: 48,
      alignItems: "center",
      justifyContent: "center",
    },
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
});

export const darkTheme = createTheme({
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    background: "#FBFBFB",
    primary: "#20B954",
    textPrimary: "#32323A",
    textSecondary: "#707075",
    backgroundSecondary: "#B0B0B0",
    backgroundTertiary: "#F5F5F5",
  },
});
