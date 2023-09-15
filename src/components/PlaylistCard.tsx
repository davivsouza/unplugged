import { HStack, Image, Pressable, Text, VStack } from "native-base";
import BinauralThumb from '@assets/binauralsounds/beat-bg-template.png'
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { BinauralDTO } from "../dtos/BinauralCategoryDTO";
type Props = {
  title: string
  beatsQuantity: number
  sounds: BinauralDTO[]
}

export function PlaylistCard({ beatsQuantity, title, sounds }: Props) {
  const { navigate } = useNavigation<AppNavigatorRoutesProps>()

  function handleNavigate() {
    navigate('playlist', sounds)
  }
  return (
    <Pressable onPress={handleNavigate}>
      <HStack flex={1} mt={6} alignItems="center" justifyContent="space-between">
        <HStack>

          <Image source={BinauralThumb} alt="Thumbnail do som binaural" w={120} h={20} rounded="3xl" mr={4} />
          <VStack alignItems="flex-start">
            <Text color="white" fontFamily="body" fontSize="lg">{title}</Text>
            <Text color="white" fontFamily="body" fontSize="xs">{beatsQuantity} beats</Text>
          </VStack>
        </HStack>
      </HStack>
    </Pressable>

  )
}