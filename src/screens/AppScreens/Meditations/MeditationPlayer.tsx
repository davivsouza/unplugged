import { AudioPlayer } from '@components/AudioPlayer'
import { ImageBackground } from 'react-native'
import AudioBanner from '@assets/meditations/meditation-card-bg.jpg'

type Props = {
  data: {
    id: string
    audioPath: string

  }
}

export function MeditationPlayer() {

  return (
    <ImageBackground source={AudioBanner} blurRadius={7} resizeMode='cover' style={{
      flex: 1,
    }}>
     
      <AudioPlayer />

    </ImageBackground>
  )
}