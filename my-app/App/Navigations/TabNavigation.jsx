import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from '../Screen/ProfileScreen/ProfileScreen';
import HistoryScreen from '../Screen/HistoryScreen/HistoryScreen';
import StartWorkoutScreen from '../Screen/StartWorkoutScreen/StartWorkoutScreen';
import ExercisesScreen from '../Screen/ExercisesScreen/ExercisesScreen';
import SettingsScreen from '../Screen/SettingsScreen/SettingsScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'History') {
            iconName = focused ? 'history' : 'history';
          } else if (route.name === 'Start Workout') {
            iconName = focused ? 'add' : 'add';
          } else if (route.name === 'Exercises') {
            iconName = focused ? 'fitness-center' : 'fitness-center';
          } else if (route.name === 'Settings') { // Add a condition for the Settings tab
            iconName = focused ? 'settings' : 'settings'; // Choose an icon for settings
          }
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
      <Tab.Screen name="Start Workout" component={StartWorkoutScreen} />
      <Tab.Screen name="Exercises" component={ExercisesScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
