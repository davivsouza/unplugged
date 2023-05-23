import { Text, VStack } from "native-base";
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

type FormDataProps = {
  email: string;
  password: string;
};

const signUpSchema = yup.object({
  email: yup.string().required("Informe seu E-mail").email("E-mail inválido."),
  password: yup
    .string()
    .required("Informe a senha")
});

export function SignIn() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

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

  function handleSignIn({ email, password }: FormDataProps) {
    navigation.navigate("journey");
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
        <Button title="Entrar" my={12} onPress={handleSubmit(handleSignIn)} />
      </VStack>
      <ThirdPartyAuth />
    </VStack>
  );
}
