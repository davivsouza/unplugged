import { Text, VStack, useToast } from "native-base";
import { FormHeader } from "@components/FormHeader";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { TouchableOpacity } from "react-native";
import { ChangeScreenButton } from "@components/ChangeScreenButton";
import { useNavigation } from "@react-navigation/native";
import { ThirdPartyAuth } from "@components/ThirdPartyAuth";
import { Controller, useForm } from "react-hook-form";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

type FormDataProps = {
  email: string;
  password: string;
};

const signUpSchema = yup.object({
  email: yup.string().required("Informe seu E-mail").email("E-mail inválido."),
  password: yup.string().required("Informe a senha"),
});

export function SignIn() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const [loginTrys, setLoginTrys] = useState(5);
  const [tooManyTries, setTooManyTries] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const error = 1;
  const toast = useToast();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema),
  });

  function handleGoBack() {
    navigation.goBack();
  }

  async function handleSignIn(data: FormDataProps, e: any) {
    setIsLoading(true)
    try {
      
      if (error === 1) {
        throw new Error("Wrong password");
      }
      
    } catch (error) {
      setIsLoading(false)
      setLoginTrys((prevState) => prevState - 1);

      if (loginTrys <= 3 && loginTrys >= 1) {
        toast.show({
          title: `${loginTrys} tentativas restantes`,
          placement: "top",
          bgColor: "red.500",
        });
      } else if (loginTrys === 0) {
        setTooManyTries(true);
      } else {
        toast.show({
          title: `Senha incorreta, tente novamente.`,
          placement: "top",
          bgColor: "red.500",
        });
      }
    }
  }
  return (
    <VStack flex={1} bg="white">
      <ChangeScreenButton onPress={handleGoBack} />
      <FormHeader
        heading="Olá de novo"
        text="Sentimos sua falta, bem vindo de volta ao Unplugged."
      />
      <VStack>
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
              returnKeyType="send"
              onChangeText={onChange}
              value={value}
              errorMessage={errors.password?.message}
              onSubmitEditing={handleSubmit(handleSignIn)}
            />
          )}
        />

        <TouchableOpacity>
          <Text
            alignSelf="flex-end"
            color="gray.400"
            fontFamily="semiBold"
            fontSize="xs"
          >
            Esqueceu a senha?
          </Text>
        </TouchableOpacity>

        {tooManyTries ? (
          <>
            <Button
              title="Entrar"
              height={50}
              mt={12}
              mb={3}
              bgColor={'gray.200'}
              disabled={true}
            />
            <Text textAlign="center" color="red.500" fontSize="xs">
              Você tentou acessar muitas vezes, tente novamente mais tarde.
            </Text>
          </>
        ) : (
          <Button
            title="Entrar"
            isLoading={isLoading}
            mt={12}
            mb={3}
           
            onPress={handleSubmit(handleSignIn)}
          />
        )}
      </VStack>
      <ThirdPartyAuth />
    </VStack>
  );
}
