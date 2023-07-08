import { BinauralSoundCard } from "@components/BinauralSoundCard";
import { PlaylistHeader } from "@components/PlaylistHeader";
import { ScreenContainer } from "@components/ScreenContainer";
import { ScrollView } from "native-base";



export function Playlist() {

  return (
    <ScreenContainer>
      <PlaylistHeader />
      <ScrollView>
        <BinauralSoundCard title="Relaxamento Profundo" author="Mônica Cruz" />
        <BinauralSoundCard title="Calmaria" author="Eduardo Santos" />
        <BinauralSoundCard title="Ansiedade" author="Paola Motta" />
      </ScrollView>
    </ScreenContainer>
  )
}