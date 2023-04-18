import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FC } from 'react';

import { CreatePostsScreen, HomeScreen, ProfileScreen } from '@/screens';

import { RootTabParamList } from './navigation-types';

const Tab = createBottomTabNavigator<RootTabParamList>();

const BottomMenu: FC = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#FF6C00',
      }}
    >
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name='home' size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='CreatePost'
        component={CreatePostsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name='pluscircleo' size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name='user' size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomMenu;
