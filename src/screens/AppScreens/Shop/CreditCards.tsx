import { CreditCardAdd } from '@components/CreditCardAdd'
import { CreditCardListItem } from '@components/CreditCardListItem'
import { ScreenContainer } from '@components/ScreenContainer'
import { Box, Center, FlatList, HStack, PresenceTransition, Pressable, Text, VStack } from 'native-base'
import GoBackSvg from "@assets/goback.svg";
import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '@routes/app.routes';
import { Button } from '@components/Button'
import { useState } from 'react';
import { SucceedPaymentOverlay } from '@components/SucceedPaymentOverlay';
export function CreditCards() {
  const cards: Array<any> | undefined = []
  const { navigate } = useNavigation<AppNavigatorRoutesProps>()
  const [loadPayment, setLoadpayment] = useState(false)

  function handleNavigate() {
    navigate('cart')
  }
  function handlePayment() {
    setLoadpayment(true)
  }

  return (
    <>
      {loadPayment
        ? <SucceedPaymentOverlay isLoadedOverlay={loadPayment} onCloseOverlay={setLoadpayment} />
        : (
          <ScreenContainer space={16}>
            <HStack alignItems="center" justifyContent="center" mb={8} >
              <Pressable
                py={3}
                pr={8}
                onPress={handleNavigate}
                position='absolute'
                alignItems="center"
                justifyContent="center"
                left={0}

              >

                <GoBackSvg fill="#fff" />
              </Pressable>
              <Text color="white" fontSize="2xl" fontFamily="heading" style={{
                elevation: 10
              }}>Escolha seu cartão</Text>
            </HStack>
            <FlatList
              data={cards}
              keyExtractor={item => String(item)}
              renderItem={() => (
                <CreditCardListItem />
              )}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={() => (
                <Center>
                  <Text color="gray.300" fontSize="xl" fontFamily="heading">
                    Nenhum cartão adicionado.
                  </Text>
                </Center>
              )}
            />
            <CreditCardAdd />
            <Button title="Comprar" onPress={handlePayment} />
          </ScreenContainer>
        )
      }
    </>
  )
}