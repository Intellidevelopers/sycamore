// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './src/screens/Splash';
import { StatusBar } from 'expo-status-bar';
import SelectCountry from './src/screens/SelectCountry';
import AccountType from './src/screens/AccountType';
import Signup from './src/screens/Signup';
import BottomTabs from './src/BottomTabs';
import EventDetails from './src/screens/EventDetails';
import SelectSeat from './src/screens/SelectSeat';
import Ticket from './src/screens/Ticket';
import DownloadSuccess from './src/screens/DownloadSuccess';
import AllEvents from './src/screens/AllEvents';
import Login from './src/screens/Login';
import ForgotPassword from './src/screens/ForgotPassword';
import OrganizerHome from './src/screens/OrganizerHome';
import CreateEvent from './src/screens/CreateEvent';
import UploadSuccess from './src/screens/UploadSuccess';
import OrganizerBottomTabs from './src/OrganizerBottomTabs';
import OrganizerSignup from './src/screens/OrganizerSignup';
import OrganizerLogin from './src/screens/OrganizerLogin';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
        <Stack.Screen name="OrganizerBottomTabs" component={OrganizerBottomTabs} options={{headerShown: false}} />
        <Stack.Screen name="CreateEvent" component={CreateEvent} options={{headerShown: false}} />
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="BottomTabs" component={BottomTabs} options={{headerShown: false}} />
        <Stack.Screen name="SelectCountry" component={SelectCountry} options={{headerShown: false}} />
        <Stack.Screen name="AccountType" component={AccountType} options={{headerShown: false}} />
        <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}} />
        <Stack.Screen name="EventDetails" component={EventDetails} options={{headerShown: false}} />
        <Stack.Screen name="SelectSeat" component={SelectSeat} options={{headerShown: false}} />
        <Stack.Screen name="Ticket" component={Ticket} options={{headerShown: false}} />
        <Stack.Screen name="DownloadSuccess" component={DownloadSuccess} options={{headerShown: false}} />
        <Stack.Screen name="AllEvents" component={AllEvents} options={{headerShown: false}} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{headerShown: false}} />
        <Stack.Screen name="UploadSuccess" component={UploadSuccess} options={{headerShown: false}} />
        <Stack.Screen name="OrganizerSignup" component={OrganizerSignup} options={{headerShown: false}} />
        <Stack.Screen name="OrganizerLogin" component={OrganizerLogin} options={{headerShown: false}} />
      </Stack.Navigator>
      <StatusBar style='auto'/>
    </NavigationContainer>
  );
}

export default App;