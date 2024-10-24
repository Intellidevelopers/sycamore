// HomeTabs.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, Ionicons, AntDesign, Entypo, FontAwesome6, FontAwesome5 } from '@expo/vector-icons'; // Import additional icon libraries
import { Text, View, StyleSheet, Settings } from 'react-native'; // Import Text and View for custom title
import HomeScreen from './screens/HomeScreen';
import Notification from './screens/Notification';
import Profile from './screens/Profile';
import Events from './screens/Events';

const Tab = createBottomTabNavigator();

const CustomTabBarLabel = ({ title }) => (
  <View style={styles.labelContainer}>
    <Text style={styles.label}>{title}</Text>
  </View>
);

export default function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          let IconComponent;

          if (route.name === 'Home') {
            iconName = 'home';
            IconComponent = Entypo; // Use Entypo for Home
          } else if (route.name === 'Events') {
            iconName = 'calendar';
            IconComponent = Ionicons; // Use Ionicons for Calls
          } else if (route.name === 'Notification') {
            iconName = 'bell';
            IconComponent = FontAwesome; // Use Ionicons for Calls
          } else if (route.name === 'Profile') {
            iconName = 'user';
            IconComponent = FontAwesome; // Use Ionicons for Calls
          }

          return <IconComponent name={iconName} size={size} color={color} />;
        },
        tabBarLabel: ({ focused }) => {
          const title = route.name === 'Home' ? 'Home' : route.name; // Change title for Home tab
          return <CustomTabBarLabel title={title} />;
        },
        tabBarActiveTintColor: '#8d008d',
        tabBarInactiveTintColor: '#fff',
        headerShown: false,
        tabBarStyle:{
          backgroundColor: '#000', // Customize the tab bar background color
          borderTopWidth: 1, // Remove the default border
        }
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Events" component={Events} />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  labelContainer: {
    alignItems: 'center', // Center the label
  },
  label: {
    fontSize: 12, // Customize the font size
    color: '#fff', // Default label color
  },
});
