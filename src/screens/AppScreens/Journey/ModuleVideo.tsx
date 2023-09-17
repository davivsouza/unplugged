import { Comments } from "@components/Comments";
import { ModuleVideoButton } from "@components/ModuleVideoButton";
import { ScreenContainer } from "@components/ScreenContainer";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Divider, HStack, Heading, Image, Pressable, Text, VStack } from "native-base";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import GoBackSvg from "@assets/goback.svg";
import { ModuleContentDTO } from "../../../dtos/ModuleContentDTO";
import { ModuleVideoPlayer } from "@components/ModuleVideoPlayer";
import { ContentDTO } from "../../../dtos/ModuleDTO";
type RouteParams = ContentDTO


export function ModuleVideo() {
  const route = useRoute();
  const { navigate } = useNavigation<AppNavigatorRoutesProps>()

  const content = route.params as RouteParams;

  function handleNavigate() {
    navigate('journey')
  }
  return (
    <ScreenContainer>
      <Pressable
        p={6}
        onPress={handleNavigate}
        top={20}
        left={2}
        zIndex={20}
        style={{ elevation: 10 }}
        position="absolute"
      >
        <GoBackSvg fill="#fff" />
      </Pressable>
      <ModuleVideoPlayer videoId={content.id} />
      <Text mt={8} fontFamily="heading" fontSize="2xl" color="white" lineBreakMode="middle">
        {content.contents_name}
      </Text>
      <HStack mt={10} alignItems="center" justifyContent="center">
        <ModuleVideoButton icon="heart" />
        <ModuleVideoButton icon="download" />
        <ModuleVideoButton icon="share-2" />
        <ModuleVideoButton icon="message-circle" />
      </HStack>
      <Divider my={7} />
      {/* <Comments comments={comments} /> */}
    </ScreenContainer>
  );
}
