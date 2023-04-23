import { StatusBar } from "react-native";
import { NativeBaseProvider } from "native-base";
import { Routes } from "./src/routes";
import {
  useFonts,
  Epilogue_400Regular,
  Epilogue_700Bold,
} from "@expo-google-fonts/epilogue";
import {LinearGradient} from 'expo-linear-gradient'

import { Loading } from "./src/components/Loading";
import {THEME} from './src/theme'


export default function App() {
  const [fontsLoaded] = useFonts({
    Epilogue_400Regular,
    Epilogue_700Bold,
  });

  const config = {
    dependencies: {
      'linear-gradient': LinearGradient
    }
  };
  
  return (
    <NativeBaseProvider theme={THEME} config={config}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </NativeBaseProvider>
  );
}
