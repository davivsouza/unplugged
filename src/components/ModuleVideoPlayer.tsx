import { Text, VStack } from "native-base";
import { Video, ResizeMode } from 'expo-av'
import { useRef, useState } from "react";
import { Button } from 'react-native'
type Props = {
  videoId: number
}

export function ModuleVideoPlayer({ videoId }: Props) {
  const videoRef = useRef<any>(null);

  const [status, setStatus] = useState({} as any);
  return (
    <VStack >
      <Video
        ref={videoRef}
        style={{
          alignSelf: 'center',
          width: 420,
          height: 220,
        }}
        source={{
          uri: `http://192.168.1.8:3333/api/contents/${videoId}`,
        }}
        useNativeControls
        resizeMode={ResizeMode.COVER}
        isLooping
      />

    </VStack>
  )
}