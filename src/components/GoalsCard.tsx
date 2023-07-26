import {VStack, Text, Box} from 'native-base'
import { ColorType } from 'native-base/lib/typescript/components/types'


type Props = {
  title: string
  initialHour?: number
  finalHour?: number
  tagColor: ColorType
}
export function GoalsCard({title, tagColor}:Props){
  return (
    <VStack overflow="hidden"  position="relative" w="full" rounded="lg" bg="purple.600" px={4} py={3} shadow={9} style={{
      elevation:10,
    }} mb={4}>
      <Box position="absolute" top={-5} left={0} w={1} h="100"  bg={tagColor} borderTopLeftRadius="full" borderBottomLeftRadius="full"/>
      <Text fontSize="lg" color="white" fontFamily="semiBold">
        {title}
      </Text>
      <Text fontSize="sm" color="gray.300" fontFamily="body">
        10:30 - 12:45
      </Text>
    </VStack>
  )
}