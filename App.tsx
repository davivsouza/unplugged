import { NativeBaseProvider } from "native-base";
import { useState } from 'react'
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
import { Splash } from "@components/Splash";
import { preventAutoHideAsync } from 'expo-splash-screen'
import { GoalsContextProvider } from "@contexts/HabitsContext";
import { TimerControlProvider } from "@contexts/TimerControlContext";
import { AuthContextProvider } from "@contexts/AuthContext";
preventAutoHideAsync();

export default function App() {
  const [splashComplete, setSplashComplete] = useState(false)
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

      {splashComplete
        ? fontsLoaded
          ? (
            <AuthContextProvider>
              <GoalsContextProvider>
                <TimerControlProvider>
                  <Routes />
                </TimerControlProvider>
              </GoalsContextProvider>
            </AuthContextProvider>
          )
          : <Loading />
        : <Splash onComplete={setSplashComplete} />
      }
    </NativeBaseProvider>
  );
}
