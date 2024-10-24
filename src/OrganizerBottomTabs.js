// OrganizerBottomTabs.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, Ionicons, AntDesign, Entypo, FontAwesome6, FontAwesome5 } from '@expo/vector-icons'; // Import additional icon libraries
import { Text, View, StyleSheet, Settings } from 'react-native'; // Import Text and View for custom title
import OrganizerHome from './screens/OrganizerHome';
import OrganizerEvents from './screens/OrganizerEvents';
import OrganizerNotification from './screens/OrganizerNotification';
import OrganizerProfile from './screens/OrganizerProfile';

const Tab = createBottomTabNavigator();

const CustomTabBarLabel = ({ title }) => (
  <View style={styles.labelContainer}>
    <Text style={styles.label}>{title}</Text>
  </View>
);

export default function OrganizerBottomTabs() {
  return (
    <Tab.Navigator
  screenOptions={({ route }) => ({
    tabBarIcon: ({ color, size }) => {
      let iconName;
      let IconComponent;

      if (route.name === 'OrganizerHome') {
        iconName = 'home';
        IconComponent = Entypo;
      } else if (route.name === 'OrganizerEvents') {
        iconName = 'calendar';
        IconComponent = AntDesign; 
      } else if (route.name === 'OrganizerNotification') {
        iconName = 'bell';
        IconComponent = FontAwesome;
      } else if (route.name === 'OrganizerProfile') {
        iconName = 'user';
        IconComponent = FontAwesome5;
      }

      return IconComponent ? <IconComponent name={iconName} size={size} color={color} /> : null;
    },
    tabBarLabel: ({ focused }) => {
      // Pass the label name based on route and the focused state
      let title;
      if (route.name === 'OrganizerHome') title = 'Home';
      else if (route.name === 'OrganizerEvents') title = 'Events';
      else if (route.name === 'OrganizerNotification') title = 'Notifications';
      else if (route.name === 'OrganizerProfile') title = 'Profile';

      return <CustomTabBarLabel title={title} focused={focused} />;
    },
    tabBarActiveTintColor: '#8d008d',
    tabBarInactiveTintColor: '#fff',
    headerShown: false,
    tabBarStyle: {
      backgroundColor: '#000',
      borderTopWidth: 1,
    },
  })}
>
  <Tab.Screen name="OrganizerHome" component={OrganizerHome} />
  <Tab.Screen name="OrganizerEvents" component={OrganizerEvents} />
  <Tab.Screen name="OrganizerNotification" component={OrganizerNotification} />
  <Tab.Screen name="OrganizerProfile" component={OrganizerProfile} />
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
