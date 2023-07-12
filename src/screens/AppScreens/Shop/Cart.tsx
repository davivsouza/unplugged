import { ScreenContainer } from "@components/ScreenContainer";
import { HStack, Pressable, Text } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { useState } from "react";
import { CartNavigation } from "@components/CartNavigation";
import { CartNavigationContent } from "@components/CartNavigationContent";
import GoBackSvg from "@assets/goback.svg";

export function Cart() {
  const { navigate } = useNavigation<AppNavigatorRoutesProps>()

  const [selectedItem, setSelectedItem] = useState("carrinho");

  function handleSelectedItem(item: string) {
    setSelectedItem(item)
  }

  async function handleNavigate() {
    navigate('shop');
  }

  return (
    <ScreenContainer>
      <HStack alignItems="center" justifyContent="center" mb={12} >
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
        <Text color="white" fontSize="2xl" fontFamily="heading" style={{
          elevation: 10
        }}>Produtos</Text>
      </HStack>
      <CartNavigation onSelectItem={handleSelectedItem} selectedItem={selectedItem} />
      <CartNavigationContent selectedItem={selectedItem} />

    </ScreenContainer>
  )
}