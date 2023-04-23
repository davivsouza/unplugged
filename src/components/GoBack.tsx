import { TouchableOpacity,TouchableOpacityProps } from 'react-native'
import GoBackSvg from '@assets/goback.svg'
import { Box } from 'native-base'
export function GoBack({...rest}:TouchableOpacityProps) {
  return (
    <TouchableOpacity {...rest}>
      <Box
        bg="gray.50"
        w={10}
        h={10}
        rounded="full"
        alignItems="center"
        justifyContent="center"
        display="flex"
        pr={1}
      >
        <GoBackSvg />
      </Box>
    </TouchableOpacity>
  )
}