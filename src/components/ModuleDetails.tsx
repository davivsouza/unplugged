import {
  VStack,
  Text,
  HStack,
  Pressable,
  FlatList,
  Box,
  Heading,
} from "native-base";
import { useState } from "react";
import { ModuleDetailsButton } from "./ModuleDetailsButton";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { Module } from "../@types/module";
type Props = {
  module: Module
}

export function ModuleDetails({module}: Props) {
  const [selectedInfo, setSelectedInfo] = useState<
    "about" | "downloaded" | "content"
  >("about");

  const {navigate} = useNavigation<AppNavigatorRoutesProps>();
  return (
    <VStack>
      <HStack alignItems="center" justifyContent="space-evenly" mb={20}>
        <ModuleDetailsButton
          title="Sobre"
          isSelected={selectedInfo === "about" && true}
          onPress={() => setSelectedInfo("about")}
        />
        <ModuleDetailsButton
          title="Conteúdo"
          isSelected={selectedInfo === "content" && true}
          onPress={() => setSelectedInfo("content")}
        />
        <ModuleDetailsButton
          title="Baixados"
          isSelected={selectedInfo === "downloaded" && true}
          onPress={() => setSelectedInfo("downloaded")}
        />
      </HStack>
      {selectedInfo === "about" && (
        <Text color="white" fontFamily="body" fontSize="md">
          {module.description}
        </Text>
      )}
      {selectedInfo === "content" && (
        <FlatList
          data={module.content}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.videoTitle}
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
                  <Text  color="white" fontFamily="body" fontSize="lg">
                    {content.videoNumber}
                  </Text>
                </Box>
                <VStack>
                  <Text   maxW="230" w="100%" color="white" fontFamily="body" fontSize="sm" numberOfLines={2}>
                    {content.videoTitle}
                  </Text>
                  <Text color="white" fontFamily="body" fontSize="xs">
                    {content.duration} min
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
                onPress={()=> navigate('moduleVideo', {
                  moduleNumber: module.number,
                  duration: content.duration,
                  videoNumber: content.videoNumber,
                  videoTitle: content.videoTitle,
                  comments: content.comments
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
