import { Tabs } from 'expo-router';
import React from 'react';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Octicons from '@expo/vector-icons/Octicons';



export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#103ADA', 
        tabBarInactiveTintColor: '#9CA3AF', 
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          paddingTop: 10,
          paddingBottom: 10,
          paddingHorizontal: 25,
          height: 65,
        },
        headerShown: false, 
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Semana',
          tabBarIcon: ({ color, focused }) => (
            <Feather name="calendar" size={26} color={color}/>
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Agenda',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome5 name="calendar-check" size={26} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: 'Chat',
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name="chat" size={26} color={color}/>
          ),
        }}
      />
      <Tabs.Screen
        name="score"
        options={{
          title: 'Score',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name="star-shooting-outline" size={26} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color, focused }) => (
            <Octicons name="feed-person" size={26} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
