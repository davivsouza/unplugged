import { VStack } from "native-base";

type Props = {
  children: React.ReactNode
}

export function ScreenContainer({ children }: Props) {
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
      {children}
    </VStack>
  )
}