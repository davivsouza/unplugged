import { HStack } from "native-base";
import { DetailsButton } from "./DetailsButton";

type Props = {
  selectedItem: string
  onSelectItem: (item: string) => void
}
export function CartNavigation({ selectedItem, onSelectItem}: Props) {

  return (
    <HStack alignItems="center" justifyContent="space-evenly" mb={12}>
      <DetailsButton
        title="Carrinho"
        isSelected={selectedItem === "carrinho" && true}
        onPress={() => onSelectItem("carrinho")}
      />
      <DetailsButton
        title="Meus pedidos"
        isSelected={selectedItem === "pedidos" && true}
        onPress={() => onSelectItem("pedidos")}
      />
    </HStack>
  )
}