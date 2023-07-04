import { Pressable } from 'native-base'
import { Feather } from '@expo/vector-icons'
export function HabitsFloatButton() {

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
      bottom={100}
      right={4}
      alignItems="center"
      justifyContent="center"
      onPress={handleOpenModal}
      zIndex={10}
      style={{
        elevation: 2,
      }}
    >
      <Feather name="plus" size={40} color="white" />
    </Pressable>
  )
}