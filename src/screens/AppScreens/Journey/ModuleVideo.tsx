import { Comments } from "@components/Comments";
import { ModuleVideoButton } from "@components/ModuleVideoButton";
import { ScreenContainer } from "@components/ScreenContainer";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Box, Divider, HStack, Heading, Image, Pressable, ScrollView, Text, VStack } from "native-base";
import { ModuleVideoPlayer } from "@components/ModuleVideoPlayer";
import { ContentDTO } from "../../../dtos/ModuleDTO";
import GoBackSvg from "@assets/goback.svg";
import { Share } from "react-native";

import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { Input } from "@components/Input";
type RouteParams = {
  content: ContentDTO
  videoNumber: number
}


export function ModuleVideo() {
  const route = useRoute();
  const { goBack } = useNavigation<AppNavigatorRoutesProps>()
  const { content, videoNumber } = route.params as RouteParams;
  const articleWithBreakLine = content.contents_article?.split('/n')

  const url = 'https://unplugged.com'
  async function onShare() {
    try {
      const result = await Share.share({
        message: `
        Venha conhecer esse aplicativo incrível que estou usando para diminuir meu vício nas redes sociais e me tornar mais produtivo!
        \n${url}
        `,
      })

      if (result.action == Share.sharedAction) {
        if (result.activityType) {
          console.log('typeof: ', result.activityType)
        }
        else {
          console.log('shared');

        }
      } else if (result.action === Share.dismissedAction) {
        console.log('dismissed');

      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <ScreenContainer px={0} py={0}>

      <ScrollView
        contentContainerStyle={{
          paddingBottom: 24,
        }}
        showsVerticalScrollIndicator={false}
      >
        {
          content.contents_type === 'video' && <ModuleVideoPlayer videoId={content.id} />
        }
        {
          content.contents_type === 'article' ? (
            <HStack px={5} alignItems='center' >
              <Pressable onPress={() => goBack()} pr={4}>
                <GoBackSvg fill="#fff" />
              </Pressable>
              <Text fontFamily="heading" fontSize="2xl" color="white" lineBreakMode="middle">
                Aula {videoNumber + 1}: {content.contents_name}
              </Text>
            </HStack>

          ) :
            (
              <Text px={5} mt={8} fontFamily="heading" fontSize="2xl" color="white" lineBreakMode="middle">
                Aula {videoNumber + 1}: {content.contents_name}
              </Text>
            )
        }
        {
          content.contents_type === 'article' && (
            <>
              {articleWithBreakLine?.map((linha, index) => (
                <Text px={5} key={index} color="white" my={2}>{linha}</Text>
              ))}
            </>
          )

        }
        <HStack px={5} mt={10} alignItems="center" justifyContent="center">
          <ModuleVideoButton icon="heart" />
          <ModuleVideoButton icon="download" />
          <ModuleVideoButton icon="share-2" onPress={onShare} />
        </HStack>
        <Divider my={7} />
        <Box px={5}>
          <Input

            bgColor="gray.500" px={3} rounded="xl" shadow={9}
            borderColor='transparent'
            placeholder="Adicione um comentário..."
          />
        </Box>
        <Comments comments={[
          {
            comment: 'Aula foi muito boa, a qualidade da edição é maravilhosas e o profesor tem um domínio sobre o assunto o que torna tudo melhor.',
            likes: 2,
            stars: [0, 1, 2],
            userId: '21dasdacdascas',
            username: 'Halisson Lima'

          }
        ]} />
      </ScrollView>


    </ScreenContainer>
  );
}
