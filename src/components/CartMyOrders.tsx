import { ScrollView, Text } from "native-base";
import {CartMyOrderItem} from '@components/CartMyOrderItem'
export function CartMyOrders(){
  return (
    <ScrollView height="70%" contentContainerStyle={{
      paddingBottom: 100,
    }} showsVerticalScrollIndicator={false}>
      <CartMyOrderItem />
    </ScrollView>
  )
}