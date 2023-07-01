import { BinauralSoundCard } from "@components/BinauralSoundCard";
import { PlaylistHeader } from "@components/PlaylistHeader";
import { ScrollView, Text, VStack, useColorMode } from "native-base";



export function Playlist() {

  return (
    <VStack
      flex={1}
      py={90}
      px={5}
      bg={{
        linearGradient: {
          colors: ["gray.800", "purple.800"],
          start: [0, 0.4],
          end: [0, 1],
        },
      }}
    >
      <PlaylistHeader/>
      <ScrollView>
        <BinauralSoundCard title="Relaxamento Profundo" author="Mônica Cruz"/>
        <BinauralSoundCard title="Calmaria" author="Eduardo Santos"/>
        <BinauralSoundCard title="Ansiedade" author="Paola Motta"/>
      </ScrollView>
    </VStack>
  )
}