import { StatusBar } from "react-native";
import { NativeBaseProvider } from "native-base";
import {useState} from 'react'
import { Routes } from "./src/routes";
import {
  useFonts,
  Epilogue_400Regular,
  Epilogue_600SemiBold,
  Epilogue_700Bold,
} from "@expo-google-fonts/epilogue";
import { LinearGradient } from "expo-linear-gradient";

import { Loading } from "@components/Loading";
import { THEME } from "./src/theme";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  const [fontsLoaded] = useFonts({
    Epilogue_400Regular,
    Epilogue_700Bold,
    Epilogue_600SemiBold,
  });

  const config = {
    dependencies: {
      "linear-gradient": LinearGradient,
    },
  };

  return (
    <NativeBaseProvider theme={THEME} config={config}>
      
      {fontsLoaded ? <Routes /> : <Loading />}
    </NativeBaseProvider>
  );
}
