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
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';


type FormDataProps = {
  nickname: string,
  name: string
  email: string
  password: string
}

const signUpSchema = yup.object({
  nickname: yup.string().required('Informe o seu nome de usuário!'),
  name: yup.string().required('Informe seu nome completo.'),
  email: yup.string().required('Informe seu E-mail').email('E-mail inválido.'),
  password: yup.string().required('Informe a senha').min(6, 'A senha deve ter pelo menos 6 dígitos.')
})
export function SignUp() {
  const { navigate } = useNavigation<AuthNavigatorRouteProps>();

  const [usernameForm, setUsernameForm] = useState(false);
  const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema)
  })
  function handleAskName() {
    setUsernameForm(true);
  }

  function handleSignUp({ nickname, name, email, password }: FormDataProps) {
    console.log('tá lá')
  }
  return (
    <VStack flex={1} bg="white">
      {usernameForm ? (
        <VStack flex={1}>
          <ChangeScreenButton onPress={() => setUsernameForm(false)} />
          <VStack position="relative">
            <QuestionnaireHeader title="Como devemos chamá-lo?" />
            <Controller
              control={control}
              name="nickname"
              render={({ field: { onChange, value } }) => (
                <Input underline placeholder="Nome de usuário" mt={20} onChangeText={onChange} value={value} errorMessage={errors.nickname?.message}/>
              )}
            />
            <Button title="Finalizar" mt={20} onPress={handleSubmit(handleSignUp)}/>
          </VStack>
        </VStack>
      ) : (
        <>
          <VStack >
         <ChangeScreenButton
            onPress={() => navigate("welcome")}
          />
          <FormHeader
            heading="Vamos Começar"
            text="Preencha os campos abaixo."
          />
            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, value } }) => (
                <Input placeholder="Nome completo" autoCapitalize="words" onChangeText={onChange} value={value} errorMessage={errors.name?.message}/>
              )}
            />
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (
                <Input placeholder="E-mail" autoCapitalize="none" onChangeText={onChange} value={value} errorMessage={errors.email?.message}/>
              )}
            />
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value } }) => (
                <Input placeholder="Senha" secureTextEntry autoCapitalize="none" returnKeyType="send" onChangeText={onChange} value={value} errorMessage={errors.password?.message} onSubmitEditing={handleSubmit(handleSignUp)} />
              )}
            />
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
            onPress={handleSubmit(handleSignUp)}
            isForNextPage
            mt={4}
            alignSelf="flex-end"
          />

         
        </>
      )}
    </VStack>
  );
}
