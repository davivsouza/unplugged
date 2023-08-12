import { ScreenContainer } from "@components/ScreenContainer";
import { Box, HStack, Image, Pressable, Text, useTheme } from "native-base";
import GoBackSvg from "@assets/goback.svg";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { Feather } from '@expo/vector-icons';
import ShopProductMock from '@assets/shop/shopmock.png'
export function Product() {
  const { navigate } = useNavigation<AppNavigatorRoutesProps>()
  const { colors } = useTheme()
  function handleNavigate() {
    navigate('shop')
  }
  return (
    <ScreenContainer>
      <HStack alignItems="center" justifyContent="flex-start" mb={12} >
        <Pressable
          py={3}
          pr={8}
          onPress={handleNavigate}
          position='absolute'
          alignItems="center"
          justifyContent="center"
          left={0}>
          <GoBackSvg fill="#fff" />
        </Pressable>
      </HStack>

      <HStack alignItems="flex-start" px={10}>
        <Image
          flex={1}
          h={290}
          source={ShopProductMock}
          alt="Produto da loja do aplicativo"
          alignSelf="center"
        />
        <Pressable bg="gray.500" rounded="full" p={2} alignItems="center" justifyContent="center">
          <Feather name="heart" size={24} color={colors.red[300]} />
        </Pressable>
      </HStack>
      <Text color="purple.500" fontFamily="semiBold" fontSize="md">Produtos/Suplementos</Text>
      <Text color="white" fontFamily="semiBold" fontSize="2xl">Hello Brain 30 dias</Text>
      <HStack alignItems="center" >
        <Feather name="star" size={16} color={colors.yellow[300]} />
        <Box w={1} h={1} bg="white" rounded="full" mx={1} />
        <Text color="purple.500" fontFamily="body" fontSize="sm">196 avaliações</Text>
      </HStack>
    </ScreenContainer>
  )
}