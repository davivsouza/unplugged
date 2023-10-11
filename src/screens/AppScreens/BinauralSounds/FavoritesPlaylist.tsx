import { useAuth } from "@hooks/useAuth";
import { Center, FlatList, HStack, Pressable, Text, VStack } from "native-base";
import { BinauralSoundCard } from "../../../components/BinauralSoundCard";
import { ScreenContainer } from "../../../components/ScreenContainer";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import GoBackSvg from "@assets/goback.svg";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import Animated, { FadeInDown, FadeInLeft } from "react-native-reanimated";

export function FavoritesPlaylist() {
  const { favoritesBinauralSounds, getFavoriteBinauralSounds } = useAuth();
  useEffect(() => {
    getFavoriteBinauralSounds()
  }, [])
  const { goBack } = useNavigation<AppNavigatorRoutesProps>()
  return (
    <ScreenContainer>
      <VStack mb={12}>
        <HStack alignItems="center" justifyContent="center" >
          <Pressable onPress={() => goBack()} position={'absolute'} left={-10} p={4}>
            <GoBackSvg fill="#fff" />
          </Pressable>
          <Text color="white" fontSize="2xl" fontFamily="heading" style={{
            elevation: 10
          }}>Sons Favoritos</Text>
        </HStack>

      </VStack>
      <FlatList
        data={favoritesBinauralSounds}
        contentContainerStyle={{
          paddingVertical: 12,
          paddingHorizontal: 8,
        }}
        keyExtractor={item => String(item.id)}
        renderItem={({ item, index }) => (
          <Animated.View entering={FadeInLeft.delay(100 * index).duration(500).springify().damping(12)}>

            <BinauralSoundCard binaural={item.binaural} />
          </Animated.View>
        )}
        ListEmptyComponent={() => (
          <Center>
            <Text color="white" fontSize="lg">Nenhum som favoritado ainda. </Text>
          </Center>
        )}
      />
    </ScreenContainer>
  )
}