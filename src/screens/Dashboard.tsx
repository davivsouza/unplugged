import { Button } from "@components/Button";
import { Center, Text } from "native-base";
import { useEffect, useState } from "react";
import { PermissionsAndroid } from "react-native";



export function Dashboard() {
    async function requestUsagePermission() {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.PACKAGE_USAGE_STATS,
            {
              title: "Permissão de uso do dispositivo",
              message:
                "Precisamos de sua permissão para acessar as informações de uso do dispositivo.",
              buttonNeutral: 'Pergunte-me depois',
              buttonPositive: "OK",
              buttonNegative: "Cancelar",
            }
          );
      
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("BOa carai");
          } else {
            console.log("vou pegar seus dados de qualquer jeito neguinho!");
          }
        } catch {}
      }

  return (
    <Center>
      <Text>Dashboard</Text>
      <Button title="solicitar Permissão" onPress={requestUsagePermission} />
    </Center>
  );
}
