import { Pressable, Text } from "native-base";

type Props = {
  onSelectTimeDuration: (timeDuration: string) => void
  selectedTimeDuration: string
  timeDuration: string
}

export function MeditationTimeDurationCategory({ onSelectTimeDuration, selectedTimeDuration = 'Tudo', timeDuration }: Props) {
  return (
    <Pressable
      px={2}
      h={12}
      w={100}
      mr={6}
      rounded="full"
      borderWidth={2}
      bg={timeDuration === selectedTimeDuration ? 'white' : "transparent"}
      borderColor={timeDuration === selectedTimeDuration ? 'white' : "gray.100"}
      justifyContent="center"
      alignItems="center"
      onPress={() => onSelectTimeDuration(timeDuration)}
    >
      <Text color={timeDuration === selectedTimeDuration ? 'black' : "gray.100"} w="full" textAlign="center" fontFamily="body" fontSize="md">
        {timeDuration}
      </Text>
    </Pressable>
  )
}