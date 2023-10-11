import {
  Box,
  Center,
  HStack,
  Pressable,
  Text,
  VStack,
  useTheme,
  useToast,
} from "native-base";
import { AntDesign, Feather } from "@expo/vector-icons";
import { CommentDTO } from "../dtos/CommentDTO";
import { dateDifference } from "@utils/timeDiference";
import { useAuth } from "@hooks/useAuth";
import { useState } from "react";
import { EditCommentModal } from "./EditCommentModal";
import { api } from "../services/api";

type Props = {
  comment: CommentDTO
  handleEditComment(data: CommentDTO): Promise<void>
  handleDeleteComment(data: CommentDTO): Promise<void>
};
export function Comments({ comment, handleDeleteComment, handleEditComment }: Props) {
  const { colors } = useTheme();
  const { user } = useAuth()
  const [showModal, setShowModal] = useState(false);
  const toast = useToast()


  return (
    <VStack alignSelf="center">
      <EditCommentModal onDeleteComment={handleDeleteComment} onEditComment={handleEditComment} comment={comment} onOpenModal={setShowModal} isModalOpen={showModal} />
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
            {comment.userId === user.id && (
              <Box alignSelf="flex-end">
                <Pressable
                  alignItems="center"
                  justifyContent="center"
                  rounded="full" p={2}
                  _pressed={{
                    backgroundColor: "gray.600",
                  }}
                  onPress={() => setShowModal(true)}
                >
                  <Feather name="edit" size={20} color={colors.gray[300]} />
                </Pressable>
              </Box>
            )}
          </HStack>
          <Text w="85%" mt={4} pl={2} color="white" fontFamily="body" fontSize="xs" lineBreakMode="tail" >
            {comment.comments_text}
          </Text>

        </VStack>
      </Box>
    </VStack >

  );
}

