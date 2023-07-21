import { useFocusEffect } from "@react-navigation/native";
import { changeColorBySecondsTime } from "@utils/changeColorBySecondsTime";
import { formatTime, formatTimeHours } from "@utils/formatTime";
import { Box, HStack, Text, VStack } from "native-base";
import { ColorType } from "native-base/lib/typescript/components/types";
import { useCallback, useEffect, useState } from "react";
import { SvgProps } from "react-native-svg";

type Props = {
  appName: string
  SvgIcon: React.FC<SvgProps>
  seconds: number
}

export function WellbeingApp({ appName, seconds, SvgIcon }: Props) {
  const [appTagColor, setAppTagColor] = useState<ColorType>()
  

  useFocusEffect(useCallback(() => {
    const color = changeColorBySecondsTime(seconds)
    setAppTagColor(color)
  }, []))
  return (
    <HStack alignItems="center" justifyContent="space-between" >
      <HStack
        alignItems="center"
        space={2}
      >
        <SvgIcon width={50} height={50} style={{
          alignItems: "center",

        }} />
        <Text
          color="white"
          fontFamily="body"
          fontSize="md"
        >{appName}</Text>
      </HStack>
      <VStack
        alignItems="flex-end"
        space={1}
      >
        <Box width={5} height={1} bg={appTagColor} rounded="full" />
        <Text
          color="white"
          fontFamily="body"
          fontSize="sm"
        >{formatTimeHours(seconds)}</Text>
      </VStack>
    </HStack>
  )
}