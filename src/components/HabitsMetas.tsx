import { Center, FlatList, Text, VStack } from "native-base";
import { useState } from "react";
import { HabitsCard } from "./HabitsCard";
import { HabitsFloatButton } from "./HabitsFloatButton";
import { HabitsMetasFormModal } from "./HabitsMetasFormModal";
import { useGoals } from "@hooks/useGoals";
import dayjs from 'dayjs'
import "dayjs/locale/pt-br"

const day = dayjs().locale('pt-br').format('DD').toString()
const month = dayjs().locale('pt-br').format('MM').toString()
const year = dayjs().locale('pt-br').format('YYYY').toString()
const formatedMonth = month.charAt(0).toUpperCase() + month.slice(1)
const today = `${day}/${formatedMonth}/${year}`

export function HabitsMetas() {
  const [showModal, setShowModal] = useState(false);
  const { goals } = useGoals()

  function handleOpenModal() {
    setShowModal(true);
  }
  return (
    <VStack position="relative">
      <HabitsMetasFormModal isModalOpen={showModal} onOpenModal={setShowModal} />
      <Text color="white" fontFamily="semiBold" fontSize="xl" my={6}>Hábitos de hoje - {today}</Text>
      <FlatList
        px={2}
        data={goals}
        h="80%"
        keyExtractor={item => String(item.id)}
        renderItem={({ item: habit }) => (
          <HabitsCard habit={habit} />
        )}
        contentContainerStyle={{ paddingBottom: 120 }}
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