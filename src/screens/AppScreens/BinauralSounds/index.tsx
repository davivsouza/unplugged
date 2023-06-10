import { useState } from "react";
import { Heading, Text, VStack } from "native-base";
import { BinauralForm } from "./BinauralForm";


export function BinauralSounds() {
  const [soundsCategories, setSoundsCategories] = useState<String[]>([])

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
      {
        soundsCategories.length > 0 ? (
          <Heading color="white">Sons Binaurais</Heading>
        ) : (
          <BinauralForm/>
        )
      }
      
    </VStack>
  );
}
