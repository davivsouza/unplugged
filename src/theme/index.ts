import { extendTheme } from "native-base";

export const THEME = extendTheme({
  colors: {
    gray: {
        50: '#F8F8F8',
        200: "#CACACA",
        400: "#606060",
        500: "#232227",
        600: "#3E3E3E",
        700: '#181818',
        800: '#0D0C10',
    },
    purple: {
      500: '#6C63FF',
      700: '#443EA3',
      800: '#221E2B',
      900: '#2B2634',
    },
    red: {
      300: "#FF6584"
  },
    white: "#FFFFFF",
  },
  fonts: {
    heading: "Epilogue_700Bold",
    body: "Epilogue_400Regular",
    semiBold: 'Epilogue_600SemiBold'
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    '2xl': 25,
    '3xl': 32,
  },
});
