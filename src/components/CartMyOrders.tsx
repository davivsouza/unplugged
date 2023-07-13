import { FlatList } from "native-base";
import {CartMyOrderItem} from '@components/CartMyOrderItem'
export function CartMyOrders(){
  const orders = [1]
  
  return (
   <FlatList
    data={orders}
    keyExtractor={item => String(item)}
    renderItem={({ item }) => (
      <CartMyOrderItem />
    )}
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{
      paddingBottom: 16
    }}
   />
  )
}