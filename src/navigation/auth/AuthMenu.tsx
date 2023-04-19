import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FC } from 'react';

import LoginScreen from '@/screens/auth/LoginScreen';
import RegisterScreen from '@/screens/auth/RegisterScreen';

import { IAuthStack } from './auth.nav.types';

const Stack = createNativeStackNavigator<IAuthStack>();

const AuthMenu: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName='Login'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Register' component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthMenu;
