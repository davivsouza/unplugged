import { BinauralSoundCard } from "@components/BinauralSoundCard";
import { PlaylistHeader } from "@components/PlaylistHeader";
import { ScreenContainer } from "@components/ScreenContainer";
import { Center, FlatList, ScrollView, Text } from "native-base";
import { BinauralCategoryDTO, BinauralDTO } from "../../../dtos/BinauralCategoryDTO";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";
type RouteParams = {
  playlistId: number
};


export function Playlist() {
  const route = useRoute();
  const [playlist, setPlaylist] = useState<BinauralCategoryDTO>({} as BinauralCategoryDTO)
  const { playlistId } = route.params as RouteParams;

  async function getPlaylistById() {
    const { data } = await api.get<BinauralCategoryDTO>(`/binaurals/listCategory/${playlistId}`)
    setPlaylist(data)

  }
  useEffect(() => {

    getPlaylistById()
  }, [playlistId])



  return (
    <ScreenContainer>
      <PlaylistHeader banner={playlist.images} />
      <FlatList
        data={playlist.binaural}
        mt={12}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <BinauralSoundCard
            binaural={item}
            playlistId={playlist.id}
          />
        )
        }
        ListEmptyComponent={() => (
          <Center>
            <Text color="white" fontSize="lg">Nenhum som binaural postado {':('}</Text>
          </Center>
        )}
      />

    </ScreenContainer>
  )
}