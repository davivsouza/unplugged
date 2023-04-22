import { Center, Image, Text, VStack } from "native-base";

export function Home() {
  return (
    <VStack flex={1} px={10} pb={16}>
      <Center my={24}>
        <Image
          source={{
            uri: "https://www1.pictures.zimbio.com/mp/-Ah5kR2d5-_l.jpg",
          }}
          w="full"
          h={300}
          rounded="md"
          borderWidth={10}
          borderColor="green.400"
          alt="Monkey in suits"
        />
        <Text fontSize="lg" fontWeight="bold" >
            Monkey In Suits
        </Text>
      </Center>
    </VStack>
  );
}
