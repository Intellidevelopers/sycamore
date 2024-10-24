import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


const EventDetails = ({ navigation }) => {
  const [ticketCount, setTicketCount] = useState(1);

  const incrementTicket = () => {
    setTicketCount(ticketCount + 1);
  };

  const decrementTicket = () => {
    if (ticketCount > 1) {
      setTicketCount(ticketCount - 1);
    }
  };

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <ImageBackground 
        source={require('../../assets/detail.png')} // Replace with the correct image URL
        style={styles.imageBackground}
        imageStyle={styles.imageStyle}
      >
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>

        {/* Details Card */}
        <View style={styles.detailsCard}>
          <View style={styles.header}>
            <Text style={styles.eventTitle}>Tech seminar 2024</Text>
            <View style={styles.heart}>
                <Ionicons name="heart" size={20} color="#8d008d" />
            </View>
          </View>
          <View style={styles.infoRow}>
            <Ionicons name="calendar" size={20} color="#8d008d" />
            <Text style={styles.infoText}>29th October, 2024</Text>
          </View>
          <View style={styles.infoRow}>
            <Ionicons name="time" size={20} color="#8d008d" />
            <Text style={styles.infoText}>2:00 PM</Text>
          </View>
          <View style={styles.infoRow}>
            <Ionicons name="location" size={20} color="#8d008d" />
            <Text style={styles.infoText}>Bell Event Center, Km 123 walls street, Lagos</Text>
          </View>

          <Text style={styles.aboutHeader}>About Event</Text>
          <Text style={styles.aboutText}>
            This seminar is designed for tech enthusiasts, professionals, and entrepreneurs looking to stay ahead of the curve.
          </Text>

          {/* Ticket Counter */}
         <View style={styles.counterContainer}>
         <View style={styles.counterRow}>
            <TouchableOpacity style={styles.counterButton} onPress={decrementTicket}>
              <FontAwesome5 name="minus" size={16} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.counterText}>{ticketCount}</Text>
            <TouchableOpacity style={styles.counterButton} onPress={incrementTicket}>
              <FontAwesome5 name="plus" size={16} color="#fff" />
            </TouchableOpacity>
          </View>


          {/* Select Seat Button */}
          <TouchableOpacity style={styles.selectSeatButton} onPress={() => navigation.navigate('SelectSeat')}>
          <LinearGradient 
            colors={['#8d008d', '#2b002b']}
            style={styles.selectSeatButton}>
            <Text style={styles.selectSeatText}>Select Seat</Text>
            </LinearGradient>
          </TouchableOpacity>
         </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 30,
    padding: 8,
    borderColor: '#555',
    borderWidth: 1
  },
  detailsCard: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    paddingBottom: 30,
  },
  eventTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoText: {
    marginLeft: 10,
    color: '#000',
    fontSize: 15,
    marginBottom: 5,
  },
  aboutHeader: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: '600',
    color: '#8d008d',
  },
  aboutText: {
    color: '#333',
    marginTop: 5,
    fontSize: 14,
  },
  counterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    gap: 10
  },
  counterButton: {
    backgroundColor: '#8d008d',
    borderRadius: 10,
    padding: 15,
    paddingHorizontal: 15,
  },
  counterText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  selectSeatButton: {
    borderRadius: 15,
    paddingVertical: 15,
    alignItems: 'center',
    width: '70%',
    left: 10
  },
  selectSeatText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  imageStyle:{
    resizeMode: 'cover',
    marginTop: -30,
    height: 600
  },
  counterContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  header:{
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    marginBottom: 20,
    gap: 10,
  },
  heart:{
    backgroundColor: '#f5f5f5',
    borderRadius: 15,
    padding: 5,
   
  }
});

export default EventDetails;
