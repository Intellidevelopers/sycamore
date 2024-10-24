import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import { AntDesign, Entypo, FontAwesome5, Ionicons } from '@expo/vector-icons'; // Icons for search and filter buttons
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';



const OrganizerHome = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['#8d008d', '#2b002b']}
      style={styles.container}
    >
      <ScrollView>
      {/* Top section with image background */}
      <ImageBackground 
      source={require('../../assets/topcard.png')} // Replace with your image link
      style={styles.topCard}
      imageStyle={styles.topCardImageStyle}
      >
        <View style={styles.topCardContent}>
          <View style={styles.header}>
            <Text style={styles.greeting}>Hi Gracey,</Text>
            <BlurView intensity={50} tint="dark" style={styles.filterButton}>
                <TouchableOpacity>
                <FontAwesome5 name="sliders-h" size={20} color="#fff" />
                </TouchableOpacity>
            </BlurView>
          </View>

          {/* Search bar */}
          <BlurView intensity={50} tint="light" style={styles.searchSection}>
            <TextInput placeholder='Search' placeholderTextColor={'#fff'} style={styles.input}/>
            <Ionicons name="search" size={28} color="#fff" />
          </BlurView>

          {/* Live Chat button */}
          <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('CreateEvent')}>
            <LinearGradient colors={['#8d008d', '#2b002b']} style={styles.chatButton}>
            <Text style={styles.chatButtonText}>Add Event</Text>
            </LinearGradient>
          </TouchableOpacity>
         
        </View>
      </ImageBackground>

      <Text style={styles.eventsHeader}>
        Discover upcoming <Text style={styles.highlight}>events</Text> and plan your next adventure
      </Text>
      {/* Event cards */}
      <View style={styles.eventCard}>
        <Image source={require('../../assets/detail.png')} style={styles.eventImage} />
        <View style={styles.eventDetails}>
          <Text style={styles.eventTitle}>Tech seminar 2024</Text>
          <Text style={styles.eventLocation}><Entypo name='location-pin' color={'#F80099'} size={18}/> Bell Event center</Text>
          <Text style={styles.eventDate}>📅 29th October, 2024</Text>
          <TouchableOpacity onPress={() => navigation.navigate('EventDetails')}>
          <LinearGradient 
            colors={['#8d008d', '#2b002b']}
            style={styles.ticketButton}>
                    <Text style={styles.ticketButtonText}>Get Ticket</Text>
            </LinearGradient>
            </TouchableOpacity>
        </View>
      </View>

      <View style={styles.eventCard}>
        <Image source={require('../../assets/images/horse.png')} style={styles.eventImage} />
        <View style={styles.eventDetails}>
          <Text style={styles.eventTitle}>Tech seminar 2024</Text>
          <Text style={styles.eventLocation}><Entypo name='location-pin' color={'#F80099'} size={18}/> Bell Event center</Text>
          <Text style={styles.eventDate}>📅 29th October, 2024</Text>
          <TouchableOpacity  onPress={() => navigation.navigate('EventDetails')}>
          <LinearGradient 
            colors={['#8d008d', '#2b002b']}
            style={styles.ticketButton}>
                    <Text style={styles.ticketButtonText}>Get Ticket</Text>
            </LinearGradient>
            </TouchableOpacity>
        </View>
      </View>

      <View style={styles.eventCard}>
        <Image source={require('../../assets/images/bliss.png')} style={styles.eventImage} />
        <View style={styles.eventDetails}>
          <Text style={styles.eventTitle}>Tech seminar 2024</Text>
          <Text style={styles.eventLocation}><Entypo name='location-pin' color={'#F80099'} size={18}/> Bell Event center</Text>
          <Text style={styles.eventDate}>📅 29th October, 2024</Text>
          <TouchableOpacity  onPress={() => navigation.navigate('EventDetails')}>
          <LinearGradient 
            colors={['#8d008d', '#2b002b']}
            style={styles.ticketButton}>
                    <Text style={styles.ticketButtonText}>Get Ticket</Text>
            </LinearGradient>
            </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
    </LinearGradient>
  );
};

export default OrganizerHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B0326', // Matches the dark theme from the image
  },
  topCard: {
    height: 250,
    justifyContent: 'center',
    borderBottomLeftRadius: 30
  },
  topCardContent: {
    justifyContent: 'space-between', // Ensures proper spacing between elements
    alignItems: 'center',
    flex: 1,
    padding: 20,
    marginBottom: 30,
  },
  greeting: {
    color: '#fff',
    fontSize: 22,
    fontWeight: "700",
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%', // Ensures full width spacing
    marginTop: 30
  },
  filterButton: {
    padding: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    marginBottom: 10,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchSection: {
    flexDirection: 'row',
    borderRadius: 15,  // Increased borderRadius to make it more rounded
    padding: 10,
    alignItems: 'center',
    width: '100%',
    marginBottom: 30,
    overflow: 'hidden',  // Ensures the blur effect stays within the border
    borderWidth: 1,
    borderColor: '#fff'
  },

  searchText: {
    color: 'white',
    marginLeft: 5,
  },
  chatButton: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 15,
    alignSelf: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
  },
  chatButtonText: {
    color: '#fff',
    fontWeight: "700",
    fontSize: 16
  },
  eventsHeader: {
    color: '#fff',
    fontSize: 18,
    margin: 15,
    fontWeight: "500",
  },
  highlight: {
    color: '#F600F6',
  },
  eventCard: {
    backgroundColor: '#f5f5f5',
    borderRadius: 15,
    marginHorizontal: 15,
    marginBottom: 20,
    overflow: 'hidden',
    flexDirection: "row",
    elevation: 10,
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  eventImage: {
    width: '40%',
    height: 160,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  eventDetails: {
    padding: 15,
  },
  eventTitle: {
    color: '#000',
    fontSize: 18,
    marginBottom: 5,
    fontWeight: "900",
  },
  eventLocation: {
    color: '#666',
    marginBottom: 5,
    fontWeight: "500",
    alignItems: "center",

  },
  eventDate: {
    color: '#000',
    marginBottom: 15,
    fontWeight: '700'
  },
  ticketButton: {
    backgroundColor: '#FF00F7',
    paddingVertical: 10,
    borderRadius: 15,
    alignItems: 'center',
  },
  ticketButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500'
  },
  topCardImageStyle:{
    resizeMode: 'cover',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  support:{
    backgroundColor: '#FF00F7',
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input:{
    paddingHorizontal: 10,
    borderRadius: 20,
    color: '#fff',
    fontSize: 16,
    flex: 1,
  },
  btn:{
    alignSelf: 'flex-end'
  }
});
