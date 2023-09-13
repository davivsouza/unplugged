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

import { ModuleDetails } from "@components/ModuleDetails";
import { ScreenContainer } from "@components/ScreenContainer";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import VideosSvg from "@assets/journey/videos-icon.svg";
import GoBackSvg from "@assets/goback.svg";
import { ModuleDTO } from "../../../dtos/ModuleDTO";
import { useState } from "react";

type RouteParams = {
  module: ModuleDTO;
};

export function Module() {
  const [selectedInfo, setSelectedInfo] = useState<
    "about" | "downloaded" | "content"
  >("about");
  const route = useRoute();
  const { navigate } = useNavigation<AppNavigatorRoutesProps>()
  const tempProgress = 0
  function handleNavigate() {
    navigate('journey')
    setSelectedInfo('about')
  }
  const { module: { content_count, id, module_description, module_name } } = route.params as RouteParams;



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
          Módulo {id}: {module_name}
        </Text>
      </HStack>

      <HStack mt={3} alignItems="center">
        <VideosSvg />
        <Text color="gray.50" fontFamily="body" fontSize="xs">
          0/{content_count}
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
            value={tempProgress}
          />
        </Box>
        <Text color="white" fontFamily="body" fontSize="xs" ml={5}>
          {tempProgress}%
        </Text>
      </HStack>
      <Divider my={7} />
      <ModuleDetails
        module_description={module_description}
        module_id={id}
        selectedInfo={selectedInfo}
        setSelectedInfo={setSelectedInfo}
      />
    </ScreenContainer>
  );
}
