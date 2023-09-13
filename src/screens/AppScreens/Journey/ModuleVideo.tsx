import { Comments } from "@components/Comments";
import { ModuleVideoButton } from "@components/ModuleVideoButton";
import { ScreenContainer } from "@components/ScreenContainer";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Divider, HStack, Heading, Image, Pressable, Text, VStack } from "native-base";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import GoBackSvg from "@assets/goback.svg";
import { ModuleContentDTO } from "../../../dtos/ModuleContentDTO";
type RouteParams = ModuleContentDTO;


export function ModuleVideo() {
  const route = useRoute();
  const { navigate } = useNavigation<AppNavigatorRoutesProps>()

  const { content_Module_id, content_name } =
    route.params as RouteParams;

  // function handleNavigate() {
  //   navigate('module', { module: moduleMock })
  // }
  return (
    <ScreenContainer>
      <Pressable
        pr={3}
        py={3}
        // onPress={handleNavigate}
        mb={8}
      >
        <GoBackSvg fill="#fff" />
      </Pressable>
      <Text fontFamily="heading" fontSize="2xl" color="white" lineBreakMode="middle">
        Módulo {content_Module_id}: {content_name}
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
