import { createTheme } from "@shopify/restyle";

const baseSpacing = {
  none: 0,
  x2: 2,
  xs: 4,
  s: 8,
  x10: 10,
  m: 12,
  x16: 16,
  x20: 20,
  l: 24,
  x28: 28,
  x32: 32,
  ml: 36,
  xl: 40,
  x64: 64,
};

const baseBorderRadii = {
  none: 0,
  s: 8,
  m: 10,
  x12: 12,
  x16: 16,
  x20: 20,
  l: 24,
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
    black: "#000000",


    borderColor: "#99999D",
    GrayScale100: "#F6F6F6",
    GrayScale600: "#626265",
    GrayScale900: "#1E1F23",
    UIDark100: "#F2F3F4",
    ProductBlack100: "#F5F5F5",
    ProductBlack200: "#E8E8E8",
    ProductBlack300: "#D6D6D8",
    ProductBlack400: "#99999D",
    ProductBlack500: "#848489",
    ProductBlack600: "#707075",
    ProductBlack700: "#5B5B61",
    Success200: "#D3F2D0",
    Green100: "#E9FAEF",
    Green200: "#D3F5DF",
    Green300: "#A7EBBE",
    Green800: '#27AE60',
    Yellow100: "#FFD500",
    Warning100: "#FFEAEB",
    welcomeCurrentIndex: "#242424",
    _welcomeCurrentIndex: "#E4E4E4",

    _: '#F4F4F4'
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
    homeSubHeading: {
      fontFamily: "InterBold",
      fontSize: 18,
      lineHeight: 26,
      color: "text",
    },

    homeSubHeading2: {
      fontFamily: "InterBold",
      fontSize: 16,
      lineHeight: 22,
      color: "text",
    },
    postFieldPostBtn: {
      fontFamily: "InterSemiBold",
      fontSize: 16,
      lineHeight: 22,
      color: "ProductBlack300"
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
