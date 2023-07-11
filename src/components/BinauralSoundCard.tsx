import { HStack, Image, Pressable, Text, VStack, useTheme } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { Feather } from "@expo/vector-icons";
import BinauralThumb from '@assets/binauralsounds/beat-bg-template.png'
import DotMenuSvg from '@assets/binauralsounds/dotmenu-icon.svg'
type Props = {
  title: string
  artist: string
}

export function BinauralSoundCard({ artist,title }: Props) {
  const { navigate } = useNavigation<AppNavigatorRoutesProps>()
  const { colors } = useTheme()
  function handleNavigate() {
    navigate('binauralSound', {title, artist})
  }
  return (
    <Pressable onPress={handleNavigate} mb={3}>
      <HStack flex={1} mt={6} alignItems="flex-start" justifyContent="space-between">
        <HStack>

          <Image source={BinauralThumb} alt="Thumbnail do som binaural" w={60} h={60} rounded="xl" mr={4} />
          <VStack alignItems="flex-start">
            <Text color="white" fontFamily="body" fontSize="md">{title}</Text>
            <Text color="gray.300" fontFamily="body" fontSize="xs">{artist}</Text>
          </VStack>
        </HStack>
        <HStack alignItems="center">
          <Feather name={'heart'} size={20} color={colors.gray[300]} />
          <DotMenuSvg width={15} height={15} fill={colors.gray[300]} style={{marginLeft: 8}}/>
        </HStack>

      </HStack>
    </Pressable>

  )
}