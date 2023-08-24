import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Supermarket from './src/pages/Supermarket/index';

export default function App() {
  return (
    <View>
    <SafeAreaView/>
    <StatusBar/>
    <Supermarket/>
  </View>
  );
}


