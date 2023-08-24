import { MeditationCategory } from '@components/MeditationCategory'
import { VStack, Text, HStack, Image, FlatList, ScrollView} from 'native-base'
import { useState } from 'react'
import { meditationsCategories, meditationTimeDurations } from '../../../utils/meditationsCategories'
import { MeditationTimeDurationCategory } from '@components/MeditationTimeDurationCategory'
import { MeditationCard } from '@components/MeditationCard'
import { ScreenContainer } from '@components/ScreenContainer'

export function Meditations() {
  const [selectedCategory, setSelectedCategory] = useState('Sono')
  const [selectedTimeDuration, setSelectedTimeDuration] = useState('Tudo')


  function handleSelectedCategory(category: string) {
    setSelectedCategory(category)
  }
  function handleSelectedTimeDuration(timeDuration: string) {
    setSelectedTimeDuration(timeDuration)
  }


  return (
    <ScreenContainer>
      <HStack alignItems="center" justifyContent="space-between">
        <VStack>

          <Text
            fontFamily="body"
            fontWeight="normal"
            color="white"
            lineBreakMode="clip"
            fontSize="md"
          >
            Olá,
          </Text>
          <Text fontFamily="semiBold" color="white" fontSize="2xl">
            Musashi
          </Text>
        </VStack>
        <Image
          w={16}
          h={16}
          rounded="full"
          source={{
            uri: "https://e0.pxfuel.com/wallpapers/675/779/desktop-wallpaper-funny-monkeys-pistols-necktie-suit-thumbnail.jpg",
          }}
          alt="Foto de perfil do criador do vídeo"
        />
      </HStack>

      <VStack>
        <FlatList
          height={170}
          data={meditationsCategories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <MeditationCategory
              category={item}
              selectedCategory={selectedCategory}
              onSelectCategory={handleSelectedCategory}
            />
          )}
        />
        <FlatList
          data={meditationTimeDurations}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <MeditationTimeDurationCategory
              timeDuration={item}
              onSelectTimeDuration={handleSelectedTimeDuration}
              selectedTimeDuration={selectedTimeDuration}
            />
          )}
        />
      </VStack>
      <ScrollView mt={12} showsVerticalScrollIndicator={false}>
        <MeditationCard title="Relaxamento profundo" artist="Rebeca Cagni" durationMinutes={20} />
        <MeditationCard title="Mindfulness" artist="Halisson Aparecido" durationMinutes={10} />
      </ScrollView>
    </ScreenContainer>
  )
}