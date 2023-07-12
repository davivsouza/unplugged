import { Divider, HStack, Pressable, Text, VStack } from "native-base";
import {CartPaymentMethodModal} from '@components/CartPaymentMethodModal'
import { useState } from "react";

export function CartPaymentDetails() {

 
  return (
    <VStack >
     
      <VStack  alignItems="center" justifyContent="center" w="full" rounded="xl" bg="gray.500" py={3}>
        <HStack px={4} mb={3} justifyContent="space-between">
          <VStack flex={1}>
            <Text color="gray.200" fontFamily="body" fontSize="sm">
              Subtotal dos produtos
            </Text>
            <Text color="gray.200" fontFamily="body" fontSize="sm">
              Desconto
            </Text>
            <Text color="gray.200" fontFamily="body" fontSize="sm">
              Frete
            </Text>
          </VStack>
          <VStack>
            <Text color="white" fontFamily="semiBold" fontSize="sm">
              R$ 75,80
            </Text>
            <Text color="white" fontFamily="semiBold" fontSize="sm">
              R$ 20,00
            </Text>
            <Text color="white" fontFamily="semiBold" fontSize="sm">
              Grátis
            </Text>
          </VStack>
        </HStack>
        <Divider w="full" mb={3} bg="white"/>
        <HStack px={4} mb={3} alignItems="center" justifyContent="space-between">
          <Text color="white" fontFamily="semiBold" flex={1}>
            Preço total
          </Text>
          <Text color="white" fontFamily="semiBold">
            R$ 55,80
          </Text>
        </HStack>
      </VStack>
      
    </VStack>
  )
}