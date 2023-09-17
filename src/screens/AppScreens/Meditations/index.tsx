import { MeditationCategory } from '@components/MeditationCategory'
import { VStack, Text, HStack, Image, FlatList, ScrollView, Center } from 'native-base'
import { useCallback, useEffect, useState } from 'react'
import { meditationsCategories, meditationTimeDurations } from '../../../utils/meditationsCategories'
import { MeditationTimeDurationCategory } from '@components/MeditationTimeDurationCategory'
import { MeditationCard } from '@components/MeditationCard'
import { ScreenContainer } from '@components/ScreenContainer'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { AppNavigatorRoutesProps } from '@routes/app.routes'
import { useAuth } from '@hooks/useAuth'
import { AntDesign } from '@expo/vector-icons';
import { api } from '../../../services/api'
import { MeditationDTO } from '../../../dtos/MeditationDTO'
import { formatTime } from '@utils/formatTime'
export function Meditations() {
  const [selectedCategory, setSelectedCategory] = useState('Sono')
  const [selectedTimeDuration, setSelectedTimeDuration] = useState('Tudo')
  const [meditations, setMeditations] = useState<MeditationDTO[]>([])
  const [showRealApp, setShowRealApp] = useState(false)
  const { navigate } = useNavigation<AppNavigatorRoutesProps>()
  const { user } = useAuth()


  function handleSelectedCategory(category: string) {
    setSelectedCategory(category)
  }
  function handleSelectedTimeDuration(timeDuration: string) {
    setSelectedTimeDuration(timeDuration)
  }

  useFocusEffect(useCallback(() => {
    navigate('meditationIntroSlider')
    setShowRealApp(true)
    if (showRealApp) {
      navigate('meditations')
    }
  }, [showRealApp]))

  async function fetchMeditations() {
    const { data } = await api.get('/meditations/')
    setMeditations(data)
  }
  useEffect(() => {
    fetchMeditations()
  }, [])


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
            {user.name}
          </Text>
        </VStack>
        <AntDesign name="user" size={35} color="white" />
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
      <FlatList
        data={meditations}
        mt={12}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <MeditationCard
            meditation={item}
          />
        )

        }
        ListEmptyComponent={() => (
          <Center>
            <Text color="white" fontSize="lg">Nenhuma meditação postada {':('}</Text>
          </Center>
        )}
      />

    </ScreenContainer>
  )
}