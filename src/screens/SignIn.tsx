import { Text, VStack } from "native-base";
import { FormHeader } from "@components/FormHeader";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { TouchableOpacity } from "react-native";
import { GoBack } from "@components/GoBack";
import { useNavigation } from "@react-navigation/native";
import { ThirdPartyAuth } from "@components/ThirdPartyAuth";

export function SignIn() {
  const navigation = useNavigation()
  function handleGoBack() {
    navigation.goBack()
  }
  return (
    <VStack flex={1} bg="white">
      <GoBack onPress={handleGoBack} />
      <FormHeader heading="Olá de novo" text="Sentimos sua falta, bem vindo de volta ao Unplugged." />
      <VStack mt={16}>
        <Input placeholder="E-mail" autoCapitalize="none" />
        <Input placeholder="Senha" secureTextEntry autoCapitalize="none" />
        <TouchableOpacity>
          <Text alignSelf="flex-end" color="gray.400" fontFamily="semiBold" fontSize="xs">Esqueceu a senha?</Text>
        </TouchableOpacity>
        <Button title="Entrar" mt={12} />
      </VStack>
      <ThirdPartyAuth />
    </VStack>
  )
}