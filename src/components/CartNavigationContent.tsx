import { VStack } from "native-base";
import { CartMyOrders } from "@components/CartMyOrders";
import { CartDetails } from "@components/CartDetails";


type Props = {
  selectedItem: string
}

export function CartNavigationContent({ selectedItem }: Props) {
  return (
    <VStack>
      {
        selectedItem === 'carrinho' && <CartDetails />
      }
      {
        selectedItem === 'pedidos' && <CartMyOrders />
      }
    </VStack>
  )
}