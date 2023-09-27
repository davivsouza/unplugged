import { HabitsContent } from "@components/HabitsContent";
import { HabitsNavigation } from "@components/HabitsNavigation";
import { ScreenContainer } from "@components/ScreenContainer";
import { HStack, Image, Pressable, Text, VStack } from "native-base";
import { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

export type HabitsItems = "insights" | "metas" | "controle"
export function Habits() {
  const { navigate } = useNavigation<AppNavigatorRoutesProps>()
  const [selectedItem, setSelectedItem] = useState<HabitsItems>("insights");

  function handleSelectedItem(item: HabitsItems) {
    setSelectedItem(item)
  }

  return (
    <ScreenContainer>
      <HStack alignItems="center" justifyContent="center" position="relative" mb={12}>
        <Text color="white" fontFamily="semiBold" fontSize="3xl" textAlign="center">
          Hábitos
        </Text>

      </HStack>
      <HabitsNavigation selectedItem={selectedItem} onSelectItem={handleSelectedItem} />
      <HabitsContent item={selectedItem} />

    </ScreenContainer>
  )
}