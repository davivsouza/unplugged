import { MeditationAudioPlayer } from '@components/MeditationAudioPlayer'
import { ImageBackground } from 'react-native'
import AudioBanner from '@assets/meditations/meditation-card-bg.jpg'
import { useRoute } from '@react-navigation/native'

type RouteParams = {
  title: string
  artist: string
}

export function MeditationPlayer() {
  const route = useRoute()

  const {artist,title} = route.params as RouteParams

  return (
    <ImageBackground source={AudioBanner} blurRadius={7} resizeMode='cover' style={{
      flex: 1,
    }}>
     
      <MeditationAudioPlayer title={title} artist={artist}/>

    </ImageBackground>
  )
}