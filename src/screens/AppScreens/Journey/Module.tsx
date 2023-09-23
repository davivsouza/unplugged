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
import { JourneyHeader } from "@components/JourneyHeader";

type RouteParams = ModuleDTO;

export function Module() {
  const [selectedInfo, setSelectedInfo] = useState<"about" | "downloaded" | "content">("about");

  const route = useRoute();
  const { goBack } = useNavigation<AppNavigatorRoutesProps>()
  const tempProgress = 0

  function handleNavigate() {
    goBack()
    setSelectedInfo('about')
  }
  const module = route.params as RouteParams;



  return (
    <ScreenContainer>

      <Box ml={128}>
        <JourneyHeader />
      </Box>
      <Pressable
        pr={3}
        py={4}
        onPress={handleNavigate}
        position={'absolute'}
        top={20}
        left={15}
      >
        <GoBackSvg fill="#fff" />
      </Pressable>
      <HStack space={2} alignItems='center' position={'relative'}>
        <Text fontFamily="body" color="white" fontSize="2xl">
          Módulo {module.id}: {module.module_name}
        </Text>
      </HStack>

      <HStack mt={3} alignItems="center">
        <VideosSvg />
        <Text color="gray.50" fontFamily="body" fontSize="xs">
          0/{module.content_count}
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
        module_description={module.module_description}
        contents={module.contents}
        selectedInfo={selectedInfo}
        setSelectedInfo={setSelectedInfo}
      />
    </ScreenContainer>
  );
}
