import { Text, VStack } from "native-base";

export function Habits() {
  return (
    <VStack
      flex={1}
      py={90}
      px={5}
      bg={{
        linearGradient: {
          colors: ["gray.800", "purple.800"],
          start: [0, 0.4],
          end: [0, 1],
        },
      }}
    >
      <Text color="white" fontFamily="heading" fontSize="3xl" textAlign="center">
        HÁBITOS
      </Text>
    </VStack>
  )
}