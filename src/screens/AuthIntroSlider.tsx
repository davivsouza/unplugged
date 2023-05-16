import {
  Heading,
  Image,
  PresenceTransition,
  Text,
  VStack,
  useTheme,
} from "native-base";
import Carousel from "react-native-app-intro-slider";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRouteProps } from "@routes/auth.routes";
import { ChangeScreenButton } from "@components/ChangeScreenButton";
import {slides} from '@utils/slides'

export function AuthIntroSlider() {
  const { colors } = useTheme();
  const navigation = useNavigation<AuthNavigatorRouteProps>();

  function handleGoBack() {
    navigation.goBack();
  }

  function handleGoToSignUp() {
    navigation.navigate("signUp");
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
              onPress={handleGoToSignUp}
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
