import { Comments } from "@components/Comments";
import { ModuleVideoButton } from "@components/ModuleVideoButton";
import { ScreenContainer } from "@components/ScreenContainer";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Divider, HStack, Heading, Image, Pressable, Text, VStack } from "native-base";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { Module as ModuleDTO } from "../../../@types/module";
import GoBackSvg from "@assets/goback.svg";
type RouteParams = {
  moduleNumber: number;
  videoNumber: number;
  videoTitle: string;
  duration: number;
  comments?: [
    {
      userId: string;
      username: string
      comment: string;
      likes: number;
      stars: number[];
    }
  ];
};

const moduleMock: ModuleDTO = {
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
          stars: [0, 1, 2, 3, 4],
        }
      ]
    }
  ]
}
export function ModuleVideo() {
  const route = useRoute();
  const { navigate } = useNavigation<AppNavigatorRoutesProps>()

  const { moduleNumber, duration, videoNumber, videoTitle, comments } =
    route.params as RouteParams;

  function handleNavigate() {
    navigate('module', { module: moduleMock })
  }
  return (
    <ScreenContainer>
      <Pressable
        pr={3}
        py={3}
        onPress={handleNavigate}
        mb={8}
      >
        <GoBackSvg fill="#fff" />
      </Pressable>
      <Text fontFamily="heading" fontSize="2xl" color="white" lineBreakMode="middle">
        Módulo {moduleNumber}: {videoTitle}
      </Text>

      <HStack mt={10} alignItems="center" justifyContent="center">
        <ModuleVideoButton icon="heart" />
        <ModuleVideoButton icon="download" />
        <ModuleVideoButton icon="share-2" />
        <ModuleVideoButton icon="message-circle" />
      </HStack>
      <Divider my={7} />
      <Comments comments={comments} />
    </ScreenContainer>
  );
}
