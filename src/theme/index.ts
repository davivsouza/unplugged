import { extendTheme } from "native-base";

export const THEME = extendTheme({
  colors: {
    gray: {
        50: '#F8F8F8',
        700: '#181818'
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
