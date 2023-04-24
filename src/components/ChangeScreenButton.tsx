import GoBackSvg from "@assets/goback.svg";
import NextScreenSvg from "@assets/arrow-right.svg";
import { Box, Pressable, IPressableProps} from "native-base";

type Props = IPressableProps & {
  isForNextPage?: boolean;
};

export function ChangeScreenButton({ isForNextPage, ...rest }: Props) {
  return (
    <Pressable {...rest}>
      <Box
        bg="gray.50"
        w={12}
        h={12}
        rounded="full"
        alignItems="center"
        justifyContent="center"
        display="flex"
        pr={ isForNextPage ? 0 : 1}
        pl={ isForNextPage ? 1 : 0}
      >
        {isForNextPage ? <NextScreenSvg /> : <GoBackSvg />}
      </Box>
    </Pressable>
  );
}
