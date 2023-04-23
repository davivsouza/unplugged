import { Heading, Text, VStack } from "native-base";
import { WelcomeCard } from "../components/WelcomeCard";
import {useNavigation} from '@react-navigation/native'
import { AuthNavigatorRouteProps } from "../routes/auth.routes";

export function HasAccount() {
    const navigation = useNavigation<AuthNavigatorRouteProps>()

    function handleNewUser(){
        navigation.navigate('signIn')
    }
  return (
    <VStack flex={1} px={8} py={90} bg="white">
     
      <VStack my={8} alignItems="flex-start">
        <WelcomeCard
        
        onPress={handleNewUser}
          label="Sou Novo"
          description="Use essa opção para criar uma conta."
        />
        <WelcomeCard
          label="Já tenho conta"
          description="Use essa opção para entrar na sua conta."
          hasAccount
        />
      </VStack>
    </VStack>
  );
}
