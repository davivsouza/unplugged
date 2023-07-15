import { Box, Center, Divider, FlatList, HStack, Pressable, ScrollView, Text, VStack } from "native-base";
import { CartPaymentMethodModal } from '@components/CartPaymentMethodModal'
import { CartPaymentDetails } from "./CartPaymentDetails";
import { CartItem } from "@components/CartItem";
import { CartAddress } from "./CartAddress";
import { Button } from "./Button";
import { useState } from "react";
export function CartDetails() {
  const carts: ArrayLike<any> | null = [1,2, 3]
  const [showModal, setShowModal] = useState(false);

  function handleOpenModal() {
    setShowModal(true);
  }

  return (
    <VStack>
      <FlatList
        data={carts}
        keyExtractor={item => String(item)}
        renderItem={({ item }) => (
          <>
            <CartItem />
          </>
        )}
        
        height={carts.length > 1 ? '40%' : 'auto'}
        mb={4}
        contentContainerStyle={{
          paddingHorizontal: 4
        }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Center>
            <Text color="gray.300" fontSize="xl" fontFamily="heading">
              Nenhum produto na cesta
            </Text>
          </Center>
        )}
      />

      {carts.length > 0 && (
        <ScrollView height={carts.length > 1 ? '50%' : '90%'} showsVerticalScrollIndicator={false} contentContainerStyle={{
          paddingBottom: 16,
        }}>
          <Divider mb={3} />
          <CartAddress />
          <Text my={3} color="white" fontSize="2xl" fontFamily="semiBold">
            Detalhes do Pagamento
          </Text>
          <CartPaymentDetails />
          <Button title="Continuar" onPress={handleOpenModal} mt={6} />
        </ScrollView>
      )}

      <CartPaymentMethodModal isModalOpen={showModal} onOpenModal={setShowModal} />
    </VStack>
  )
}