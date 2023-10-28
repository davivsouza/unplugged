import { Box, VStack, Slider, Text, Image, HStack, Pressable, PresenceTransition, useTheme } from "native-base";
import { MaterialIcons, AntDesign, Entypo, Ionicons } from '@expo/vector-icons'
import { useCallback, useEffect, useState } from 'react'
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { AudioPlayerButton } from "@components/AudioPlayerButton";
import { ScreenContainer } from "@components/ScreenContainer";
import { BackHandler } from 'react-native';
import { formatTime } from "@utils/formatTime";
import { Audio } from 'expo-av'
import DotMenuSvg from '@assets/binauralsounds/dotmenu-icon.svg'
import AudioBanner from '@assets/binauralsounds/beat-bg-template.png'
import GoBackSvg from "@assets/goback.svg";
import { BinauralDTO } from "../../../dtos/BinauralCategoryDTO";
import { Loading } from "@components/Loading";
import { useAuth } from "@hooks/useAuth";
import { api } from "../../../services/api";


type RouteParams = { binaural: BinauralDTO, playlistId: number }

export function BinauralSound() {

  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState<number | undefined>();
  const [position, setPosition] = useState<number | null>(null);
  const { goBack } = useNavigation<AppNavigatorRoutesProps>()
  const [isLoading, setIsLoading] = useState(false)
  const [audioUrl, setAudioUrl] = useState<string>('')
  const route = useRoute()

  const { playlistId, binaural } = route.params as RouteParams;
  const { user, favoritesBinauralSounds, getFavoriteBinauralSounds } = useAuth()
  const { colors } = useTheme()
  async function favoritedSound(id: number) {
    if (isFavorited(id)) {
      await api.delete(`binaurals/unfavorite/${user.id}/${binaural.id}`)
      getFavoriteBinauralSounds()
    } else {
      await api.post('binaurals/favorite', {
        userId: user.id,
        binauralId: binaural.id
      })
      getFavoriteBinauralSounds()
    }
  }
  function isFavorited(id: number) {
    return favoritesBinauralSounds.some(sound => sound.binauralId === id)
  }

  async function handleNavigate() {
    if (sound) {
      await sound.stopAsync()
      await sound.unloadAsync()
      setAudioUrl('')
      goBack();
    }
  }

  const playTrack = async () => {
    if (sound) {
      setIsPlaying(true);
      await sound.playAsync();
    }
  };

  const pauseTrack = async () => {
    if (sound) {
      await sound.pauseAsync();
      setIsPlaying(false);
    }
  };

  const onSliderValueChange = async (value: number) => {
    if (sound) {
      await sound.setPositionAsync(value);
    }
    setPosition(value);
  };


  async function loadAudio() {
    try {
      setIsLoading(true)

      const { sound } = await Audio.Sound.createAsync({ uri: audioUrl });
      setSound(sound);
      sound.setOnPlaybackStatusUpdate((status) => {
        if (status.isLoaded) {
          setDuration(status.durationMillis);
          setPosition(status.positionMillis);
          setIsPlaying(status.isPlaying);
          if (status.didJustFinish) {
            sound.setPositionAsync(0)
            sound.pauseAsync()
          }
        }
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false)

    }
  };

  useFocusEffect(
    useCallback(() => {
      if (audioUrl) {
        loadAudio();
      }
      function onBackPress() {
        return true
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      loadAudio();
      return () => {
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
      };
    }, [audioUrl])
  );


  useEffect(() => {
    const idUrl = `${process.env.EXPO_PUBLIC_API_URL}/api/binaurals/${binaural.id}`
    setAudioUrl(idUrl)
    return sound
      ? () => {
        sound.unloadAsync();
      }
      : undefined;
  }, [binaural]);

  return (
    <>
      {isLoading ? <Loading /> : (
        <ScreenContainer space={40}>
          <HStack alignItems="center" justifyContent="center" >
            <Pressable
              py={3}
              pr={8}
              alignItems="center"
              position={'absolute'}
              left={0}
              justifyContent="center"
              onPress={handleNavigate}>
              <GoBackSvg fill="#fff"
              />
            </Pressable>
            <Text color="white" fontSize="2xl" fontFamily="heading" style={{
              elevation: 10
            }}>Sons Binaurais</Text>
          </HStack>
          <Box justifyContent="center" flex={1} alignItems="center" mt={3}>
            <VStack mb={5}>
              <Image source={{ uri: `${process.env.EXPO_PUBLIC_IMAGES_URL}/${binaural.binaural_img}` }} alt="Banner do áudio" w="300" height="300" rounded="xl" mb={4} />
              <HStack alignItems="center" justifyContent="space-between">

                <Text color="white" fontSize="lg" fontFamily="semiBold">
                  {binaural.binaural_name}
                </Text>
                <Pressable onPress={() => favoritedSound(binaural.id)}>
                  {
                    isFavorited(binaural.id)
                      ? (
                        <PresenceTransition
                          visible={isFavorited(binaural.id)}
                          initial={{
                            opacity: 0.5,
                            scale: 0
                          }}
                          animate={{
                            opacity: 1,
                            scale: 1,
                            transition: {
                              duration: 220
                            }
                          }}
                        >
                          <AntDesign name={'heart'} size={30} color={colors.red[500]} />
                        </PresenceTransition>)
                      : <AntDesign name={'hearto'} size={30} color={colors.gray[300]} />
                  }

                </Pressable>
              </HStack>
              <Text color="gray.300" fontFamily="body" fontSize="xs">{binaural.binaral_autor}</Text>


            </VStack>
            <Slider
              rounded="xl"
              w="95%"
              value={position || 0}
              onChange={onSliderValueChange}
              minValue={0}
              maxValue={duration}
              step={1000}
              colorScheme="gray"
              borderColor="red.400"
            >
              <Slider.Track bg="purple.900">
                <Slider.FilledTrack bg={{
                  linearGradient: {
                    colors: ["purple.500", "purple.700"],
                    start: [1, 0],
                    end: [0.3, 1],
                  },
                }} />
              </Slider.Track>
              <Slider.Thumb w={0} bg="transparent" outlineStyle="none" >
                <Box w={3} h={3} rounded="full" bg="purple.500" borderWidth={2} borderColor="white" />
              </Slider.Thumb>
            </Slider>
            <HStack w="95%" justifyContent="space-between" mb={2}>
              <Text color="gray.300" fontSize="xs" fontFamily="body">
                {`${formatTime(Math.floor(position! / 1000))}`}
              </Text>
              <Text color="gray.300" fontSize="xs" fontFamily="body">
                {`${formatTime(Math.floor(duration! / 1000))}`}

              </Text>
            </HStack>

            {isPlaying ? (
              <AudioPlayerButton
                color="white"
                bg="purple.500"
                onPress={pauseTrack}
                shadow={9}
                style={{
                  elevation: 10,
                }} >
                <AntDesign name="pause" size={50} color="white" />
              </AudioPlayerButton>
            ) : (
              <AudioPlayerButton
                color="white"
                bg="purple.500"
                onPress={playTrack}
                pl={2}
                shadow={9}
                style={{
                  elevation: 10,
                }} >
                <Entypo name="controller-play" size={60} color="white" />
              </AudioPlayerButton>
            )}
          </Box>
        </ScreenContainer>)}
    </>


  )
}