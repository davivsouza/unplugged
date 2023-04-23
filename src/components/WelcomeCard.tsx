import { Heading, Text, VStack } from "native-base";
import NewUserSvg from "@assets/new_user.svg";
import UserSvg from "@assets/user.svg";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  hasAccount?: boolean;
  label: string;
  description: string;
};
export function WelcomeCard({
  hasAccount,
  label,
  description,
  ...rest
}: Props) {
  return (
    <VStack mb={12} w="full" rounded="xl" bg="gray.50" px={4} py={4}>
      <TouchableOpacity {...rest}>
        {hasAccount ? <UserSvg /> : <NewUserSvg />}
        <VStack my={4}>
          <Heading fontFamily="heading" fontSize="lg">
            {label}
          </Heading>
          <Text fontFamily="body" fontSize="sm" color="gray.400">
            {description}
          </Text>
        </VStack>
      </TouchableOpacity>
    </VStack>
  );
}
