import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRouteProps } from "@routes/auth.routes";
import { Center, Text } from "native-base";
import { useEffect } from "react";
import { TouchableOpacity } from "react-native";

export function Questionnaire() {
  const navigation = useNavigation<AuthNavigatorRouteProps>();
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

  return (
    <Center>
      Você tem problemas mentais?
      <TouchableOpacity onPress={() => navigation.navigate('signUp')}>
        <Text fontSize="lg" borderWidth={1} rounded="lg" p={2} mt={2}>Tenho</Text>
      </TouchableOpacity>
    </Center>
  );
}
