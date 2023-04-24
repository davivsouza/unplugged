import { Text, VStack } from "native-base";
import { FormHeader } from "@components/FormHeader";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ThirdPartyAuth } from "@components/ThirdPartyAuth";

export function SignUp() {
  const navigation = useNavigation()

  return (
    <VStack flex={1} bg="white">
      <FormHeader heading="Vamos Começar" text="Preencha os campos abaixo." />
      <VStack mt={16}>
        <Input placeholder="Nome completo" autoCapitalize="sentences" />
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