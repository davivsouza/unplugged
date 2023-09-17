import { Comments } from "@components/Comments";
import { ModuleVideoButton } from "@components/ModuleVideoButton";
import { ScreenContainer } from "@components/ScreenContainer";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Divider, HStack, Heading, Image, Pressable, Text, VStack } from "native-base";
import { ModuleContentDTO } from "../../../dtos/ModuleContentDTO";
import { ModuleVideoPlayer } from "@components/ModuleVideoPlayer";
import { ContentDTO } from "../../../dtos/ModuleDTO";
type RouteParams = ContentDTO


export function ModuleVideo() {
  const route = useRoute();

  const content = route.params as RouteParams;


  return (
    <ScreenContainer>

      <ModuleVideoPlayer videoId={content.id} />
      <Text mt={8} fontFamily="heading" fontSize="2xl" color="white" lineBreakMode="middle">
        Aula {content.id}: {content.contents_name}
      </Text>
      <HStack mt={10} alignItems="center" justifyContent="center">
        <ModuleVideoButton icon="heart" />
        <ModuleVideoButton icon="download" />
        <ModuleVideoButton icon="share-2" />
        <ModuleVideoButton icon="message-circle" />
      </HStack>
      <Divider my={7} />
      <Comments comments={[
        {
          comment: 'Aula foi muito boa, a qualidade da edição é maravilhosas e o profesor tem um domínio sobre o assunto o que torna tudo melhor.',
          likes: 2,
          stars: [0, 1, 2],
          userId: '21dasdacdascas',
          username: 'Halisson Lima'

        }
      ]} />
    </ScreenContainer>
  );
}
