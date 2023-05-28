import { VStack, Text, HStack, Divider, Progress, Box } from "native-base";

import { useRoute } from "@react-navigation/native";
import { Module as ModuleDTO } from "../../../@types/module";

import VideosSvg from "@assets/journey/videos-icon.svg";

type RouteParams = {
  module: ModuleDTO;
};

export function Module() {
  const route = useRoute();

  const {
    module: { moduleName, moduleNumber, completedVideos, videosLength },
  } = route.params as RouteParams;
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
      <Text fontFamily="body" color="white" fontSize="3xl">
        Módulo {moduleNumber}: {moduleName}
      </Text>

      <HStack mt={3} alignItems="center">
        <VideosSvg />
        <Text color="gray.50" fontFamily="body" fontSize="xs">
          {completedVideos}/{videosLength}
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
      
    </VStack>
  );
}
