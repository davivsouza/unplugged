import { useNavigation } from "@react-navigation/native";
import { Center } from "native-base";
import { useEffect } from "react";

export function Questionnaire() {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.addListener("beforeRemove", (e) => {
      // Prevent default behavior of leaving the screen
      e.preventDefault();
    });

    return () => {
      navigation.removeListener("beforeRemove", (e) => {
        e.preventDefault();
      });
    };
  }, [navigation]);

  return <Center>SEXO</Center>;
}
