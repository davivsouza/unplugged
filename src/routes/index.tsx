import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { Box, useTheme } from "native-base";
import { AuthRoutes } from "./auth.routes";
import {useColorMode} from 'native-base'
export function Routes() {
  const { colors } = useTheme();

  const {colorMode} = useColorMode()
  
  const theme = DefaultTheme;
  theme.colors.background = colorMode === 'light' ? colors.white : colors.black ;

  return (
    <Box flex={1} bg={colorMode === 'light' ? 'white' : 'black'}>
      <NavigationContainer theme={theme}>
        <AuthRoutes />
      </NavigationContainer>
    </Box>
  );
}
