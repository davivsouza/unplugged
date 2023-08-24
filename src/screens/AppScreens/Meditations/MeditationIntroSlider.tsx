import { Image, PresenceTransition, Text, VStack, useTheme, Box} from "native-base";
import Carousel from 'react-native-app-intro-slider'
import {meditationScreenSlides} from '@utils/slides'
import { ScreenContainer } from "@components/ScreenContainer";
import { ChangeScreenButton } from "@components/ChangeScreenButton";
export function MeditationIntroSlider(){
    const {colors} = useTheme()
    return (
        <ScreenContainer>
            <Carousel
        data={meditationScreenSlides}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
         item.title && item.text ? (
            <VStack alignItems="center" mt={12}>
            <Image
              source={item.image}
              alt={item.title}
              resizeMode="cover"
              mb={6}
            />
            <Text fontSize="2xl" fontFamily="heading" mb={2}>
              {item.title}
            </Text>
            <Text fontFamily="body" fontSize="sm" textAlign="center">
              {item.text}
            </Text>
          </VStack>
         ): (
            <VStack  mt={12}>
             <Box mb={20}>
              <Text fontSize="3xl" fontFamily="heading" color="white">
                Bem vindo ao
              </Text>
              <Text fontSize="xl" fontFamily="body" mb={2} color="white">
                Centro de meditações
              </Text>
              <Text fontSize="md" fontFamily="body" mb={2} color="white">
                Vamos começar
              </Text>
             </Box>


            <Image
              source={item.image}
              alt="Imagem do slide 1 de introdução"
              resizeMode="contain"
              mb={6}
            />
          </VStack>
         )
        )}
        contentContainerStyle={{
          position: "relative",
        }}
        dotStyle={{
            backgroundColor: '#fff',
        }}
        activeDotStyle={{
          backgroundColor: colors.purple[500],
        }}
        renderNextButton={() => (
            <ChangeScreenButton
                onPress={() => null}
                isForNextPage
                position="absolute"
                background={"purple"}
                top={50}
                right={-10}
            />
        )}
        renderDoneButton={() => (
            <PresenceTransition
              visible
              initial={{
                opacity: 0,
                translateX: 90,
              }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 300,
                },
              }}
            >
              <ChangeScreenButton
                onPress={() => null}
                isForNextPage
                position="absolute"
                background={'purple'}
                top={50}
                right={-10}
              />
            </PresenceTransition>
          )}
        />
        </ScreenContainer>
    )
}