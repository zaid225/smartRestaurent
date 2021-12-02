import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import main from '../main/main';
import restaurent from '../restaurent/restaurent';
import profile from '../profile/profile';
import {Image} from 'react-native'
import logout from '../logout/logout';
const Tab = createBottomTabNavigator();

export default function home(props) {
  console.log("props", props.navigation)
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#FFCC63',
      }}
    >
      <Tab.Screen
        name="Home"
        component={main}

        options={{
          tabBarLabel: 'Home',
          headerShown:false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Reastaurent"
        component={restaurent}
        options={{
          tabBarLabel: 'Restaurent',
          headerShown:false,
          tabBarIcon: ({ color, size }) => (
            <Image source={require('../../assets/Vector(2).png')} color={color} />
            // <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={profile}
        options={{
          tabBarLabel: 'Profile',
          headerShown:false,

          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
       <Tab.Screen
        name="Logout"
        component={logout}
        options={{
          tabBarLabel: 'logout',
          headerShown:false,

          tabBarIcon: ({ color, size }) => (
            <Image source={require('../../assets/logout.png')}  color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}