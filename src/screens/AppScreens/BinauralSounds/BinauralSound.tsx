import { Box, VStack, Slider, Text, Image, HStack, Pressable } from "native-base";
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


type RouteParams = { binaural: BinauralDTO, playlistId: number }

export function BinauralSound() {

  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState<number | undefined>();
  const [position, setPosition] = useState<number | null>(null);
  const { navigate } = useNavigation<AppNavigatorRoutesProps>()
  const route = useRoute()

  const { playlistId, binaural } = route.params as RouteParams;

  async function handleNavigate() {
    if (sound) {
      await sound.stopAsync()
      await sound.unloadAsync()
      navigate('playlist', { playlistId });
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

  useFocusEffect(
    useCallback(() => {
      function onBackPress() {
        return true
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      loadAudio();
      return () => {
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
      };
    }, [])
  );

  async function handleSkipForward() {
    if (sound && position) {
      const newPosition = position + 15000
      try {
        await sound.setPositionAsync(newPosition)
        setPosition(newPosition)
      } catch (error) {
        console.log(error);
      }
    }
  }
  async function handleRewind() {
    if (sound && position) {
      const newPosition = position - 15000
      try {
        await sound.setPositionAsync(newPosition)
        setPosition(newPosition)
      } catch (error) {
        console.log(error);
      }
    }
  }
  async function loadAudio() {
    try {
      const { sound } = await Audio.Sound.createAsync(require('@assets/audios/meditation.mp3'));
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
    }
  };
  useEffect(() => {
    return sound
      ? () => {
        sound.unloadAsync();
      }
      : undefined;
  }, []);

  return (
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
          <Image source={{ uri: binaural.binaural_img }} alt="Banner do áudio" w="300" height="300" rounded="xl" mb={4} />
          <Text color="white" fontSize="lg" fontFamily="semiBold">
            {binaural.binaural_name}
          </Text>
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
        <HStack w="95%" justifyContent="space-between" mb={8}>
          <Text color="gray.300" fontSize="xs" fontFamily="body">
            {`${formatTime(Math.floor(position! / 1000))}`}
          </Text>
          <Text color="gray.300" fontSize="xs" fontFamily="body">
            {`${formatTime(Math.floor(duration! / 1000))}`}

          </Text>
        </HStack>
        <HStack alignItems="center" space={12}>
          <Pressable onPress={handleRewind}>
            <Ionicons name="heart-outline" size={40} color="white" />
          </Pressable>

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
          <Pressable onPress={handleSkipForward}>
            <MaterialIcons name="timer" size={40} color="white" />
          </Pressable>
        </HStack>
      </Box>
    </ScreenContainer>

  )
}