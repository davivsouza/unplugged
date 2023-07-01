import { useState } from "react";
import {
  Text,
  VStack,
} from "native-base";
import { BinauralForm } from "./BinauralForm";

import { BinauralContent } from "@components/BinauralContent";

export function BinauralSounds() {
  const [categories, setCategories] = useState<String[]>([
    "ddsads",
    "dasgdsahd",
    "dhasjhueh",
  ]);

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
      {categories.length > 0 ? (
        <BinauralContent />
      ) : (
        <BinauralForm setCategories={setCategories} />
      )}
    </VStack>
  );
}
