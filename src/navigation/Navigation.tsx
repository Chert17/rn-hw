import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FC, useContext } from 'react';

import { AuthContext } from '@/context/AuthContext';
import { AuthScreen, CommentsScreen, MapScreen } from '@/screens';

import BottomMenu from './BottomMenu';
import { RootStackParamList } from './navigation-types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation: FC = () => {
  const { isAuth } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isAuth ? (
          <Stack.Screen name='Auth' component={AuthScreen} />
        ) : (
          <>
            <Stack.Screen name='Root' component={BottomMenu} />
            <Stack.Screen name='Comments' component={CommentsScreen} />
            <Stack.Screen name='Map' component={MapScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
