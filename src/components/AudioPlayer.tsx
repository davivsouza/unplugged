import { Box, VStack, Slider, Button } from "native-base";
import TrackPlayer, { useProgress, AppKilledPlaybackBehavior, Capability } from 'react-native-track-player'
import { useEffect, useState } from 'react'
type Props = {
  data: {
    id: string,
    url: string
    title: string
    author: string
  }
}

export function AudioPlayer() {
  const { position, duration } = useProgress()
  const [sliderValue, setSliderValue] = useState(0)
  async function setupAudioPlayer() {

    try {
      await TrackPlayer.updateOptions({
        android: {
          appKilledPlaybackBehavior: AppKilledPlaybackBehavior.PausePlayback
        },
        capabilities: [
          Capability.Play,
          Capability.Pause,
          Capability.SkipToNext,
          Capability.SkipToPrevious
        ],
      })
      await TrackPlayer.setupPlayer()
      await TrackPlayer.add({
        url: '',
        title: 'Sexo',
        artist: 'Fernando',
        genre: 'Rock'
      })

    } catch (error) {
      console.log(error)
    }
  }




  async function playTrack() {
    await TrackPlayer.play()
  }

  async function pauseTrack() {
    await TrackPlayer.pause()
  }

  function onSliderValueChange(value: number) {
    const newPosition = value * duration
    TrackPlayer.seekTo(newPosition)
    setSliderValue(value)
  }

  useEffect(() => {
    setupAudioPlayer()
  }, [])

  useEffect(() => {
    if (duration && position) {
      setSliderValue(position / duration)

    }
  }, [duration, position])

  return (
    <Box>
      <VStack>
        <Slider
          value={sliderValue}
          onChange={onSliderValueChange}
          colorScheme="purple.300"
          minValue={0}
          maxValue={100}
          step={0.1}
        >
          <Slider.Track>
            <Slider.FilledTrack />
          </Slider.Track>
          <Slider.Thumb />
        </Slider>
        <Button onPress={playTrack}>Play</Button>
        <Button onPress={pauseTrack}>Pause</Button>
      </VStack>
    </Box>

  )
}