import { VStack, Pressable } from "native-base";
import { Video, ResizeMode } from 'expo-av'
import { useRef, useState } from "react";
import * as ScreenOrientation from 'expo-screen-orientation'
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import GoBackSvg from "@assets/goback.svg";
import { useNavigation } from "@react-navigation/native";

type Props = {
  videoId: number
}

export function ModuleVideoPlayer({ videoId }: Props) {
  const [position, setPosition] = useState(0);
  const videoRef = useRef<any>(null);
  const { navigate } = useNavigation<AppNavigatorRoutesProps>()




  async function handleNavigate() {
    if (videoRef.current) {
      await videoRef.current.stopAsync();
      await videoRef.current.setPositionAsync(0);
      setPosition(0);
      navigate('journey')
    }
  }

  return (
    <VStack >
      <Pressable
        padding={6}
        onPress={handleNavigate}
        top={0}
        left={0}
        zIndex={20}
        style={{ elevation: 10 }}
        position="absolute"
      >
        <GoBackSvg fill="#fff" />
      </Pressable>
      <Video
        positionMillis={position}
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
        resizeMode={ResizeMode.CONTAIN}
        isLooping={false}
        onFullscreenUpdate={async (update) => {
          console.log(update.fullscreenUpdate);

          if (update.fullscreenUpdate <= 1) {
            await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE)
          } else {
            await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT)
          }

        }}
      />

    </VStack>
  )
}  