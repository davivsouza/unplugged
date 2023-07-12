import { Box, HStack, IPressableProps, Pressable, Text } from "native-base"
import CreditCardSvg from '@assets/shop/credit-icon.svg'
import BoletoSvg from '@assets/shop/boleto-icon.svg'
import PixSvg from '@assets/shop/pix-icon.svg'
type Props = IPressableProps & {
  method: 'credit' | 'boleto' | 'pix'
  selectedMethod: 'credit' | 'boleto' | 'pix'
}
export function CardPaymentMethods({ method, selectedMethod, ...rest }: Props) {

  return (
    <Pressable
      {...rest}
      alignItems="center" justifyContent="space-between"
      flexDirection="row"
    >

      <HStack flex={1} alignItems="center" space={5}>
        <Box
          w={20}
          py={2}
          justifyContent="center"
          alignItems="center"
          rounded="lg"
          borderWidth={2}
          borderColor={selectedMethod === method ? "purple.500" : 'white'}
          bg={selectedMethod === method ? "purple.700" : 'transparent'}
        >
          {method === 'credit' && <CreditCardSvg width={40} height={40} />}
          {method === 'boleto' && <BoletoSvg width={40} height={40} />}
          {method === 'pix' && <PixSvg width={40} height={40} />}
        </Box>
        <Text fontSize="lg" color="white">

          {method === 'credit' && "Cartão de crédito"}
          {method === 'boleto' && "Boleto"}
          {method === 'pix' && "Pix"}
        </Text>
      </HStack>
      <Box
        borderWidth={2}
        borderColor={selectedMethod === method ? "purple.500" : 'white'}
        rounded="full"
        justifyContent="center"
        alignItems="center"
        style={{
          padding: 2
        }}
      >
        <Box
          w={3}
          h={3}
          p={2}
          rounded="full"

          bg={selectedMethod === method ? "purple.500" : 'transparent'} />
      </Box>
    </Pressable>
  )
}