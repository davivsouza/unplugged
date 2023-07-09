import { Ionicons } from '@expo/vector-icons'
import { IPressableProps, Pressable } from 'native-base';


type Props = IPressableProps & {
  icon: keyof typeof Ionicons.glyphMap;
}

export function AudioPlayerButton({ icon, ...rest }: Props) {
  return (
    <Pressable
      w={20}
      h={20}
      alignItems="center"
      pl={1}
      justifyContent="center"
      bg="white"
      rounded="full"
      {...rest}
    >
      <Ionicons name={icon} size={50} color="black" />
    </Pressable>
  )
}