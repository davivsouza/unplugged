import { Pressable, Text, VStack } from "native-base";
import { FormHeader } from "@components/FormHeader";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { ThirdPartyAuth } from "@components/ThirdPartyAuth";

export function SignUp() {
  const navigation = useNavigation();

  return (
    <VStack flex={1} bg="white">
      <FormHeader heading="Vamos Começar" text="Preencha os campos abaixo." />
      <VStack mt={14}>
        <Input placeholder="Nome completo" autoCapitalize="sentences" />
        <Input placeholder="E-mail" autoCapitalize="none" />
        <Input placeholder="Senha" secureTextEntry autoCapitalize="none" />
        <Button title="Entrar" mt={12} />
      </VStack>

      <ThirdPartyAuth />
      <Text textAlign="center" mt={6} color="gray.400">
        ao avançar você confirma os{" "}
        <Text fontWeight="bold" color="gray.500" underline>
          termos de uso
        </Text>{" "}
        do aplicativo.
      </Text>
    </VStack>
  );
}
