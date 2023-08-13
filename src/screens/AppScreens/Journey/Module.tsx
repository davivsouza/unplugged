import {
  VStack,
  Text,
  HStack,
  Divider,
  Progress,
  Box,
  Pressable,
} from "native-base";

import { useNavigation, useRoute } from "@react-navigation/native";
import { Module as ModuleDTO } from "../../../@types/module";

import { ModuleDetails } from "@components/ModuleDetails";
import { ScreenContainer } from "@components/ScreenContainer";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import VideosSvg from "@assets/journey/videos-icon.svg";
import GoBackSvg from "@assets/goback.svg";

type RouteParams = {
  module: ModuleDTO;
};

export function Module() {
  const route = useRoute();
  const { navigate } = useNavigation<AppNavigatorRoutesProps>()

  function handleNavigate() {
    navigate('journey')
  }
  const { module } = route.params as RouteParams;
  return (
    <ScreenContainer>
      <HStack space={2}>
        <Pressable
          pr={3}
          py={3}
          onPress={handleNavigate}
          mb={8}
        >
          <GoBackSvg fill="#fff" />
        </Pressable>
        <Text fontFamily="body" color="white" fontSize="3xl">
          Módulo {module.number}: {module.name}
        </Text>
      </HStack>

      <HStack mt={3} alignItems="center">
        <VideosSvg />
        <Text color="gray.50" fontFamily="body" fontSize="xs">
          {module.completedVideos}/{module.videosLength}
        </Text>
      </HStack>
      <HStack alignItems="center">
        <Box flex={1} alignSelf="flex-start" mt={2}>
          <Progress
            bg="purple.900"
            _filledTrack={{
              bg: {
                linearGradient: {
                  colors: ["purple.500", "purple.700"],
                  start: [1, 1],
                  end: [0.4, 1],
                },
              },
            }}
            value={75}
          />
        </Box>
        <Text color="white" fontFamily="body" fontSize="xs" ml={5}>
          75%
        </Text>
      </HStack>
      <Divider my={7} />
      <ModuleDetails
        module={module}
      />
    </ScreenContainer>
  );
}
