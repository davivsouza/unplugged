import { Box, VStack, Slider, Text, Image, HStack, Pressable, Button } from "native-base";
import { useCallback, useEffect, useState } from 'react'
import { BackHandler } from 'react-native';
import { Audio } from 'expo-av'
import { formatTime } from "@utils/formatTime";
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import DotMenuSvg from '@assets/binauralsounds/dotmenu-icon.svg'
import AudioBanner from '@assets/meditations/meditation-card-bg.jpg'
import GoBackSvg from "@assets/goback.svg";
import { AudioPlayerButton } from "./AudioPlayerButton";

export function AudioPlayer() {

  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);
  const [duration, setDuration] = useState<number | undefined>();
  const [position, setPosition] = useState<number | null>(null);
  const { navigate } = useNavigation<AppNavigatorRoutesProps>()

  async function handleNavigate() {
    if (sound) {
      await sound.stopAsync()
      await sound.unloadAsync()
      navigate('meditations');
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
      await Audio.setAudioModeAsync({ staysActiveInBackground: true });
      const { sound } = await Audio.Sound.createAsync(require('../assets/meditations/audios/meditation.mp3'));
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
      setSound(sound);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    loadAudio();

    return sound
      ? () => {
        console.log('Unloading');

        sound.stopAsync();
        sound.unloadAsync();
      }
      : undefined;
  }, []);

  return (
    <VStack
      flex={1}
      py={90}
      px={5}
      space={40}
    >
      <HStack alignItems="center" justifyContent="space-between" >
        <Pressable onPress={handleNavigate}>
          <GoBackSvg fill="#fff" />
        </Pressable>
        <Text color="white" fontSize="2xl" fontFamily="heading" style={{
          elevation: 10
        }}>Meditação</Text>
        <DotMenuSvg width={25} height={25} fill="#fff" />
      </HStack>
      <Box justifyContent="center" flex={1} alignItems="center" mt={3}>
        <VStack mb={5}>
          <Image source={AudioBanner} alt="Banner do áudio" w="300" height="300" rounded="xl" mb={4} />
          <Text color="white" fontSize="lg" fontFamily="semiBold">
            Relaxamento profundo - {Math.floor((duration! / 1000) / 60)} min
          </Text>
          <Text color="gray.300" fontSize="xs" fontFamily="body">
            Feito por Mônica Lelis
          </Text>
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
          <Slider.Track bg="gray.300">
            <Slider.FilledTrack bg="white" />
          </Slider.Track>
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
            <MaterialCommunityIcons name="rewind-15" size={30} color="white" />
          </Pressable>

          {isPlaying ? (
            <AudioPlayerButton icon="pause" onPress={pauseTrack}/>
          ) : (
            <AudioPlayerButton icon="play" onPress={playTrack}/>
          )}
          <Pressable onPress={handleSkipForward}>
            <MaterialCommunityIcons name="fast-forward-15" size={30} color="white" />
          </Pressable>
        </HStack>
      </Box>
    </VStack>

  )
}