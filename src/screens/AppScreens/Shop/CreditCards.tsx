import { CreditCardAdd } from '@components/CreditCardAdd'
import { CreditCardListItem } from '@components/CreditCardListItem'
import { ScreenContainer } from '@components/ScreenContainer'
import { Box, HStack, Pressable, Text } from 'native-base'
import GoBackSvg from "@assets/goback.svg";
import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '@routes/app.routes';
export function CreditCards() {
  const { navigate } = useNavigation<AppNavigatorRoutesProps>()
  function handleNavigate() {
    navigate('cart');
  }
  return (
    <ScreenContainer space={16}>
      <HStack alignItems="center" justifyContent="center" mb={8} >
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
        }}>Escolha seu cartão</Text>
      </HStack>
      <CreditCardListItem />
      <CreditCardAdd />
    </ScreenContainer>
  )
}