import { VStack, Text, Box, HStack, useTheme } from 'native-base'
import { HabitDTO } from '../dtos/HabitDTO'
import { Feather } from '@expo/vector-icons'

type Props = {
  habit: HabitDTO
}

export function HabitsCard({ habit }: Props) {
  const { colors } = useTheme()
  return (
    <VStack overflow="hidden" position="relative" w="full" rounded="lg" bg="purple.600" px={4} py={3} shadow={9} style={{
      elevation: 10,
    }} mb={4}>
      <Box position="absolute" top={-5} left={0} w={1} h="100" bg={habit.color} borderTopLeftRadius="full" borderBottomLeftRadius="full" />
      <HStack justifyContent='space-between' alignItems='center'>
        <VStack>
          <Text fontSize="lg" color="white" fontFamily="semiBold">
            {habit.name}
          </Text>
          <Text fontSize="sm" color="gray.300" fontFamily="body">
            {habit.description}
          </Text>
        </VStack>
        <HStack alignItems='center' space={8}>
          <Feather name="trash-2" size={20} color={colors.gray[100]} />
          <Feather name="check-square" size={20} color={colors.gray[100]} />
        </HStack>
      </HStack>
    </VStack>
  )
}