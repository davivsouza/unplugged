import { Text, VStack } from "native-base";
import { FormHeader } from "@components/FormHeader";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { ThirdPartyAuth } from "@components/ThirdPartyAuth";
import { AuthNavigatorRouteProps } from "@routes/auth.routes";
import { ChangeScreenButton } from "@components/ChangeScreenButton";
import { QuestionnaireHeader } from "@components/QuestionnaireHeader";
import { useState } from "react";
import { Button } from "@components/Button";

export function SignUp() {
  const { goBack, navigate } = useNavigation<AuthNavigatorRouteProps>();


  const [usernameForm, setUsernameForm] = useState(false);
  
  function handleAskName() {
    setUsernameForm(true);
  }
  return (
    <VStack flex={1} bg="white">
      {usernameForm ? (
        <VStack flex={1}>
          <ChangeScreenButton onPress={() => goBack()} />
          <VStack position="relative">
            <QuestionnaireHeader title="Como devemos chamá-lo?" />
            <Input underline placeholder="Nome de usuário" mt={20} />
            <Button title="Finalizar" mt={20} />
          </VStack>
        </VStack>
      ) : (
        <>
          <FormHeader
            heading="Vamos Começar"
            text="Preencha os campos abaixo."
          />
          <VStack mt={14}>
            <Input placeholder="Nome completo" autoCapitalize="words" />
            <Input placeholder="E-mail" autoCapitalize="none" />
            <Input placeholder="Senha" secureTextEntry autoCapitalize="none" />
          </VStack>

          <ThirdPartyAuth />
          <Text textAlign="center" mt={6} color="gray.400">
            ao avançar você confirma os{" "}
            <Text fontWeight="bold" color="gray.500" underline>
              termos de uso
            </Text>{" "}
            do aplicativo.
          </Text>
          <ChangeScreenButton
            onPress={handleAskName}
            isForNextPage
            mt={8}
            alignSelf="flex-end"
          />
        </>
      )}
    </VStack>
  );
}
