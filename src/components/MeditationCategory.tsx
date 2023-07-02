import { Box, Pressable, Text, useTheme } from "native-base";
import SleepIconSvg from '@assets/meditations/Sleep-icon.svg'

type Props = {
  onSelectCategory: (category: string) => void
  selectedCategory: string
  category: string
}

export function MeditationCategory({ onSelectCategory, selectedCategory = 'Sono', category}: Props) {
  const { colors } = useTheme()
  return (

    <Pressable w={16} h={16} onPress={() => onSelectCategory(category)} alignItems="center" mt={12} mr={6} >
      <Box
        w={16} 
        h={16}
        bg={category === selectedCategory ? 'white' : 'transparent'}
        rounded="full"
        borderWidth={1}
        borderColor={category === selectedCategory ? 'black' : 'gray.100'}
        justifyContent="center"
        alignItems="center"
        pr={2}
      >
        <SleepIconSvg
          width={60}
          height={60}
          strokeWidth={5}
          fill={category === selectedCategory ? colors.gray[800] : "transparent"}
          stroke={category === selectedCategory ? colors.gray[800] : colors.gray[100]}
          style={{
            alignSelf: 'center',
          }}
        />
      </Box>
      <Text mt={2} color={category === selectedCategory ? 'white' : 'gray.100'}>{category}</Text>
    </Pressable>
  )
}