import {  StyleSheet, Text, View, StatusBar  } from 'react-native';
import Supermarket from './src/pages/Supermarket/index';
import { useFonts, Caveat_500Medium } from '@expo-google-fonts/caveat';


export default function App() {
  const[fontes] = useFonts({
    "Caveat" : Caveat_500Medium
  })

  if(!fontes) {
    return null;
  }

  return (
    <View>
    <StatusBar/>
    <Supermarket/>
  </View>
  );
}


