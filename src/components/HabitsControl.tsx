import { useTimerControl } from "@hooks/useTimerControl";
import { HabitsFloatButton } from "./HabitsFloatButton";
import { Center, FlatList, HStack, Text, VStack } from "native-base";
import { formatTimeHours } from "@utils/formatTime";
import { useState } from "react";
import { HabitsControlSetTimerModal } from "./HabitsControlSetTimerModal";
export function HabitsControl() {
  const { timers } = useTimerControl()
  const [showModal, setShowModal] = useState(false);

  function handleOpenModal() {
    setShowModal(true);
  }

  return (
    <VStack position="relative">
      <FlatList
        px={2}
        data={timers}
        h="85%"
        keyExtractor={item => item.appName}
        renderItem={({ item: timer }) => (
          <HStack alignItems="center" justifyContent="space-between" flex={1}>
            <HStack alignItems="center" space={4}>
              <timer.iconURL width={50} height={50} />
              <Text color="white" fontSize="xl" fontFamily="semiBold">
                {timer.appName}
              </Text>
            </HStack>

            <Text color="white" fontSize="xl" fontFamily="semiBold">
              {formatTimeHours(timer.limitTime)}
            </Text>
          </HStack>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Center>
            <Text color="gray.300" fontSize="xl" fontFamily="heading">
              Nenhum timer configurado ainda.
            </Text>
          </Center>
        )}
      />
      <HabitsControlSetTimerModal isModalOpen={showModal} onOpenModal={setShowModal} />
      <HabitsFloatButton onPress={handleOpenModal} />
    </VStack>
  )
}