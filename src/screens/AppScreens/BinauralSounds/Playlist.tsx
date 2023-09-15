import { BinauralSoundCard } from "@components/BinauralSoundCard";
import { PlaylistHeader } from "@components/PlaylistHeader";
import { ScreenContainer } from "@components/ScreenContainer";
import { Center, FlatList, ScrollView, Text } from "native-base";
import { BinauralDTO } from "../../../dtos/BinauralCategoryDTO";
import { useRoute } from "@react-navigation/native";
type RouteParams = BinauralDTO[];


export function Playlist() {
  const route = useRoute();
  const binaural = route.params as RouteParams;



  return (
    <ScreenContainer>
      <PlaylistHeader />
      <FlatList
        data={binaural}
        mt={12}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <BinauralSoundCard title={item.binaural_name} />
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