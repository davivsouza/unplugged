import { AntDesign } from '@expo/vector-icons';
import { HStack, Pressable, Text } from 'native-base';
import { useAuth } from '@hooks/useAuth';
import GoBackSvg from "@assets/goback.svg";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from '@routes/app.routes';

type Props = {
  canGoBack?: boolean
}


export function JourneyHeader({ canGoBack }: Props) {
  const { user } = useAuth()
  const { goBack } = useNavigation<AppNavigatorRoutesProps>()

  function handleNavigate() {
    goBack()
  }
  return (
    <HStack justifyContent="space-between" mb={12}>
      {canGoBack && <Pressable
        pr={3}
        py={4}
        onPress={handleNavigate}
      >
        <GoBackSvg fill="#fff" />
      </Pressable>
      }
      <HStack alignItems={'center'} space={3}>
        <AntDesign name="user" size={35} color="white" />
        <Text color="white" fontSize={'md'}>{user.nickname}</Text>
      </HStack>
      <AntDesign name="search1" size={30} color="white" />
    </HStack>
  )
}