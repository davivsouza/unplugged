
import { Box, HStack, Modal, Text, VStack } from "native-base";
import { Button } from "@components/Button";
import { CartPaymentDetails } from "@components/CartPaymentDetails";
import { CardPaymentMethods } from "@components/CardPaymentMethods";
import CreditCardSvg from '@assets/shop/credit-icon.svg'
import BoletoSvg from '@assets/shop/boleto-icon.svg'
import PixSvg from '@assets/shop/pix-icon.svg'
import { useState } from "react";

type Props = {
  isModalOpen: boolean
  onOpenModal: (status: boolean) => void
}

export function CartPaymentMethodModal({ isModalOpen, onOpenModal }: Props) {
  const [selectedMethod, setSelectedMethod] = useState<'credit' | 'boleto' | 'pix'>('credit')
  function handleSelectMethod(method: 'credit' | 'boleto' | 'pix') {
    setSelectedMethod(method)
  }
  function handleContinue() {
    onOpenModal(false)
  }
  return (
    <Modal
      isOpen={isModalOpen}
      justifyContent="center"
      alignItems="center"
      _backdrop={{
        bg: "black"
      }}
      onClose={() => onOpenModal(false)}
    >
      <VStack
        borderTopRadius="3xl"
        bg={{
          linearGradient: {
            colors: ["gray.800", "purple.800"],
            start: [0, 1],
            end: [0, 0],
          },
        }}
        py={8}
        px={6}
        width="full"
        position="absolute"
        bottom={0}
        justifyContent="center"
        alignItems="center"

      >
        <Modal.CloseButton _pressed={{
          bg: 'transparent'
        }} />
        <Text fontSize="2xl" fontFamily="semiBold" color="white">
          Escolha seu método de pagamento
        </Text>
        <VStack space={3} my={6} alignItems="flex-start">
          <CardPaymentMethods
            method="credit"
            selectedMethod={selectedMethod}
            onPress={() => handleSelectMethod('credit')}
          />
          <CardPaymentMethods
            method="boleto"
            selectedMethod={selectedMethod}
            onPress={() => handleSelectMethod('boleto')}
          />
          <CardPaymentMethods
            method="pix"
            selectedMethod={selectedMethod}
            onPress={() => handleSelectMethod('pix')}
          />
        </VStack>
        <CartPaymentDetails />
        <Button title="Continuar" mt={8} onPress={handleContinue} />
      </VStack>
    </Modal>
  )
}