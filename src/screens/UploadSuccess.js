import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const UploadSuccess = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Set a timeout to navigate to another screen (e.g., "HomeScreen") after 3 seconds
    const timer = setTimeout(() => {
      navigation.navigate('OrganizerHome'); // You can replace 'HomeScreen' with the screen you want to navigate to
    }, 3000); // 3000ms = 3 seconds

    // Clean up the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <LinearGradient
    colors={['#8d008d', '#2b002b']}
    style={styles.container}
  >
      <Image source={require('../../assets/receipt.png')} style={styles.icon} />
      <Text style={styles.buttonText}>Event Uploaded successfully</Text>
      <ActivityIndicator size="large" color="#ffffff" style={styles.loader} />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple',
  },
  icon: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    marginBottom: 40, // Added margin to push the loader further down
  },
  loader: {
    position: 'absolute',
    bottom: 50, // Adjust this value as needed to control how close to the bottom you want the loader
  },
});

export default UploadSuccess;
