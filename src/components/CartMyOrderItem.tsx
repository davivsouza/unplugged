import { Box, HStack, Image, Text, VStack } from 'native-base'
import ShopProductMock from '@assets/shop/shopmock.png'
export function CartMyOrderItem() {
  return (
    <HStack bg='gray.500' flex={1} p={3} rounded="2xl" space={4} mb={4} shadow={6} position="relative" alignItems="center">
      <Box bg="white" rounded="2xl">
        <Image
          w={20}
          h={20}
          source={ShopProductMock}
          alt="Produto da loja do aplicativo"
          alignSelf="center"
        />
      </Box>
      <VStack flex={1} space={2}>
        <Text color="white" fontSize="md" fontFamily="semiBold">
          Hello Brain 30 dias
        </Text>
        <HStack alignItems="center" justifyContent="space-between">
          <Text color="white" fontSize="md" fontFamily="body" >
            R$ 25,90
          </Text>
          <Text color="white">x1</Text>
        </HStack>
      </VStack>
      <Text
        fontFamily="semiBold"
        fontSize="md"
        color="purple.500"
        position='absolute'
        top={3}
        right={5}
      >
        Em rota
      </Text>
    </HStack>
  )
}