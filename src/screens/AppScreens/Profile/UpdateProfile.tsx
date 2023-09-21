import { ScreenContainer } from "@components/ScreenContainer";
import { Box, HStack, Pressable, Text, VStack } from "native-base";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import GoBackSvg from "@assets/goback.svg";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons'
import { Input } from "@components/Input";
import { useAuth } from "@hooks/useAuth";
import { Button } from "@components/Button";

export function UpdateProfile() {
  const { goBack } = useNavigation<AppNavigatorRoutesProps>()
  const { user } = useAuth()
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
        <Input
          h='auto'
          pt={4}
          placeholder="Nome completo"
          autoCapitalize="words"
          placeholderTextColor="gray.300"
          value={user.name}
          color='white'

        // onChangeText={onChange}
        // value={value}
        // errorMessage={errors.name?.message}
        />
      </VStack>

      <VStack position="relative">
        <Text color="gray.100" fontSize="xs" fontFamily="body" position={'absolute'} top={5} left={3}>Nome de usuário</Text>
        <Input
          pt={4}
          h="auto"
          placeholder="Nome de usuário"
          autoCapitalize="words"
          placeholderTextColor="gray.300"
          value={user.nickname}
          color='white'
        // onChangeText={onChange}
        // value={value}
        // errorMessage={errors.name?.message}
        />
      </VStack>
      <VStack position={'relative'}>
        <Text color="gray.100" fontSize="xs" fontFamily="body" position={'absolute'} top={5} left={3} >E-mail</Text>
        <Input
          placeholder="E-mail"
          pt={4}
          h="auto"
          _disabled={{
            borderColor: "gray.300"
          }}
          isDisabled
          isReadOnly
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor="gray.200"
          value={user.email}
          keyboardType="email-address"
          autoComplete='email'
          color="gray.200"
        // onChangeText={onChange}
        // value={value}
        // errorMessage={errors.email?.message}
        />
      </VStack>
      <VStack position={'relative'}>
        <Text color="gray.100" fontSize="10" fontFamily="body" position={'absolute'} top={5} left={3} >Telefone</Text>
        <Input
          value="Nenhum número definido ainda."
          pt={4}
          h="auto"
          placeholderTextColor="gray.200"
          keyboardType="phone-pad"
          autoComplete='tel'
          color="gray.200"
        // onChangeText={onChange}
        // value={value}
        // errorMessage={errors.email?.message}
        />
      </VStack>
      <Button title="Salvar" w="70%" mt={8} alignSelf="center" />

    </ScreenContainer>
  )
}