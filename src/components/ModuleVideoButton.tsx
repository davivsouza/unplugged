import { Pressable, IPressableProps, useTheme } from "native-base";
import { Feather } from "@expo/vector-icons";
type Props = IPressableProps & {
  icon: keyof typeof Feather.glyphMap;
};
export function ModuleVideoButton({ icon, ...rest }: Props) {
  const { colors } = useTheme();
  return (
    <Pressable
      w={12}
      h={12}
      mr={5}
      alignItems="center"
      justifyContent="center"
      rounded="full"
      borderWidth={1}
      borderColor="white"
      {...rest}
    >
      <Feather name={icon} size={20} color={colors.white}  />
    </Pressable>
  );
}
