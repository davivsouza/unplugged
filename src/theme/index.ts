import { extendTheme } from "native-base";

export const THEME = extendTheme({
  colors: {
    gray: {
        50: '#F8F8F8'
    },
    white: "#FFFFFF",
  },
  fonts: {
    heading: "Epilogue_700Bold",
    body: "Epilogue_400Regular",
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
  },
});
