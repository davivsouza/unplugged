import { Text } from "native-base";
import { useEffect } from "react";
import { NativeModules, Platform } from "react-native";

export function TesteDeTudo() {
  useEffect(() => {
    if (Platform.OS === 'android') {
      NativeModules.UsageStats.getAppUsage().then(appUsage => {
        // appUsage agora é um objeto que mapeia nomes de pacotes para um objeto contendo o nome do pacote, o tempo total em primeiro plano, o nome do aplicativo e o ícone do aplicativo
        console.log(appUsage);
      });
    }
  }, []);
  return (
    <Text>
      TESTE
    </Text>
  )
}