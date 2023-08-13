import { useState } from "react";
import { Divider, FlatList, Heading, Text, VStack } from "native-base";
import { Modules } from "@components/Modules";
import { Module } from "../../../@types/module";
import { ScreenContainer } from "@components/ScreenContainer";

type modulesDataProps = Module;

export function Journey() {
  const [modulesData, setModulesData] = useState<modulesDataProps[]>([
    {
      number: 1,
      completedVideos: 3,
      name: "Introdução",
      videosLength: 4,
      description: 'bbla bla bla bla num sei oq n sei o que lá',
      content: [
        {
          videoNumber: 1,
          videoTitle: "Introdução",
          duration: 5,
          comments: [
            {
              userId: "22asfi3@Ufhn",
              username: 'Musashi',
              comment: 'Que professor sigma!',
              likes: 90,
              stars: 5,
            }
          ]
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
          videoTitle: "Teste",
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
          videoTitle: "Teste",
          duration: 7,
        },
      ],
    },
  ]);

  return (
    <ScreenContainer>
      <Heading
        fontFamily="body"
        fontWeight="normal"
        color="white"
        lineBreakMode="clip"
      >
        Bem-vindo á
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
    </ScreenContainer>
  );
}
