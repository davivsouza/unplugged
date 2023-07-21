
import { Box, HStack, Modal, Pressable, Select, Text, TextArea, VStack } from "native-base";
import { useState } from "react";

import { Input } from "./Input";
import { Button } from "./Button";
import GoBackSvg from "@assets/goback.svg";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { MaterialIcons } from '@expo/vector-icons';
type Props = {
  isModalOpen: boolean
  onOpenModal: (status: boolean) => void
}
export function HabitsMetasFormModal({ isModalOpen, onOpenModal }: Props) {
  const { navigate } = useNavigation<AppNavigatorRoutesProps>()



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
          <Box>
            <Input
              w="full"
              rounded="2xl"
              bg="transparent"
              borderColor="white"
              placeholder="Nome do hábito"
              placeholderTextColor="white"
            />
            <Select
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

            >
              <Select.Item label="Diariamente" value="daily" />
              <Select.Item label="Semanalmente" value="weekly" />
              <Select.Item label="Hoje" value="today" />
            </Select>
            <Input
              w="full"
              rounded="2xl"
              bg="transparent"
              borderColor="white"
              placeholder="Quantidade"
              placeholderTextColor="white"
              keyboardType="numeric"
            />

            <Input
              w="full"
              rounded="2xl"
              bg="transparent"
              borderColor="white"
              placeholder="Horário"
              placeholderTextColor="white"
            />

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
                bg:"transparent",
                borderColor: 'purple.500',
                _android: {
                  selectionColor: 'purple.500'
                }
              }}
            />
          </Box>



          <Button title="Adicionar" mt={8} />
        </VStack>
      </VStack>
    </Modal>
  )
}