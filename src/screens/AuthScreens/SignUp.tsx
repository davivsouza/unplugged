import { Text, VStack } from "native-base";
import { FormHeader } from "@components/FormHeader";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { ThirdPartyAuth } from "@components/ThirdPartyAuth";
import { AuthNavigatorRouteProps } from "@routes/auth.routes";
import { ChangeScreenButton } from "@components/ChangeScreenButton";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { UsernameForm } from "@components/UsernameForm";

export type SignUpFormDataProps = {
  username: string;
  name: string;
  email: string;
  password: string;
};

const signUpSchema = yup.object({
  name: yup.string().required("Informe seu nome completo."),
  email: yup.string().required("Informe seu E-mail").email("E-mail inválido."),
  password: yup
    .string()
    .min(8, "A senha deve ter pelo menos 8 dígitos.")
    .required("Informe a senha")
    .matches(/[0-9]/, "Senha deve conter pelo menos 1 número")
    .matches(/[A-Z]/, "Senha deve conter pelo menos 1 letra maiúscula")
    .matches(/\W|_/, "Senha deve conter pelo menos 1 caractere especial"),
});
export function SignUp() {
  const { navigate } = useNavigation<AuthNavigatorRouteProps>();
  const [tempUserData, setTempUserData] = useState<SignUpFormDataProps>();

  const [usernameForm, setUsernameForm] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormDataProps>({
    resolver: yupResolver(signUpSchema),
  });

  function handleAskUsername() {
    setUsernameForm(true);
  }

  async function handleTempData(data: SignUpFormDataProps) {
    try {
      setTempUserData(data);
      handleAskUsername();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <VStack flex={1} bg="white">
      {usernameForm ? (
        <UsernameForm tempData={tempUserData} />
      ) : (
        <>
          <VStack>
            <ChangeScreenButton onPress={() => navigate("welcome")} />
            <FormHeader
              heading="Vamos Começar"
              text="Preencha os campos abaixo."
            />
            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Nome completo"
                  autoCapitalize="words"
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.name?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="E-mail"
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="email-address"
                  autoComplete='email'
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.email?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Senha"
                  secureTextEntry
                  autoCapitalize="none"
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.password?.message}
                  returnKeyType="send"
                  onSubmitEditing={handleSubmit(handleTempData)}
                />
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
            onPress={handleSubmit(handleTempData)}
            isForNextPage
            mt={4}
            alignSelf="flex-end"
          />
        </>
      )}
    </VStack>
  );
}
