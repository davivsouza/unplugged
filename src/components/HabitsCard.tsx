import { VStack, Text, Box } from 'native-base'
import { HabitDTO } from '../dtos/HabitDTO'


type Props = {
  habit: HabitDTO
}

export function HabitsCard({ habit }: Props) {

  return (
    <VStack overflow="hidden" position="relative" w="full" rounded="lg" bg="purple.600" px={4} py={3} shadow={9} style={{
      elevation: 10,
    }} mb={4}>
      <Box position="absolute" top={-5} left={0} w={1} h="100" bg={habit.color || 'red.500'} borderTopLeftRadius="full" borderBottomLeftRadius="full" />
      <Text fontSize="lg" color="white" fontFamily="semiBold">
        {habit.name}
      </Text>
      <Text fontSize="sm" color="gray.300" fontFamily="body">
        {habit.description}
      </Text>
    </VStack>
  )
}