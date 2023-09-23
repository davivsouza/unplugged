import { HStack, Image, Pressable, Text, VStack } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
type Props = {
  playlistId: number
  title: string
  beatsQuantity: number
  imgUrl: string
}

export function PlaylistCard({ beatsQuantity, title, playlistId, imgUrl }: Props) {
  const { navigate } = useNavigation<AppNavigatorRoutesProps>()

  function handleNavigate() {
    navigate('playlist', { playlistId })
  }
  return (
    <Pressable onPress={handleNavigate}>
      <HStack flex={1} mt={6} alignItems="center" justifyContent="space-between">
        <HStack>

          <Image source={{ uri: imgUrl }} alt="Thumbnail do som binaural" w={120} h={20} rounded="3xl" mr={4} />
          <VStack alignItems="flex-start">
            <Text color="white" fontFamily="body" fontSize="lg">{title}</Text>
            <Text color="white" fontFamily="body" fontSize="xs">{beatsQuantity} beats</Text>
          </VStack>
        </HStack>
      </HStack>
    </Pressable>

  )
}