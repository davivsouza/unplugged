import { BinauralSoundCard } from "@components/BinauralSoundCard";
import { PlaylistHeader } from "@components/PlaylistHeader";
import { ScreenContainer } from "@components/ScreenContainer";
import { ScrollView } from "native-base";



export function Playlist() {

  return (
    <ScreenContainer>
      <PlaylistHeader />
      <ScrollView>
        <BinauralSoundCard title="Relaxamento Profundo" artist="Rebeca Cagno" />
        <BinauralSoundCard title="Calmaria" artist="Victor Rocha" />
        <BinauralSoundCard title="Ansiedade" artist="Mariana Torres" />
      </ScrollView>
    </ScreenContainer>
  )
}