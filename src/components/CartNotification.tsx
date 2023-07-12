import { Box, Text } from "native-base";

export function CartNotification(){
  return (
    <Box w={5} h={5} bg="purple.500" rounded="full" justifyContent="center" alignItems="center" position="absolute" bottom={-6} left={0}>
      <Text color="white" fontSize="xs">1</Text>
    </Box>
  )
}