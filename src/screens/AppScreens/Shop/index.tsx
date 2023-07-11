import { Input } from "@components/Input";
import { ScreenContainer } from "@components/ScreenContainer";
import { Box, HStack, Text } from "native-base";
import { Entypo, Feather } from '@expo/vector-icons';
export function Shop() {
  return (
    <ScreenContainer>
      <Text color="white" fontFamily="semiBold" fontSize="3xl" textAlign="center" mb={12}>
        Descubra seus produtos aqui
      </Text>
      <HStack alignItems="center" space={4}>
        <HStack alignItems="center" flex={1} borderWidth={2} borderColor="white" h={60} p={2} rounded="xl">
          <Feather name="search" size={24} color="white" />
          <Input
            placeholder="Busque seu produto"
            placeholderTextColor="white"
            borderWidth="0"
            borderBottomWidth={0}
            color="white"
            _focus={{
              bg: "transparent",
              borderColor: 'white',
              _android: {
                selectionColor: 'purple.500'
              }
            }}
          />
        </HStack>
        <Box position="relative" borderWidth={2} borderColor="white" w={60} h={60} p={3} rounded="xl" alignItems="center" justifyContent="center">
          <Entypo name="sound-mix" size={24} color="white" style={{
            position: 'absolute',
            transform: [{rotate: '270deg'}]
          }} />
        </Box>
      </HStack>
    </ScreenContainer>
  )
}