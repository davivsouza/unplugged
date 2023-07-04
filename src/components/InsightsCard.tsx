import {VStack} from 'native-base'
type Props = {
  children: React.ReactNode
}

export function InsightsCard({children}:Props){
  return (
    <VStack w="full" h={320} alignItems="center" justifyContent="center" bg="gray.500" rounded="xl" mb={12} py={12}  px={4}>
      {children}
    </VStack>
  )
}