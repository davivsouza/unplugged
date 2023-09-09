import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { Box, useTheme } from "native-base";
import { AuthRoutes } from "./auth.routes";
import { useColorMode } from 'native-base'
import { useState } from "react";
import { AppRoutes } from "./app.routes";
import { StatusBar } from "react-native";
import { useAuth } from "@hooks/useAuth";
export function Routes() {


  const { colors } = useTheme();
  const { colorMode } = useColorMode()
  const { user } = useAuth()
  const theme = DefaultTheme;
  theme.colors.background = colorMode === 'light' ? colors.white : colors.black;


  return (
    <Box flex={1}>
      <StatusBar
        barStyle={user.id ? "light-content" : 'dark-content'}
        backgroundColor="transparent"
        translucent
      />
      <NavigationContainer theme={theme}>
        {
          user.id ? <AppRoutes /> : <AuthRoutes />
        }
      </NavigationContainer>
    </Box>
  );
}
