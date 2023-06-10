import { Comments } from "@components/Comments";
import { ModuleVideoButton } from "@components/ModuleVideoButton";
import { useRoute } from "@react-navigation/native";
import { Divider, HStack, Heading, Image, Text, VStack } from "native-base";

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
      stars: number;
    }
  ];
};
export function ModuleVideo() {
  const route = useRoute();

  const { moduleNumber, duration, videoNumber, videoTitle, comments } =
    route.params as RouteParams;

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
      <Heading fontFamily="heading" fontSize="3xl" color="white">
        Módulo {moduleNumber}: {videoTitle}
      </Heading>
      <HStack alignItems="center" mt={3}>
        <Image
          w={10}
          h={10}
          rounded="full"
          source={{
            uri: "https://e0.pxfuel.com/wallpapers/675/779/desktop-wallpaper-funny-monkeys-pistols-necktie-suit-thumbnail.jpg",
          }}
          alt="Foto de perfil do criador do vídeo"
        />
        <Text ml={3} fontFamily="body" fontSize="sm" color="gray.200">
          Agiota
        </Text>
      </HStack>
      <HStack mt={10} alignItems="center" justifyContent="center">
        <ModuleVideoButton icon="heart" />
        <ModuleVideoButton icon="download" />
        <ModuleVideoButton icon="share-2" />
        <ModuleVideoButton icon="message-circle" />
      </HStack>
        <Divider my={7}/>
        <Comments comments={comments}/>
    </VStack>
  );
}
