import { useAuth } from "@hooks/useAuth";
import { FlatList, HStack, Pressable, Text, VStack } from "native-base";
import { BinauralSoundCard } from "../../../components/BinauralSoundCard";
import { ScreenContainer } from "../../../components/ScreenContainer";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import GoBackSvg from "@assets/goback.svg";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

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