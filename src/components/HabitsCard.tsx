import { VStack, Text, Box, HStack, useTheme, Pressable, useToast } from 'native-base'
import { HabitDTO, HabitLogs } from '../dtos/HabitDTO'
import { Feather } from '@expo/vector-icons'



type Props = {
  habit: HabitDTO
  onComplete: (habitId: number, userId: string) => Promise<void>
  onDelete: (id: number) => Promise<void>
  checkIsHabitCompleted(habit: HabitDTO): [] | HabitLogs[]
}

export function HabitsCard({ habit, onComplete, onDelete, checkIsHabitCompleted }: Props) {
  const { colors } = useTheme()

  function completeHabit() {
    onComplete(
      Number(habit.id),
      String(habit.userId),
    )
  }

  return (
    <VStack overflow="hidden" position="relative" w="full" rounded="lg" bg="purple.600" px={4} py={3} shadow={9} style={{
      elevation: 10,
    }} mb={4}>
      <Box
        position="absolute"
        top={-5}
        left={0}
        w={1} h="100"
        bg={checkIsHabitCompleted(habit)?.length > 0 ? 'purple.600' : habit.color}
        borderTopLeftRadius="full"
        borderBottomLeftRadius="full"
      />
      <HStack justifyContent='space-between' alignItems='center'>
        <VStack>
          <Text
            fontSize="lg"
            color={checkIsHabitCompleted(habit).length > 0 ? 'gray.400' : "white"}
            fontFamily="semiBold"
            textDecorationLine={checkIsHabitCompleted(habit)?.length > 0 ? 'line-through' : 'none'}
          >
            {habit.name}
          </Text>
          <Text fontSize="sm" color={checkIsHabitCompleted(habit).length > 0 ? 'gray.400' : "gray.300"} fontFamily="body">
            {habit.description}
          </Text>
        </VStack>
        {
          checkIsHabitCompleted(habit).length == 0 && (
            <HStack alignItems='center' space={8}>
              <Pressable rounded="full" onPress={() => onDelete(Number(habit.id))} _pressed={{
                background: 'red.200'
              }}>
                <Feather name="trash-2" size={20} color={colors.gray[100]} />
              </Pressable>
              <Pressable
                onPress={completeHabit}
              >
                <Feather name="check-circle" size={20} color={colors.gray[100]} />
              </Pressable>
            </HStack>
          )
        }
      </HStack>
    </VStack>
  )
}