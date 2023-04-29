import { Input as NativeBaseInput, IInputProps } from "native-base";

type Props = IInputProps & {
  underline?: boolean;
};
export function Input({ underline = false, ...rest }: Props) {
  return (
    <NativeBaseInput
      mb={4}
      h={12}
      borderWidth={underline ? 0: 3}
      borderBottomWidth={3}
      rounded={underline? 'none' :"lg"}
      fontSize="md"
      fontFamily="body"
      placeholderTextColor="gray.400"
      _focus={{
        bg: "transparent",
        borderWidth: underline ? 0 : 3,
        borderColor: underline ? "black" : 'purple.500',
      }}
      {...rest}
    />
  );
}
