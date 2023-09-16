import { useAuth } from "@hooks/useAuth";
import { FlatList, HStack, Pressable, Text, VStack } from "native-base";
import { BinauralSoundCard } from "./BinauralSoundCard";
import { ScreenContainer } from "./ScreenContainer";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import GoBackSvg from "@assets/goback.svg";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

export function FavoritesPlaylist() {
  const { favoritesBinauralSounds, getFavoriteBinauralSounds } = useAuth();
  useEffect(() => {
    getFavoriteBinauralSounds()
  }, [])
  const { navigate } = useNavigation<AppNavigatorRoutesProps>()
  return (
    <ScreenContainer>
      <VStack mb={12}>
        <HStack alignItems="center" justifyContent="center" >
          <Pressable onPress={() => navigate('binaural')} position={'absolute'} left={-10} p={4}>
            <GoBackSvg fill="#fff" />
          </Pressable>
          <Text color="white" fontSize="2xl" fontFamily="heading" style={{
            elevation: 10
          }}>Favoritos</Text>
        </HStack>

      </VStack>
      <FlatList
        data={favoritesBinauralSounds}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <BinauralSoundCard binaural={item.binaural} />
        )}
      />
    </ScreenContainer>
  )
}