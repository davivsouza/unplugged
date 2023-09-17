import {
  Box,
  HStack,
  Pressable,
  Text,
  VStack,
  useTheme,
} from "native-base";
import { AntDesign, Fontisto } from "@expo/vector-icons";

type Props = {
  comments?: [
    {
      userId: string;
      username: string;
      comment: string;
      likes: number;
      stars: number[];
    }
  ];
};
export function Comments({ comments }: Props) {
  const { colors } = useTheme();

  return (
    <>
      {comments?.map(comment => (
        <Box key={comment.userId} m={3} bgColor="gray.500" px={3} py={5} rounded="xl" shadow={9} >
          <VStack>
            <HStack alignItems="center" justifyContent="space-between">
              <HStack alignItems="center" space={2}>
                <Box p={2} rounded='full' bg="gray.400">
                  <AntDesign name="user" size={20} color="white" />
                </Box>
                <Text color="white" fontFamily="semiBold" fontSize="sm">
                  {comment.username}
                </Text>
                <Text color="white" fontFamily="body" fontSize="xs">
                  1 mês atrás
                </Text>
              </HStack>
              <Text color="white" fontFamily="body" fontSize="xs">
                {comment.stars.map((stars, idx) => (
                  <AntDesign key={idx} name="star" size={12} color={colors.yellow[300]} />
                ))}
              </Text>
            </HStack>
            <Text my={2} color="white" fontFamily="body" fontSize="xs">
              {comment.comment}
            </Text>
            <Pressable alignSelf="flex-end">
              <HStack alignItems="center">
                <Fontisto name="heart" size={15} color={colors.red[300]} />
                <Text color="white" fontFamily="body" fontSize="xs" ml={2}>
                  25
                </Text>
              </HStack>
            </Pressable>
          </VStack>
        </Box>
      ))}
    </>
  );
}
