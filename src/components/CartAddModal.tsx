import { Modal, Text, VStack } from "native-base";



type Props = {
  isModalOpen: boolean
}
export function CartAddModal({ isModalOpen }: Props) {

  return (
    <Modal
      isOpen={isModalOpen}
      justifyContent="center"
      alignItems="center"
    >
      <VStack
        borderTopRadius="3xl"
        bg="purple.700"
        py={8}
        px={12}
        width="full"
        position="absolute"
        bottom={0}
        justifyContent="center"
        alignItems="center"

      >
        <Text fontSize="2xl" fontFamily="semiBold" color="white" textAlign="center">
          O seu produto foi adicionado a cesta
        </Text>
      </VStack>
    </Modal>
  )
}