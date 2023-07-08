import { HStack, Image, Pressable, Text, VStack } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import GoBackSvg from "@assets/goback.svg";
import DotMenuSvg from '@assets/binauralsounds/dotmenu-icon.svg'
import PlaylistBanner from "@assets/binauralsounds/beat-bg-template.png"

export function PlaylistHeader() {
  const { navigate } = useNavigation<AppNavigatorRoutesProps>()

  function handleNavigate() {
    navigate('binaural')
  }

  return (
    <VStack>

      <HStack alignItems="center" justifyContent="space-between" >
        <Pressable onPress={handleNavigate}>
          <GoBackSvg fill="#fff" />
        </Pressable>
        <Text color="white" fontSize="2xl" fontFamily="heading" style={{
          elevation: 10
        }}>Relaxamento</Text>
        <DotMenuSvg width={25} height={25} fill="#fff"/>
      </HStack>
      <Image source={PlaylistBanner} alt="Playlist Banner" mt={10} rounded="2xl" />

    </VStack>


  )
}