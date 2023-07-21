import { IPressableProps, Pressable } from 'native-base'
import { Feather } from '@expo/vector-icons'
type Props = IPressableProps
export function HabitsFloatButton({...rest} : Props) {

  function handleOpenModal(){
    console.log('criar hábito')
  }

  return (
    <Pressable
      w={16}
      h={16}
      rounded="full"
      bg="purple.500"
      position="absolute"
      right={4}
      top={380}
      alignItems="center"
      justifyContent="center"
      onPress={handleOpenModal}
      zIndex={10}
      style={{
        elevation: 2,
      }}
      {...rest}
    >
      <Feather name="plus" size={40} color="white" />
    </Pressable>
  )
}