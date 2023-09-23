import { AntDesign } from '@expo/vector-icons';
import { HStack, Text } from 'native-base';
import { useAuth } from '@hooks/useAuth';



export function JourneyHeader() {
  const { user } = useAuth()

  return (
    <HStack justifyContent="space-between" mb={12}>
      <HStack alignItems={'center'} space={3}>
        <AntDesign name="user" size={35} color="white" />
        <Text color="white" fontSize={'md'}>{user.nickname}</Text>
      </HStack>
      <AntDesign name="search1" size={30} color="white" />
    </HStack>
  )
}