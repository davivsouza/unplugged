import { View, VStack, Text, HStack, Pressable } from 'native-base'
import { ImageBackground } from 'react-native'
import PlayButtonSvg from '@assets/meditations/btnPlay.svg'
import MedidationCardBg from '@assets/meditations/meditation-card-bg.jpg'
type Props = {
  title: string
  durationMinutes: number
  genre: string
}

export function MeditationCard({ durationMinutes, genre, title }: Props) {
  return (
    <Pressable mb={6} overflow="hidden" rounded="3xl" shadow={9} style={{elevation: 10}}>

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
                  {genre} - {durationMinutes} min
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