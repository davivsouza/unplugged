import { VStack, Text, Pressable, HStack, useTheme, Box } from "native-base";
import { ImageBackground } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import CreditCardAddBg from '@assets/shop/creditcard-add.png'

export function CreditCardAdd() {
  return (
    <VStack>
      <Box w={'full'} h={180} bg="gray.500" position={"absolute"} top={-10} rounded="xl" />
      <Pressable w={'full'} h={190} bg="yellow.500" overflow="hidden" rounded="xl" shadow={8} style={{
        transform: [{ rotate: "-4deg" }]
      }}>
        <ImageBackground
          source={CreditCardAddBg}
          resizeMode='contain'

          style={{
            width: 400,
            height: 300,
            position: 'absolute',
            right: -80,
            bottom: -100
          }}
        >

        </ImageBackground>
        <HStack flex={1} alignItems="center" space={2} >
          <Pressable
            w={16}
            h={16}
            bg="white"
            rounded="xl"
            alignItems="center"
            justifyContent="center"
            ml={10}
          >
            <Entypo name="plus" size={40} color="black" />
          </Pressable>
          <Text color="white" fontSize="xl" fontFamily="heading">Adicionar cartão</Text>
        </HStack>
      </Pressable>
    </VStack>
  )
}