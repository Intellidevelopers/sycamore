import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';


const EventReceipt = ({ navigation }) => {
  // Event Details
  const event = {
    name: 'Tech Seminar 2024',
    date: 'Oct 29, 2024',
    time: '2:00 PM',
    seatNo: '6',
    row: '1',
    venue: 'Ibeju Lekki, Lagos Nigeria',
    ticketNo: '123456789',
  };

  return (
    <LinearGradient
    colors={['#8d008d', '#f5f5f5']}
    style={styles.container}
  >
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Receipt</Text>
      </View>

      {/* Receipt Body */}
      <View style={styles.receiptContainer}>
        <Text style={styles.receiptTitle}>Booking Ticket</Text>
        <Image source={require('../../assets/qr.png')} style={styles.qr}/>
        {/* Event Details */}
        <View style={styles.eventDetails}>
        <Text style={styles.eventName}>{event.name}</Text>
          <View style={styles.flex}>
            <Text style={styles.infoText}>Date</Text>
            <Text style={styles.infoText}>{event.date}</Text>
          </View>
          <View style={styles.flex}>
            <Text style={styles.infoText}>Time</Text>
            <Text style={styles.infoText}>{event.time}</Text>
          </View>
          <View style={styles.flex}>
            <Text style={styles.infoText}>Seat No</Text>
            <Text style={styles.infoText}>{event.seatNo}</Text>
          </View>
          <View style={styles.flex}>
            <Text style={styles.infoText}>Row</Text>
            <Text style={styles.infoText}>{event.row}</Text>
          </View>
          <View style={styles.flex}>
            <Text style={styles.infoText}>Venue</Text>
            <Text style={styles.infoText}>{event.venue}</Text>
          </View>
          <View style={styles.flex}>
          <Text style={styles.infoText}>Ticket No</Text>
          <Text style={styles.infoText}>{event.ticketNo}</Text>
          </View>
        </View>

        {/* Receipt Footer */}
        <Text style={styles.thankYouText}>Thank you for booking with us!</Text>
      </View>

      {/* Download Button */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DownloadSuccess')}>
        <Text style={styles.buttonText}>Download Ticket</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 40,
  },
  backButton: {
    position: 'absolute',
    left: 0,
    backgroundColor: "#f5f5f5",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#aaa'
  },
  headerText: {
    flex: 1,
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
  },
  receiptContainer: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  receiptTitle: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
    color: '#000',
    alignSelf: 'center',
  },
  eventDetails: {
    marginBottom: 20,
  },
  eventName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    alignSelf: 'center'
  },
  infoText: {
    fontSize: 15,
    color: '#555',
    marginBottom: 5,
  },
  thankYouText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#000',
    marginTop: 20,
    fontStyle: 'italic',
  },
  button: {
    marginTop: 30,
    backgroundColor: '#8d008d',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    elevation: 3,
    width: '100%',
    alignItems: "center"
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  qr:{
    width: 200,
    height: 200,
    marginBottom: 20,
    resizeMode: 'contain',
    alignSelf: "center"
  },
  flex:{
    flexDirection: "row",
    justifyContent: 'space-between',
    alignContent: 'center',
  }
});

export default EventReceipt;
