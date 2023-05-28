import { Box, HStack, Heading, Text, VStack } from "native-base";

import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { Module } from "../@types/module";

import VideosSvg from "@assets/journey/videos-icon.svg";
import ShowModulesDataSvg from "@assets/journey/more-icon.svg";

type Props = {
  module: Module;
};

export function Modules({
  module: { moduleName, completedVideos, videosLength, moduleNumber },
}: Props) {
  const { navigate } = useNavigation<AppNavigatorRoutesProps>();

  return (
    <TouchableOpacity
      onPress={() =>
        navigate("module", {
          module: {
            moduleName,
            moduleNumber,
            completedVideos,
            videosLength,
          },
        })
      }
    >
      <VStack bg="gray.700" py={18} px={22} rounded="xl" mb={5}>
        <HStack alignItems="center" justifyContent="space-between">
          <VStack>
            <HStack alignItems="center">
              <Heading fontFamily="heading" color="white" fontSize="md">
                Módulo {moduleNumber}: {moduleName}
              </Heading>
            </HStack>
            <HStack mt={3} alignItems="center">
              <VideosSvg />
              <Text color="gray.50" fontFamily="body" fontSize="xs">
                {completedVideos}/{videosLength}
              </Text>
            </HStack>
          </VStack>
          <ShowModulesDataSvg />
        </HStack>
      </VStack>
    </TouchableOpacity>
  );
}
