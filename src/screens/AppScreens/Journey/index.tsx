import { useState } from "react";
import { Divider, FlatList, Heading, Text, VStack } from "native-base";
import { Modules } from "@components/Modules";
import { Module } from "../../../@types/module";

type modulesDataProps = Module;

export function Journey() {
  const [modulesData, setModulesData] = useState<modulesDataProps[]>([
    {
      number: 1,
      completedVideos: 3,
      name: "Introdução",
      videosLength: 4,
      description: 'bbla bla bla bla num sei oq n sei o qlá',
      content: [
        {
          videoNumber: 1,
          videoTitle: "Introdução",
          duration: 5,
        },
        {
          videoNumber: 2,
          videoTitle: "Sigma x Alfa, quem ganha nesta batalha?",
          duration: 23,
        },
        {
          videoNumber: 3,
          videoTitle: "Por que o Halisson é tão alfa?",
          duration: 7,
        },
      ],
    },
    {
      number: 2,
      completedVideos: 1,
      name: "Definindo a sua montanha",
      videosLength: 8,
      description: 'bbla bla bla bla num sei oq n sei o qlá',
      content: [
        {
          videoNumber: 3,
          videoTitle: "Ser sigma vale a pena?",
          duration: 7,
        },
      ],
    },
    {
      number: 3,
      completedVideos: 0,
      description: 'bbla bla bla bla num sei oq n sei o qlá',
      name: "Entendendo o seu cérebro",
      videosLength: 7,
      content: [
        {
          videoNumber: 3,
          videoTitle: "Ser sigma vale a pena?",
          duration: 7,
        },
      ],
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
        keyExtractor={(item) => item.name}
        renderItem={({ item: module }) => <Modules module={module} />}
      />
    </VStack>
  );
}
