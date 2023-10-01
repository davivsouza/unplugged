import {
  Box,
  Center,
  HStack,
  Pressable,
  Text,
  VStack,
  useTheme,
} from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { CommentDTO } from "../dtos/CommentDTO";
import { dateDifference } from "@utils/timeDiference";

type Props = {
  comment: CommentDTO
};
export function Comments({ comment }: Props) {
  const { colors } = useTheme();

  return (
    <VStack alignSelf="center">
      <Box w={400} my={3} bgColor="gray.500" px={3} py={5} rounded="xl" shadow={9} >
        <VStack>
          <HStack alignItems="center" justifyContent="space-between">
            <HStack alignItems="center" space={2}>
              <Box p={2} rounded='full' bg="gray.400">
                <AntDesign name="user" size={20} color="white" />
              </Box>
              <Text color="white" fontFamily="semiBold" fontSize="sm">
                {comment.User.name}
              </Text>
              <Text color="white" fontFamily="body" fontSize="xs">
                {dateDifference(comment.created_at)}
              </Text>
            </HStack>
            <Text color="white" fontFamily="body" fontSize="xs">
              {comment.comments_rating}
            </Text>
          </HStack>
          <Text w="85%" mt={4} pl={2} color="white" fontFamily="body" fontSize="xs" lineBreakMode="tail" >
            {comment.comments_text}
          </Text>
          <Pressable alignSelf="flex-end">
            <HStack alignItems="center">
              <AntDesign name="hearto" size={20} color={colors.white} />
              <Text color="white" fontFamily="body" fontSize="xs" ml={2}>
                {comment.comments_likes}
              </Text>
            </HStack>
          </Pressable>
        </VStack>
      </Box>
    </VStack >

  );
}

