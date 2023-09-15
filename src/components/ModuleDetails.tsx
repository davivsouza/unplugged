import {
  VStack,
  Text,
  HStack,
  Pressable,
  FlatList,
  Box,
  Heading,
} from "native-base";
import { useEffect, useState } from "react";
import { DetailsButton } from "./DetailsButton";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { ModuleDTO } from "../dtos/ModuleDTO";
import { api } from "../services/api";
import { ModuleContentDTO } from "../dtos/ModuleContentDTO";
type Props = {
  module_description: string
  module_id: number
  selectedInfo: string
  setSelectedInfo: (info: "about" | "downloaded" | "content") => void
}

export function ModuleDetails({ module_description, module_id, setSelectedInfo, selectedInfo }: Props) {

  const [moduleContents, setModuleContents] = useState<ModuleContentDTO[]>([])


  async function fetchModuleContents() {
    const { data } = await api.get<{ contents: ModuleContentDTO[] }>('contents/')
    const contentData = data.contents.filter((content) => content.content_Module_id === module_id)
    setModuleContents(contentData)
  }
  useEffect(() => {
    fetchModuleContents()
  }, [selectedInfo])

  const { navigate } = useNavigation<AppNavigatorRoutesProps>();
  return (
    <VStack>
      <HStack alignItems="center" justifyContent="space-evenly" mb={20}>
        <DetailsButton
          title="Sobre"
          isSelected={selectedInfo === "about" && true}
          onPress={() => setSelectedInfo("about")}
        />
        <DetailsButton
          title="Conteúdo"
          isSelected={selectedInfo === "content" && true}
          onPress={() => setSelectedInfo("content")}
        />
        <DetailsButton
          title="Baixados"
          isSelected={selectedInfo === "downloaded" && true}
          onPress={() => setSelectedInfo("downloaded")}
        />
      </HStack>
      {selectedInfo === "about" && (
        <Text color="white" fontFamily="body" fontSize="md">
          {module_description}
        </Text>
      )}
      {selectedInfo === "content" && (
        <FlatList
          data={moduleContents}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item: content }) => (
            <HStack justifyContent="space-between" alignItems="center" mb={6}>
              <HStack flex={1} alignItems="center">
                <Box
                  width={12}
                  height={12}
                  borderWidth={1}
                  borderColor="white"
                  rounded="full"
                  textAlign="center"
                  alignItems="center"
                  justifyContent="center"
                  mr={4}
                >
                  <Text color="white" fontFamily="body" fontSize="lg">
                    {content.id}
                  </Text>
                </Box>
                <VStack>
                  <Text maxW="230" w="100%" color="white" fontFamily="body" fontSize="sm" numberOfLines={2}>
                    {content.content_name}
                  </Text>
                  <Text color="white" fontFamily="body" fontSize="xs">
                    10 min
                  </Text>
                </VStack>
              </HStack>
              <Pressable
                height={8}
                px={4}
                py={1}
                textAlign="center"
                alignItems="center"
                borderWidth={1}
                borderColor="purple.500"
                rounded="xl"
                justifyContent="center"
                onPress={() => navigate('moduleVideo', {
                  content: {
                    id: content.id,
                    content_article: content.content_article,
                    content_comments: content.content_comments,
                    content_Module_id: content.content_Module_id,
                    content_Module_name: content.content_Module_name,
                    content_name: content.content_name,
                    content_type: content.content_type,
                    content_video_url: content.content_video_url,
                  }
                })}
              >
                <Text color="purple.500">Assistir</Text>
              </Pressable>
            </HStack>
          )}
        />
      )}
    </VStack>
  );
}
