import {
  Heading,
  Image,
  PresenceTransition,
  Pressable,
  Text,
  VStack,
  useTheme,
} from "native-base";
import Carousel from "react-native-app-intro-slider";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRouteProps } from "@routes/auth.routes";
import { ChangeScreenButton } from "@components/ChangeScreenButton";

const slides = [
  {
    key: "1",
    title: "Bem vindo ao Unplugged",
    text: "O Unplugged é um aplicativo desenvolvido com base em métodos científicos para ajudar você a substituir vícios por bons hábitos de uma maneira simples e descomplicada.",
    image: require("@assets/slider1.png"),
  },
  {
    key: "2",
    title: "Suporte Exclusivo",
    text: "O Unplugged possui várias ferramentas que vão te dar suporte durante a jornada, o aplicativo disponibiliza uma comunidade, conteúdos informativos, métodos e assistência.",
    image: require("@assets/slider2.png"),
  },
  {
    key: "3",
    title: "Qual é a sua montanha?",
    text: "O Unplugged foi projetado para se adaptar as suas dificuldades e objetivos, porém antes é necessário que você responda um rápido questionário.",
    image: require("@assets/slider3.png"),
  },
];
export function AppIntroSlider() {
  const { colors } = useTheme();
  const navigation = useNavigation<AuthNavigatorRouteProps>();

  function handleGoBack() {
    navigation.goBack();
  }

  function handleGoToQuestionnaire() {
    navigation.navigate("questionnaire");
  }
  return (
    <VStack flex={1}>
      <ChangeScreenButton onPress={handleGoBack} />
      <Carousel
        data={slides}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <VStack alignItems="center" mt={12}>
            <Image
              source={item.image}
              alt={item.title}
              resizeMode="cover"
              mb={6}
            />
            <Heading fontSize="2xl" fontFamily="heading" mb={2}>
              {item.title}
            </Heading>
            <Text fontFamily="body" fontSize="sm" textAlign="center">
              {item.text}
            </Text>
          </VStack>
        )}
        contentContainerStyle={{
          position: "relative",
        }}
        activeDotStyle={{
          backgroundColor: colors.purple[500],
        }}
        showSkipButton
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
              onPress={handleGoToQuestionnaire}
              isForNextPage
              position="absolute"
              top={50}
              right={-10}
            />
          </PresenceTransition>
        )}
      />
    </VStack>
  );
}
