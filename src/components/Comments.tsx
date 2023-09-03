import {
  Box,
  FlatList,
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
        <Box key={comment.userId} m={3} bgColor="gray.500" px={4} py={5} rounded="xl" shadow={9} >
          <VStack>
            <HStack alignItems="center" justifyContent="space-between">
              <HStack alignItems="center">
                <Text color="white" fontFamily="semiBold" fontSize="lg" mr={2}>
                  {comment.username}
                </Text>
                <Text color="white" fontFamily="body" fontSize="xs">
                  3 dias atrás
                </Text>
              </HStack>
              <Text color="white" fontFamily="body" fontSize="xs">
                {comment.stars.map((stars, idx) => (
                  <AntDesign key={idx} name="star" size={12} color={colors.yellow[300]} />
                ))}
              </Text>
            </HStack>
            <Text my={2} color="white" fontFamily="body" fontSize="sm">
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
