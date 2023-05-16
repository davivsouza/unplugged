import { Divider, Heading, Text, VStack } from "native-base";
export function Journey() {
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
      <Heading
        fontFamily="body"
        fontWeight="normal"
        color="white"
        lineBreakMode="clip"
      >
        Bem-vindo á,
      </Heading>
      <Heading   fontWeight="normal" fontFamily="body" color="white">
        Jornada <Text fontWeight="bold">Musashi</Text>
      </Heading>
      <Divider my={7}/>
    </VStack>
  );
}
