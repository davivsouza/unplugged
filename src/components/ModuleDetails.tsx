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
import { ContentDTO } from "../dtos/ModuleDTO";
type Props = {
  module_description: string
  contents: ContentDTO[]
  selectedInfo: string
  setSelectedInfo: (info: "about" | "downloaded" | "content") => void
}

export function ModuleDetails({ module_description, setSelectedInfo, selectedInfo, contents }: Props) {

  const { navigate } = useNavigation<AppNavigatorRoutesProps>();
  return (
    <VStack>
      <HStack alignItems="center" justifyContent="space-evenly" mb={10}>
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
        <Text color="white" fontFamily="body" fontSize="sm">
          {module_description}
        </Text>
      )}
      {selectedInfo === "content" && (
        <FlatList
          data={contents}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item: content, index }) => (
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
                    {index + 1}
                  </Text>
                </Box>
                <VStack>
                  <Text maxW="230" w="100%" color="white" fontFamily="body" fontSize="sm" numberOfLines={2}>
                    {content.contents_name}
                  </Text>
                  <Text color="white" fontFamily="body" fontSize="xs">
                    {content.contents_type === 'video' ? Math.floor(content.contets_duration / 60) + 'min' : 'Artigo'}
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
                onPress={() => navigate('moduleVideo', content)}
              >
                <Text color="purple.500">
                  {content.contents_type === 'video' ? 'Assistir' : 'Ler'}
                </Text>
              </Pressable>
            </HStack>
          )}
        />
      )}
    </VStack>
  );
}
