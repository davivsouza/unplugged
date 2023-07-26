import { SvgProps } from "react-native-svg"
import { WellbeingApp } from "./WellbeingApp"
import { Box, HStack, IPressableProps, Pressable } from "native-base"

type Props = IPressableProps & {
  svgIcon: React.FC<SvgProps>
  appName: string
  seconds: number
  selectedApp: string

}


export function HabitsControlTimerAppBox({ appName, seconds, selectedApp, svgIcon, ...rest }: Props) {


  return (
    <Pressable
      {...rest}
    >
      <HStack alignItems="center" mt={4}>
        <Box
          mr={4}
          w={6}
          h={6}
          borderWidth={2}
          borderColor={selectedApp === appName ? "purple.500" : 'white'}
          rounded="full"
          justifyContent="center"
          alignItems="center"
          style={{
            padding: 2
          }}
        >
          <Box
            w={3}
            h={3}
            p={2}
            rounded="full"

            bg={selectedApp === appName ? "purple.500" : 'transparent'} />
        </Box>
        <WellbeingApp appName={appName} SvgIcon={svgIcon} seconds={seconds} />
      </HStack>
    </Pressable>
  )
}