import GoBackSvg from "@assets/goback.svg";
import NextScreenSvg from "@assets/arrow-right.svg";
import { Box, Pressable, IPressableProps, useColorMode } from "native-base";

type Props = IPressableProps & {
  isForNextPage?: boolean;
};

export function ChangeScreenButton({ isForNextPage, ...rest }: Props) {
  const { colorMode } = useColorMode();
  return (
    <Pressable {...rest}>
      <Box
        bg={colorMode === "light" ? "gray.50" : "gray.700"}
        w={12}
        h={12}
        rounded="full"
        alignItems="center"
        justifyContent="center"
        display="flex"
        pr={isForNextPage ? 0 : 1}
        pl={isForNextPage ? 1 : 0}
      >
        {isForNextPage ? (
          <NextScreenSvg fill={colorMode === "light" ? "#000" : "#fff"}/>
        ) : (
          <GoBackSvg fill={colorMode === "light" ? "#000" : "#fff"} />
        )}
      </Box>
    </Pressable>
  );
}
