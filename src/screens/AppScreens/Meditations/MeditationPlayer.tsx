import { AudioPlayer } from '@components/AudioPlayer'
import {VStack, Text, Slider} from 'native-base'
type Props ={
  data: {
    id: string
    audioPath: string

  }
}
export function MedidationPlayer(){
  return (
    <VStack>
     <AudioPlayer/>
    </VStack>
  )
}