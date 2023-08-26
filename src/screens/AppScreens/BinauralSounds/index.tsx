import { BinauralContent } from "@components/BinauralContent";
import { ScreenContainer } from "@components/ScreenContainer";
import { AppNavigatorRoutesProps } from '@routes/app.routes'
import { useCallback, useState } from 'react'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
export function BinauralSounds() {
  const [showRealApp, setShowRealApp] = useState(false)
  const { navigate } = useNavigation<AppNavigatorRoutesProps>()

  useFocusEffect(useCallback(() => {
    navigate('binauralSoundsIntroSlider')
    setShowRealApp(true)
    if (showRealApp) {
      navigate('binaural')
    }
  }, [showRealApp]))


  return (
    <ScreenContainer>
      <BinauralContent />
    </ScreenContainer>
  );
}
