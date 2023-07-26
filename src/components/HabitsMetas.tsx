import { Center, FlatList, Text, VStack } from "native-base";
import { useState } from "react";
import { GoalsCard } from "./GoalsCard";
import { HabitsFloatButton } from "./HabitsFloatButton";
import { HabitsMetasFormModal } from "./HabitsMetasFormModal";
import { useGoals } from "@hooks/useGoals";



export function HabitsMetas() {
  const [showModal, setShowModal] = useState(false);
  const { goals } = useGoals()

  function handleOpenModal() {
    setShowModal(true);
  }
  return (
    <VStack position="relative">
      <HabitsMetasFormModal isModalOpen={showModal} onOpenModal={setShowModal} />
      <FlatList
        px={2}
        data={goals}
        h="85%"
        keyExtractor={item => item.id}
        renderItem={({ item: goal }) => (
          <GoalsCard title={goal.title} tagColor={goal.tagColor} />
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Center>
            <Text color="gray.300" fontSize="xl" fontFamily="heading">
              Nenhuma meta criada ainda.
            </Text>
          </Center>
        )}
      />

      <HabitsFloatButton onPress={handleOpenModal} />
    </VStack>
  )
}