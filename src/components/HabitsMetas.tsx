import { Text, VStack } from "native-base";
import { HabitsFloatButton } from "./HabitsFloatButton";
import { useState } from "react";
import { HabitsMetasFormModal } from "./HabitsMetasFormModal";

export function HabitsMetas() {

  const [showModal, setShowModal] = useState(false);

  function handleOpenModal() {
    setShowModal(true);
  }
  return (
    <VStack position="relative">
      <HabitsMetasFormModal isModalOpen={showModal} onOpenModal={setShowModal} />
      <Text color="white" fontFamily="body" fontSize="xl">
        Metas
      </Text>
      <HabitsFloatButton onPress={handleOpenModal}/>
    </VStack>
  )
}