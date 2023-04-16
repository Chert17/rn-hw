import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AuthProvider } from '@/context/AuthContext';
import Navigation from '@/navigation/Navigation';

SplashScreen.preventAutoHideAsync();
SplashScreen.hideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto: require('./src/assets/fonts/Roboto-Regular.ttf'),
    RobotoM: require('./src/assets/fonts/Roboto-Medium.ttf'),
    RobotoB: require('./src/assets/fonts/Roboto-Black.ttf'),
  });

  if (!fontsLoaded) return null;

  // const [isAuth, setIsAuth] = useState(false);

  return (
    <View style={styles.container}>
      <SafeAreaProvider>
        <AuthProvider>
          <Navigation />
        </AuthProvider>
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
