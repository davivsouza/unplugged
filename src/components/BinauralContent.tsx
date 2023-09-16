import {
  HStack,
  Pressable,
  Text,
  VStack,
  Box,
  Image,
  useTheme,
  ScrollView,
  FlatList,
  Center,
} from "native-base";
import { View } from "react-native";

import { PlaylistCard } from "@components/PlaylistCard";
import { AppNavigatorRoutesProps } from '@routes/app.routes'
import { useCallback, useEffect, useState } from 'react'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { BinauralCategoryDTO } from "../dtos/BinauralCategoryDTO";
import { api } from "../services/api";
import { BinauralFavoriteSounds } from "./BinauralFavoriteSounds";


export function BinauralContent() {

  const [showRealApp, setShowRealApp] = useState(false)
  const [binaurals, setBinaurals] = useState<BinauralCategoryDTO[]>()
  const { navigate } = useNavigation<AppNavigatorRoutesProps>()


  async function fetchBinauralSounds() {
    const { data } = await api.get('/binaurals/listCategory')
    setBinaurals(data)

  }

  useFocusEffect(useCallback(() => {
    navigate('binauralSoundsIntroSlider')
    setShowRealApp(true)
    if (showRealApp) {
      navigate('binaural')
    }
  }, [showRealApp]))

  useEffect(() => {
    fetchBinauralSounds();
  }, [])



  return (
    <VStack>
      <HStack justifyContent="center" alignItems="center">

        <Text color="white" fontFamily="semiBold" fontSize="3xl">
          Binaural Beats
        </Text>
      </HStack>
      <Text color="white" fontFamily="semiBold" fontSize="xl" mt={8} mb={4}>
        Seus beats favoritos
      </Text>
      <BinauralFavoriteSounds />
      <Text color="white" fontFamily="semiBold" fontSize="lg" mt={12}>Playlists</Text>
      <FlatList
        data={binaurals}
        mt={12}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <PlaylistCard sounds={item.binaural} title={item.name} beatsQuantity={item.binaural.length} />
        )
        }
        ListEmptyComponent={() => (
          <Center>
            <Text color="white" fontSize="lg">Nenhum som binaural postado {':('}</Text>
          </Center>
        )}
      />
      {/* <ScrollView h={210} showsVerticalScrollIndicator={false}>
        <PlaylistCard title="Relaxamento" beatsQuantity={10} />
        <PlaylistCard title="Foco" beatsQuantity={7} />
        <PlaylistCard title="Criatividade" beatsQuantity={3} />

      </ScrollView> */}
    </VStack>
  )
}