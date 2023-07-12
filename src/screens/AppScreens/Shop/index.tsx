import { Input } from "@components/Input";
import { ScreenContainer } from "@components/ScreenContainer";
import { Box, HStack, Pressable, ScrollView, SimpleGrid, Text } from "native-base";
import { Entypo, Feather } from '@expo/vector-icons';
import { ShopProduct } from "@components/ShopProduct";
import { CartNotification } from "@components/CartNotification";
import CartIcon from  '@assets/shop/cart-icon.svg'
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
export function Shop() {

  const {navigate} = useNavigation<AppNavigatorRoutesProps>()

  function handleNavigate(){
    navigate('cart')
  }
  return (
    <ScreenContainer>
      <HStack alignItems="center" space={4} mb={12} justifyContent="center" position="relative">

        <Text color="white" fontFamily="semiBold" fontSize="3xl" textAlign="center" >
          Descubra seus produtos aqui
        </Text>
        <Pressable position="relative" right="-37%" onPress={handleNavigate}>
          <CartIcon width={40} height={40}/>
          <CartNotification/>
        </Pressable>
      </HStack>
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
            transform: [{ rotate: '270deg' }]
          }} />
        </Box>
      </HStack>
      <ScrollView h={210} showsVerticalScrollIndicator={false} contentContainerStyle={{
        paddingBottom: 50
      }}>
        <SimpleGrid
          columns={2}
          spacingX={6}
          spacingY={5}
        >
          <ShopProduct />
          <ShopProduct />
          <ShopProduct />
        </SimpleGrid>

      </ScrollView>

    </ScreenContainer>
  )
}