import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Set a timeout to navigate to another screen (e.g., "HomeScreen") after 3 seconds
    const timer = setTimeout(() => {
      navigation.navigate('SelectCountry'); // You can replace 'HomeScreen' with the screen you want to navigate to
    }, 3000); // 3000ms = 3 seconds

    // Clean up the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo}/>
      {/* Add an activity indicator below the text */}
      <ActivityIndicator size="large" color="#fff" style={styles.loader} />
      <StatusBar style='auto'/>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loader: {
    marginTop: 20, // Add some margin to space out the ActivityIndicator
  },
  logo:{
    resizeMode: 'contain',
    width: 200,
    height: 200,
  }
});
