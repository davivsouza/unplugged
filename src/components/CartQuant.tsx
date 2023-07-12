import { Pressable, useTheme } from "native-base";
import { Entypo } from '@expo/vector-icons'
import { useState } from "react";

type Props = {
  type: 'increment' | 'decrement'

}

export function CartQuant({ type }: Props) {
  const { colors } = useTheme();
  const [iconColor, setIconColor] = useState(colors.purple[500])
  return (
    <Pressable
      w={6}
      h={6}
      borderWidth={1}
      borderColor="purple.500"
      alignItems="center"
      justifyContent="center"
      rounded="full"
      onPressIn={() => {
        setIconColor(colors.black)
      }}
      onPressOut={() => setIconColor(colors.purple[500])}
      _pressed={{
        bg: 'purple.500',
      }}
    >
      <Entypo
        name={type == "increment" ? 'plus' : 'minus'}
        size={20}
        color={iconColor}

      />
    </Pressable>
  )
}