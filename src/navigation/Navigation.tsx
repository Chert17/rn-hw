import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FC, useContext } from 'react';

import { AuthContext } from '@/context/AuthContext';
import { AuthScreen } from '@/screens';

import BottomMenu from './BottomMenu';
import { RootStackParamList } from './navigation-types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation: FC = () => {
  const { isAuth } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!isAuth ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Auth' component={AuthScreen} />
        </Stack.Navigator>
      ) : (
        <BottomMenu />
      )}
    </NavigationContainer>
  );
};

export default Navigation;
