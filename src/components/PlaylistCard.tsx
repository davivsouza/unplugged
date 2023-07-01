import { HStack, Image, Pressable, Text, VStack } from "native-base";
import BinauralThumb from '@assets/binauralsounds/beat-bg-template.png'
import DotMenuSvg from '@assets/binauralsounds/dotmenu-icon.svg'
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
type Props = {
  title: string
  beatsQuantity: number
}

export function PlaylistCard({ beatsQuantity, title }: Props) {
  const {navigate} = useNavigation<AppNavigatorRoutesProps>()
  
  function handleNavigate(){
    navigate('playlist')
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
        <DotMenuSvg width={25} height={25} fill="#fff"/>
      </HStack>
    </Pressable>

  )
}