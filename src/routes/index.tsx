import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { Box, useTheme } from "native-base";
import { AuthRoutes } from "./auth.routes";
import {useColorMode} from 'native-base'
import { useState } from "react";
import { AppRoutes } from "./app.routes";
export function Routes() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const { colors } = useTheme();
  const {colorMode} = useColorMode()
  const theme = DefaultTheme;
  theme.colors.background = colorMode === 'light' ? colors.white : colors.black ;


  return (
    <Box flex={1} bg={colorMode === 'light' ? 'white' : 'black'}>
      <NavigationContainer theme={theme}>
        {
          isLoggedIn ? <AppRoutes />:<AuthRoutes/>
        }
      </NavigationContainer>
    </Box>
  );
}
