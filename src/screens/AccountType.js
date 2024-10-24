import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';


const AccountType = ({ navigation }) => {

  return (
    <LinearGradient
      colors={['#A800A8', '#2B002B']}
      style={styles.container}
    >
      <Text style={styles.title}>Select User Type</Text>

      {/* Guest Card */}
      <TouchableOpacity
        style={styles.card }
        onPress={() => navigation.navigate('Signup')}
      >
        <ImageBackground
          source={require('../../assets/guest.jpg')} // Background image for Guest
          style={styles.backgroundImage}
          imageStyle={{ borderRadius: 10 }}
        >
          <BlurView intensity={50} tint="dark" style={styles.textContainer}>
            <Text style={styles.cardTitle}>Guest</Text>
            <Text style={styles.cardText}>
              Get tickets today and make unforgettable memories!
            </Text>
          </BlurView>
        </ImageBackground>
      </TouchableOpacity>

      {/* Organizer Card */}
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('OrganizerSignup')}
      >
        <ImageBackground
          source={require('../../assets/organizer.jpg')} // Background image for Organizer
          style={styles.backgroundImage}
          imageStyle={{ borderRadius: 10 }}
        >
          <BlurView intensity={50} tint="dark" style={styles.textContainer}>
            <Text style={styles.cardTitle}>Organizer</Text>
            <Text style={styles.cardText}>
              Experience the difference with our premium event services.
            </Text>
          </BlurView>
        </ImageBackground>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default AccountType;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7F006E',
    padding: 16,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'left',
    marginTop: 40,
  },
  card: {
    height: 180,
    borderRadius: 10,
    marginBottom: 20,
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  selectedCard: {
    borderColor: '#FFED29',
    borderWidth: 2,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  cardTitle: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
  },
  cardText: {
    color: '#fff',
    fontSize: 14,
    marginTop: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    borderRadius: 10,  // Add borderRadius here
    overflow: 'hidden',  // Ensure content doesn't overflow the border radius
  },
});
