import { Home } from '@screens/Home';
import { StatusBar } from 'expo-status-bar';
import {NativeBaseProvider} from 'native-base'

export default function App() {
  return (
    <NativeBaseProvider>
      <Home/>
      <StatusBar style="auto" />
    </NativeBaseProvider>
   
  );
}


