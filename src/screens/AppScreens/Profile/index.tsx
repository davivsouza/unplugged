import { ScreenContainer } from "@components/ScreenContainer";
import { Box, Divider, HStack, Pressable, Text, VStack, useTheme } from "native-base";
import { useAuth } from "@hooks/useAuth";
import { AntDesign, Feather } from '@expo/vector-icons'
import { ProfileOption } from "@components/ProfileOption";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
export function Profile() {
  const { user, signOut } = useAuth()
  const { colors } = useTheme()
  const { navigate } = useNavigation<AppNavigatorRoutesProps>()
  return (
    <ScreenContainer>
      <Text textAlign="center" color="white" fontSize="2xl" fontFamily="heading" style={{
        elevation: 10
      }}>Meu Perfil</Text>
      <VStack alignItems={'center'} mt={8}>
        <Box p={2} rounded='full' bg="gray.400" my={8}>
          <AntDesign name="user" size={80} color="white" />
        </Box>
        <Text textAlign='center' fontFamily='body' fontSize={'xl'} color="white">{user.name}</Text>
        <Text textAlign='center' fontFamily='body' fontSize={'sm'} color="gray.400">@{user.nickname}</Text>
      </VStack>
      <Button title="Editar perfil" w="50%" alignSelf="center" my={6} onPress={() => navigate('updateProfile')} />
      <VStack my={8} px={2} py={4}>
        <ProfileOption icon="hearto" label="Favoritos" screen="favoriteSounds" />
        <ProfileOption icon="download" label="Baixados" />
        <Divider my={8} />
        <Pressable onPress={signOut}>
          <HStack alignItems={'center'} space={2}>
            <Feather name="log-out" size={25} color={colors.red[500]} />
            <Text fontFamily='body' fontSize={'lg'} color="red.500">Sair</Text>

          </HStack>
        </Pressable>
      </VStack>
    </ScreenContainer>
  )
}