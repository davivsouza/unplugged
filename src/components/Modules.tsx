import { Box, HStack, Heading, Text, VStack } from "native-base";

import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import VideosSvg from "@assets/journey/videos-icon.svg";
import ShowModulesDataSvg from "@assets/journey/more-icon.svg";
import { ModuleDTO } from "../dtos/ModuleDTO";

type Props = {
  module: ModuleDTO;
};

export function Modules({
  module: { content_count, id, module_description, module_name },
}: Props) {
  const { navigate } = useNavigation<AppNavigatorRoutesProps>();

  return (
    <TouchableOpacity
      onPress={() =>
        navigate("module", {
          module: {
            content_count, id, module_description, module_name,
          },
        })
      }
    >
      <VStack bg="gray.700" py={3} px={4} rounded="xl" mb={5} shadow={3} flex={1}>
        <HStack alignItems="center" justifyContent="space-between">
          <VStack>
            <HStack alignItems="center">
              <Heading fontFamily="heading" color="white" fontSize="md">
                Módulo {id}: {module_name}
              </Heading>
            </HStack>
            <HStack alignItems="center">
              <VideosSvg />
              <Text color="gray.50" fontFamily="body" fontSize="xs">
                0/{content_count}
              </Text>
            </HStack>
          </VStack>
          <ShowModulesDataSvg />
        </HStack>
      </VStack>
    </TouchableOpacity>
  );
}
