import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FC } from 'react';

import { RootStackParamList } from '@/navigation/navigation-types';

import CameraScreen from '../nested-create-post/CameraScreen';
import DefaultScreen from '../nested-create-post/DefaultScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const CreatePostsScreen: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName='DefaultCreatePostScreen'
      screenOptions={{
        headerShown: false,
        headerTitleStyle: {
          fontWeight: '500',
          fontSize: 17,
          color: '#212121',
        },
      }}
    >
      <Stack.Screen
        name='DefaultCreatePostScreen'
        component={DefaultScreen}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitle: 'Create publication',
        }}
      />
      <Stack.Screen name='CameraScreen' component={CameraScreen} />
    </Stack.Navigator>
  );
};

export default CreatePostsScreen;
