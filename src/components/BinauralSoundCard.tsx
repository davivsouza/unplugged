import { HStack, Image, PresenceTransition, Pressable, Text, VStack, useTheme } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { AntDesign } from '@expo/vector-icons';
import { api } from "../services/api";
import { BinauralDTO } from "../dtos/BinauralCategoryDTO";
import { useAuth } from "@hooks/useAuth";
import { imagesUrl } from "@utils/baseUrls";
type Props = {
  playlistId?: number
  binaural: BinauralDTO
}

export function BinauralSoundCard({ binaural, playlistId }: Props) {
  const { navigate } = useNavigation<AppNavigatorRoutesProps>()

  const { user, favoritesBinauralSounds, getFavoriteBinauralSounds } = useAuth()
  const { colors } = useTheme()
  function handleNavigate() {
    navigate('binauralSound', { binaural, playlistId })
  }

  async function favoritedSound(id: number) {
    if (isFavorited(id)) {
      await api.delete(`binaurals/unfavorite/${user.id}/${binaural.id}`)
      getFavoriteBinauralSounds()
    } else {
      await api.post('binaurals/favorite', {
        userId: user.id,
        binauralId: binaural.id
      })
      getFavoriteBinauralSounds()
    }
  }
  function isFavorited(id: number) {
    return favoritesBinauralSounds.some(sound => sound.binauralId === id)
  }
  return (
    <Pressable onPress={handleNavigate} mb={3}>
      <HStack flex={1} mt={3} alignItems="flex-start" justifyContent="space-between">
        <HStack>

          <Image source={{ uri: `${imagesUrl}/${binaural.binaural_img}` }} alt="Thumbnail do som binaural" w={60} h={60} rounded="lg" mr={4} />
          <VStack alignItems="flex-start">
            <Text color="white" fontFamily="body" fontSize="md">{binaural.binaural_name}</Text>
            <Text color="gray.300" fontFamily="body" fontSize="xs">{binaural.binaral_autor}</Text>
          </VStack>
        </HStack>
        <Pressable alignItems="center" onPress={() => favoritedSound(binaural.id)} p={2}>
          {
            isFavorited(binaural.id)
              ? (
                <PresenceTransition
                  visible={isFavorited(binaural.id)}
                  initial={{
                    opacity: 0.5,
                    scale: 0
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    transition: {
                      duration: 220
                    }
                  }}
                >
                  <AntDesign name={'heart'} size={25} color={colors.red[500]} />
                </PresenceTransition>)
              : <AntDesign name={'hearto'} size={25} color={colors.gray[300]} />
          }

        </Pressable>

      </HStack>
    </Pressable>

  )
}