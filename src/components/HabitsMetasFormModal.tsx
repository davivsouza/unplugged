import { Box, HStack, Modal, Pressable, Select, Text, TextArea, VStack } from "native-base";
import { useState } from "react";
import { Input } from "./Input";
import { Button } from "./Button";
import GoBackSvg from "@assets/goback.svg";

import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { MaterialIcons } from '@expo/vector-icons';
import { useGoals } from "@hooks/useGoals";

const daysOfWeek = [
  {
    dayNumber: 0,
    day: 'Dom'
  },
  {
    dayNumber: 1,
    day: 'Seg'
  },
  {
    dayNumber: 2,
    day: 'Ter'
  },
  {
    dayNumber: 3,
    day: 'Qua'
  },
  {
    dayNumber: 4,
    day: 'Qui'
  },
  {
    dayNumber: 5,
    day: 'Sex'
  },
  {
    dayNumber: 6,
    day: 'Sáb'
  },

]




type Props = {
  isModalOpen: boolean
  onOpenModal: (status: boolean) => void
}

export function HabitsMetasFormModal({ isModalOpen, onOpenModal }: Props) {
  const { createGoal } = useGoals()
  const [selectedDay, setSelectedDay] = useState<Number[]>()

  function selectDay(day: number) {
    const selectedDays = selectedDay ? [...selectedDay] : [];
    let selectedDayWithRemovedDay = []
    if (selectedDays.includes(day)) {
      selectedDayWithRemovedDay = selectedDays.filter(dayNumber => dayNumber != day)
      setSelectedDay(selectedDayWithRemovedDay)

    } else {
      selectedDays.push(day)
      const sortSelectedDays = selectedDays.sort((a, b) => a - b)
      setSelectedDay(sortSelectedDays)
    }
  }

  return (
    <Modal
      isOpen={isModalOpen}
      justifyContent="center"
      alignItems="center"
      _backdrop={{
        bg: "black"
      }}
      onClose={() => onOpenModal(false)}
    >
      <VStack

        borderTopRadius="3xl"
        bg={{
          linearGradient: {
            colors: ["gray.800", "purple.800"],
            start: [0, 1],
            end: [0, 0],
          },
        }}
        py={8}
        px={6}
        width="full"
        height="93%"
        position="absolute"
        bottom={0}
        justifyContent="flex-start"
        alignItems="center"

      >

        <HStack w="full" alignItems="center" justifyContent="center" mb={12} >
          <Pressable
            py={3}
            pr={8}
            onPress={() => onOpenModal(false)}
            position='absolute'
            alignItems="center"
            justifyContent="center"
            left={0}>
            <GoBackSvg fill="#fff" />
          </Pressable>
          <Text color="white" fontSize="2xl" fontFamily="heading">Novo Hábito</Text>
        </HStack>

        <VStack mt={6} w="full" flex={1} justifyContent="space-between">
          <VStack space={4}>
            <Input
              w="full"
              rounded="2xl"
              bg="transparent"
              borderColor="white"
              placeholder="Nome do hábito"
              placeholderTextColor="white"
            />

            <HStack alignItems={'center'} space={2} justifyContent={'center'}>
              {daysOfWeek.map(item => (
                <Pressable
                  key={item.day}
                  flex={1}
                  h={12}
                  rounded="full"
                  borderColor={selectedDay?.includes(item.dayNumber) ? 'purple.500' : 'white'}
                  borderWidth={2}
                  alignItems={'center'}
                  justifyContent={'center'}
                  onPress={() => selectDay(item.dayNumber)
                  }
                >
                  <Text
                    color={selectedDay?.includes(item.dayNumber) ? 'purple.500' : 'white'}
                    fontSize='sm'
                    textAlign={'center'}
                  >
                    {item.day}
                  </Text>
                </Pressable>
              ))}
            </HStack>
            {/* <Select
              w="full"
              h={12}
              rounded="2xl"
              color="white"
              bg="transparent"
              borderWidth={2}
              borderColor="white"
              placeholder="Diariamente"
              placeholderTextColor="white"
              fontSize="md"
              fontFamily="body"
              my={4}
              accessibilityLabel="Escolha um tipo de repetição"
              _actionSheetContent={{
                bg: "gray.700",
              }}
              _actionSheetBody={{
                bg: 'gray.700',
              }}

              _item={{
                bg: 'gray.700',

                _text: {
                  color: 'white',
                },
                _pressed: {
                  bg: 'gray.500',
                  _text: {
                    color: 'red.500'
                  }
                },
              }}
              dropdownIcon={
                <MaterialIcons
                  name="arrow-drop-down"
                  size={24} color="white"
                  style={{ marginRight: 12 }}
                />
              }
              dropdownOpenIcon={
                <MaterialIcons
                  name="arrow-drop-up"
                  size={24} color="white"
                  style={{ marginRight: 12 }}
                />
              }

            >
              <Select.Item label="Diariamente" value="daily" />
              <Select.Item label="Semanalmente" value="weekly" />
              <Select.Item label="Mensal" value="monthly" />
              <Select.Item label="Não se repete" value="notRepeat" />
            </Select> */}




            <TextArea
              w="full"
              h={40}
              rounded="2xl"
              color="white"
              bg="transparent"
              borderWidth={2}
              borderColor="white"
              placeholder="Adicionar uma descrição"
              placeholderTextColor="white"
              fontSize="md"
              fontFamily="body"
              my={4}
              p={4}
              autoCompleteType="off"
              _focus={{
                bg: "transparent",
                borderColor: 'purple.500',
                _android: {
                  selectionColor: 'purple.500'
                }
              }}
            />

            <Text color={'white'} fontSize={'lg'}>Escolha a cor do hábito:</Text>
            <HStack alignItems={'center'} justifyContent={'space-around'} mt={4}>
              <Pressable w={12} h={12} bg="purple.500" rounded='full' />
              <Pressable w={12} h={12} bg="red.500" rounded='full' />
              <Pressable w={12} h={12} bg="green.500" rounded='full' />
            </HStack>

          </VStack>



          <Button title="Adicionar" mt={8} onPress={() => {
            createGoal({
              id: String(Math.random() * 3791),
              tagColor: 'purple.500',
              title: 'Teste'
            })
            onOpenModal(false)
          }} />
        </VStack>
      </VStack>
    </Modal>
  )
}