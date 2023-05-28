import {  VStack } from "native-base";
import { useNavigation } from '@react-navigation/native'
import { WelcomeCard } from "@components/WelcomeCard";
import { FormHeader } from "@components/FormHeader";
import { AuthNavigatorRouteProps } from "@routes/auth.routes";

export function Welcome() {
  const navigation = useNavigation<AuthNavigatorRouteProps>()

  function handleNewUser() {
    navigation.navigate('introSlider')
  }
  function handleGoSignIn() {
    navigation.navigate('signIn')
  }
  return (
    <VStack flex={1}  bg="white">
      <FormHeader heading="Vamos Começar" text="Escolha umas das opções abaixo."/>
      <VStack my={8} alignItems="flex-start">
        <WelcomeCard
          label="Sou Novo"
          description="Use essa opção para criar uma conta."
          onPress={handleNewUser}
        />
        <WelcomeCard
          label="Já tenho conta"
          description="Use essa opção para entrar na sua conta."
          hasAccount
          onPress={handleGoSignIn}
        />
      </VStack>
    </VStack>
  );
}
