import { View, VStack, Text, HStack, Pressable } from 'native-base'
import { ImageBackground } from 'react-native'
import PlayButtonSvg from '@assets/meditations/btnPlay.svg'
import MedidationCardBg from '@assets/meditations/meditation-card-bg.jpg'
import { useNavigation } from '@react-navigation/native'
import { AppNavigatorRoutesProps } from '@routes/app.routes'
type Props = {
  title: string
  durationMinutes: number
  artist: string
}

export function MeditationCard({ durationMinutes, artist, title }: Props) {
  const {navigate}  = useNavigation<AppNavigatorRoutesProps>()

  function handleNavigate() {
    navigate('meditationPlayer', {
      title,
      artist
    })
  }
  return (
    <Pressable mb={6} overflow="hidden" rounded="3xl" shadow={9} style={{elevation: 10}} onPress={handleNavigate}>

      <ImageBackground source={MedidationCardBg} resizeMode='cover' style={{
        flex: 1,
      }}>
        <View bg="rgba(0,0,0,0.5)" rounded="3xl" mb={6} justifyContent="center" w="full" h="full" py={4} px={8}>
          <HStack alignItems="center" justifyContent="space-between">

            <VStack>
              <Text fontFamily="semiBold" color="white" fontSize="lg">
                {title}
              </Text>
              <HStack>
                <Text fontFamily="body" color="white" fontSize="xs">
                  {artist} - {durationMinutes} min
                </Text>
              </HStack>
            </VStack>
            <PlayButtonSvg width={40} height={40} />
          </HStack>
        </View>
      </ImageBackground>
    </Pressable>
  )
}