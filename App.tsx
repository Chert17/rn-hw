import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AuthScreen from '@/screens/AuthScreen';

SplashScreen.preventAutoHideAsync();
SplashScreen.hideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto: require('./src/assets/fonts/Roboto-Regular.ttf'),
    RobotoM: require('./src/assets/fonts/Roboto-Medium.ttf'),
    RobotoB: require('./src/assets/fonts/Roboto-Black.ttf'),
  });

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <SafeAreaProvider>
        <AuthScreen />
      </SafeAreaProvider>
      <StatusBar style='dark' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
