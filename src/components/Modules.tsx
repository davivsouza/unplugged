import { Box, HStack, Heading, Text, VStack } from "native-base";

import VideosSvg from "@assets/journey/videos-icon.svg";
import ShowModulesDataSvg from '@assets/journey/more-icon.svg'


type Props = {
  module: {
    moduleNumber: number;
    moduleName: string;
    videosLength: number;
    completedVideos: number;
  };
};

export function Modules({
  module: { moduleName, completedVideos, videosLength, moduleNumber },
}: Props) {
  return (
    <Box shadow={8} mb={5}>
      <VStack bg="gray.700" py={18} px={22} rounded="xl">
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
    </Box>
  );
}
