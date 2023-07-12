import { Box, HStack, Image, Text, VStack, useTheme } from "native-base";
import { AntDesign } from '@expo/vector-icons'
import ShopProductMock from '@assets/shop/shopmock.png'
import { CartQuant } from "@components/CartQuant";
export function CartItem() {
  const { colors } = useTheme();

  return (
    <HStack bg='gray.500' flex={1} p={3} rounded="2xl" space={4} mb={4} shadow={6}>
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
        <HStack flex={1} alignItems="center" justifyContent="space-between">
          <Text color="white" fontSize="md" fontFamily="semiBold">
            Hello Brain 30 dias
          </Text>
          <AntDesign name="close" size={18} color={colors.gray[300]} />
        </HStack>
        <Box bg="green.500" rounded="xl" w={12} justifyContent="center" alignItems="center">
          <Text color="white" textAlign="center" fontSize="xs" fontFamily="body" >
            28%
          </Text>
        </Box>
        <HStack alignItems="center" justifyContent="space-between">
          <Text color="white" fontSize="md" fontFamily="body" >
            R$ 25,90
          </Text>
          <HStack alignItems="center" space={3}>
            <CartQuant type="decrement" />
            <Text color="white">1</Text>
            <CartQuant type="increment" />

          </HStack>
        </HStack>
      </VStack>
    </HStack>
  )
}