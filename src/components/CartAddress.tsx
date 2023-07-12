import { HStack, Pressable, Text, VStack } from "native-base";

export function CartAddress() {
  return (
    <VStack>
      <Text color="white" fontSize="2xl" fontFamily="semiBold">
        Endereço
      </Text>
      <HStack mt={4} alignItems="center" justifyContent="center" w="full" rounded="xl" bg="gray.500" px={4} py={3}>
        <VStack flex={1}>
          <Text color="white" fontFamily="semiBold">Casa</Text>
          <Text color="gray.200" fontFamily="body">
            Rua dos Santos, 214, Portão verde, Campinas, São Paulo, 09311-080
          </Text>
        </VStack>
        <Pressable>
          <Text color="purple.500" fontFamily="semiBold" fontSize="md">Alterar</Text>
        </Pressable>
      </HStack>
    </VStack>
  )
}