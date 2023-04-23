import { Heading, VStack, Text } from "native-base";

type Props = {
  heading: string;
  text: string;
};
export function FormHeader({ heading, text }: Props) {
  return (
    <VStack my={4}>
       <Heading fontSize="4xl" fontFamily="heading" mt={12}>
        {heading}
      </Heading>
      <Text fontFamily="body" color="gray.400">
        {text}
      </Text>

    </VStack>
  );
}
