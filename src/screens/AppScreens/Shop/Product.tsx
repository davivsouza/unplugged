import { ScreenContainer } from "@components/ScreenContainer";
import { Box, HStack, Image, Pressable, Text, useTheme, ScrollView } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { AntDesign } from "@expo/vector-icons";
import { Button } from "@components/Button";
import { ShopProductDropInfos } from "@components/ShopProductDropInfos";
import ShopProductMock from "@assets/shop/shopmock.png";
import GoBackSvg from "@assets/goback.svg";

export function Product() {
  const { navigate } = useNavigation<AppNavigatorRoutesProps>();
  const { colors } = useTheme();
  function handleNavigate() {
    navigate("shop");
  }
  return (
    <ScreenContainer>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 40,
        }}
      >
        <HStack alignItems="flex-start" mb={12}>
          <Pressable
            py={3}
            pr={8}
            onPress={handleNavigate}
            alignItems="center"
            justifyContent="center"
          >
            <GoBackSvg fill="#fff" />
          </Pressable>
          <Image
            flex={1}
            h={290}
            source={ShopProductMock}
            alt="Produto da loja do aplicativo"
          />
          <Pressable
            bg="gray.500"
            rounded="full"
            p={2}
            alignItems="center"
            justifyContent="center"
          >
            <AntDesign name="heart" size={24} color={colors.red[300]} />
          </Pressable>
        </HStack>

        <HStack alignItems="flex-start" px={10}></HStack>
        <Text color="purple.500" fontFamily="semiBold" fontSize="md">
          Produtos/Suplementos
        </Text>
        <Text color="white" fontFamily="semiBold" fontSize="2xl">
          Hello Brain 30 dias
        </Text>
        <HStack alignItems="center">
          <AntDesign name="star" size={16} color={colors.yellow[300]} />
          <Box w={1} h={1} bg="white" rounded="full" mx={1} />
          <Text color="purple.500" fontFamily="body" fontSize="sm">
            196 avaliações
          </Text>
        </HStack>
        <Text my={3} color="white" fontFamily="body" fontSize="md">
          Hello Brain é um suplemento inovador que foi especialmente desenvolvido
          para otimizar as funções cerebrais. ele contém poderosos ingredientes
          que se reforçam mutuamente e são seguros para o corpo. É sem aditivos
          químicos, sem conservante e livre de glúten e omg.
        </Text>

        <ShopProductDropInfos />
      </ScrollView>
      <Box position="absolute" alignSelf="center" bottom={3} w="full">
        <HStack alignItems="center" justifyContent="space-between">
          <HStack alignItems="flex-end" justifyContent="center" space={1}>
            <Text color="white" fontFamily="semiBold" fontSize="3xl">
              R$29,90
            </Text>
            <Text
              color="gray.300"
              fontFamily="semiBold"
              fontSize="md"
              textDecorationLine="line-through"
            >
              R$49,90
            </Text>
          </HStack>
          <Button w={120} title="Comprar" />
        </HStack>
      </Box>
    </ScreenContainer>
  );
}
