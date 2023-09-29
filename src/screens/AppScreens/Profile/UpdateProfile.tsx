import GoBackSvg from "@assets/goback.svg";
import { ScreenContainer } from "@components/ScreenContainer";
import { Box, HStack, Pressable, Text, VStack, useToast } from "native-base";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons'
import { Input } from "@components/Input";
import { useAuth } from "@hooks/useAuth";
import { Button } from "@components/Button";
import { Controller, useForm } from "react-hook-form";
import { api } from "../../../services/api";
import { useState } from "react";


type UpdateFormDataProps = {
  name: string
  nickname: string
  email: string
}

export function UpdateProfile() {
  const { goBack, navigate } = useNavigation<AppNavigatorRoutesProps>()
  const { user, updateUserProfile } = useAuth()
  const [isUpdating, setIsUpdating] = useState(false)
  const toast = useToast()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateFormDataProps>({
    defaultValues: {
      name: user.name,
      nickname: user.nickname,
      email: user.email
    },
  });



  async function handleUpdateUser(data: UpdateFormDataProps) {
    try {
      setIsUpdating(true)
      const updatedUser = user;
      updatedUser.name = data.name
      updatedUser.email = data.email
      updatedUser.nickname = data.nickname

      await api.put('/users/update', data)
      await updateUserProfile(updatedUser)
      toast.show({
        title: 'Perfil atualizado com sucesso!',
        placement: 'top',
        bgColor: 'green.700',

      })
    } catch (err) {

    } finally {
      setIsUpdating(false)
      goBack()
    }
  }
  return (
    <ScreenContainer>
      <HStack alignItems="center" justifyContent="center" >
        <Pressable onPress={() => goBack()} position={'absolute'} left={-10} p={4}>
          <GoBackSvg fill="#fff" />
        </Pressable>
        <Text color="white" fontSize="2xl" fontFamily="heading" style={{
          elevation: 10
        }}>Editando Perfil</Text>
      </HStack>
      <VStack alignItems={'center'} mt={8}>
        <Box p={2} rounded='full' bg="gray.400" my={4}>
          <AntDesign name="user" size={80} color="white" />
        </Box>
      </VStack>
      <Text color="white" fontSize="xl" fontFamily="semiBold" mt={6} mb={4}>Suas informações</Text>
      <VStack position="relative">
        <Text color="gray.100" fontSize="xs" fontFamily="body" position={'absolute'} top={5} left={3}>Nome completo</Text>

        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, value } }) => (
            <Input
              h='auto'
              pt={4}
              autoCapitalize="words"
              placeholderTextColor="gray.300"
              color='white'
              onChangeText={onChange}
              errorMessage={errors.name?.message}
              value={value}
            />
          )}
        />

      </VStack>

      <VStack position="relative">
        <Text color="gray.100" fontSize="xs" fontFamily="body" position={'absolute'} top={5} left={3}>Nome de usuário</Text>

        <Controller
          control={control}
          name="nickname"
          render={({ field: { onChange, value } }) => (
            <Input
              pt={4}
              h="auto"
              placeholder="Nome de usuário"
              autoCapitalize="words"
              placeholderTextColor="gray.300"
              color='white'
              onChangeText={onChange}
              value={value}
              errorMessage={errors.nickname?.message}
            />
          )}
        />
      </VStack>
      <VStack position={'relative'}>
        <Text color="gray.100" fontSize="xs" fontFamily="body" position={'absolute'} top={5} left={3} >E-mail</Text>

        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="E-mail"
              pt={4}
              h="auto"
              autoCapitalize="none"
              autoCorrect={false}
              placeholderTextColor="gray.200"
              keyboardType="email-address"
              autoComplete='email'
              color="gray.200"
              onChangeText={onChange}
              value={value}
              errorMessage={errors.email?.message}
            />
          )}
        />
      </VStack>

      <Button
        isLoading={isUpdating}
        title="Salvar"
        w="70%"
        mt={8}
        alignSelf="center"
        onPress={handleSubmit(handleUpdateUser)}
      />

    </ScreenContainer>
  )
}