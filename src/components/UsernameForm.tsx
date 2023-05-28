import { VStack } from "native-base";
import { QuestionnaireHeader } from "@components/QuestionnaireHeader";
import { Button } from "@components/Button";
import { Controller, useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { yupResolver } from "@hookform/resolvers/yup";
import { ChangeScreenButton } from "./ChangeScreenButton";
import * as yup from "yup";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { Input } from "./Input";
import { SignUpFormDataProps } from "@screens/AuthScreens/SignUp";

type UsernameFormDataProps = {
  username: string;
};

type Props = {
  tempData?: SignUpFormDataProps;
};

const usernameFormSchema = yup.object({
  username: yup
    .string()
    .matches(/^[a-z0-9._]+$/, "Utilize apenas letras minúsculas e números ou '.' e '_'.")
    .required("Informe seu nome de usuário"),
});
export function UsernameForm({ tempData }: Props) {
  const { navigate } = useNavigation<AppNavigatorRoutesProps>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UsernameFormDataProps>({
    resolver: yupResolver(usernameFormSchema),
  });

  async function handleCreateUsername({ username }: UsernameFormDataProps) {
    try {
      const newTempData = { ...tempData, username: username.toLowerCase() };
      // fazer requisição enviando o newTempData para o servidor.
      navigate('journey')
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <VStack flex={1}>
      <ChangeScreenButton />
      <VStack position="relative">
        <QuestionnaireHeader title="Como devemos chamá-lo?" />
        <Controller
          control={control}
          name="username"
          render={({ field: { onChange, value } }) => (
            <Input
              underline
            
              autoCapitalize="none"
              placeholder="Nome de usuário"
              mt={20}
              onChangeText={(text) => onChange(text.trim())}
              value={value}
              returnKeyType="send"
              onSubmitEditing={handleSubmit(handleCreateUsername)}
              errorMessage={errors.username?.message}
            />
          )}
        />

        <Button
          title="Finalizar"
          mt={20}
          onPress={handleSubmit(handleCreateUsername)}
        />
      </VStack>
    </VStack>
  );
}
