import { MaterialIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useContext } from 'react';
import { FC } from 'react';
import { TouchableOpacity } from 'react-native';

import { BackBtn } from '@/components/ui';
import { AuthContext } from '@/context/AuthContext';
import { useTypedNavigation } from '@/hooks/useTypedNavigation';
import { RootStackParamList } from '@/navigation/navigation-types';

import CommentsScreen from '../nested-home/CommentsScreen';
import DefaultHomeScreen from '../nested-home/DefaultScreen';
import MapScreen from '../nested-home/MapScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeScreen: FC = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const { goBack } = useTypedNavigation();

  return (
    <Stack.Navigator
      initialRouteName='DefaultHomeScreen'
      screenOptions={{
        headerShown: true,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: '500',
          fontSize: 17,
          color: '#212121',
        },
        headerLeft: () => <BackBtn goBack={goBack} color='#BDBDBD' />,
      }}
    >
      <Stack.Screen
        name='DefaultHomeScreen'
        component={DefaultHomeScreen}
        options={{
          headerTitle: 'Publications',
          headerRight: () => {
            return isAuth ? (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setIsAuth(false)}
              >
                <MaterialIcons
                  name='logout'
                  size={30}
                  color='#BDBDBD'
                  style={{ marginRight: 16 }}
                />
              </TouchableOpacity>
            ) : null;
          },
          headerLeft: () => null,
        }}
      />
      <Stack.Screen name='Comments' component={CommentsScreen} />
      <Stack.Screen name='Map' component={MapScreen} />
    </Stack.Navigator>
  );
};

export default HomeScreen;
