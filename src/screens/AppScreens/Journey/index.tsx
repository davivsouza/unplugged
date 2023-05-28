import { useState } from "react";
import { Divider, FlatList, Heading, Text, VStack } from "native-base";
import { Modules } from "@components/Modules";

type modulesDataProps = {
  moduleNumber: number;
  moduleName: string;
  videosLength: number;
  completedVideos: number;
};
export function Journey() {
  const [modulesData, setModulesData] = useState<modulesDataProps[]>([
    {
      moduleNumber: 1,
      completedVideos: 3,
      moduleName: "Introdução",
      videosLength: 4,
    },
    {
      moduleNumber: 2,
      completedVideos: 1,
      moduleName: "Definindo a sua montanha",
      videosLength: 8,
    },
    {
      moduleNumber: 3,
      completedVideos: 0,
      moduleName: "Entendendo o seu cérebro",
      videosLength: 7,
    },
    
  ]);
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
      <Heading fontWeight="normal" fontFamily="body" color="white">
        Jornada <Text fontWeight="bold">Musashi</Text>
      </Heading>
      <Divider my={7} />
      <FlatList
        flex={1}
        data={modulesData}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.moduleName}
        renderItem={({ item: module }) => <Modules module={module} />}
      />
    </VStack>
  );
}
