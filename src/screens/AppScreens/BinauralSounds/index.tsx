import { useState } from "react";
import {
  Text,
  VStack,
} from "native-base";
import { BinauralForm } from "@components/BinauralForm";

import { BinauralContent } from "@components/BinauralContent";
import { ScreenContainer } from "@components/ScreenContainer";

export function BinauralSounds() {
  const [categories, setCategories] = useState<String[]>([
    "ddsads",
    "dasgdsahd",
    "dhasjhueh",
  ]);

  return (
    <ScreenContainer>
      {categories.length > 0 ? (
        <BinauralContent />
      ) : (
        <BinauralForm setCategories={setCategories} />
      )}
    </ScreenContainer>
  );
}
