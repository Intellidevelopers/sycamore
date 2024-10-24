import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


const allEventsData = {
  upcoming: [
    {
      id: '1',
      title: 'Meet & Greet',
      location: 'Welt event, Lagos',
      date: '25th October, 2024',
      image: require('../../assets/detail.png'), // Replace with actual path
    },
    {
      id: '2',
      title: 'Tech Conference',
      location: 'This Day Dome, Abuja',
      date: '15th October, 2024',
      image: require('../../assets/detail.png'), // Replace with actual path
    },
    {
      id: '3',
      title: 'Real Praise Kenya',
      location: 'This Day Dome, Abuja',
      date: '20th October, 2024',
      image: require('../../assets/detail.png'), // Replace with actual path
    },
  ],
  past: [
    {
      id: '4',
      title: 'Bliss Experience',
      location: 'This Day Dome, Abuja',
      date: '25th October, 2023',
      image: require('../../assets/detail.png'), // Replace with actual path
    },
    // Add more past events here
  ],
};

const AllEvents = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState('upcoming'); // Track selected tab ('upcoming' or 'past')

  const renderEventCard = ({ item }) => (
    <View style={styles.eventCard}>
      <Image source={item.image} style={styles.eventImage} />
      <View style={styles.eventDetails}>
        <Text style={styles.eventTitle}>{item.title}</Text>
        <View style={styles.eventInfo}>
          <Ionicons name="location" size={20} color="#8d008d" />
          <Text style={styles.eventLocation}>{item.location}</Text>
        </View>
        <View style={styles.eventInfo}>
          <Ionicons name="calendar" size={20} color="#8d008d" />
          <Text style={styles.eventDate}>{item.date}</Text>
        </View>
        <TouchableOpacity  onPress={() => navigation.navigate('EventDetails')}>
        <LinearGradient colors={['#8d008d', '#2b002b']} style={styles.viewEventButton}>
          <Text style={styles.viewEventButtonText}>View Event</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <LinearGradient
    colors={['#8d008d', '#2b002b']}
    style={styles.container}
  >
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={24} color="#000" />
      </TouchableOpacity>
      {/* Tab Header */}
      <View style={styles.tabHeader}>
        <TouchableOpacity onPress={() => setSelectedTab('upcoming')}>
            <Text style={[styles.tabText, selectedTab === 'upcoming' && styles.activeTab]}>Upcoming</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedTab('past')}>
            <Text style={[styles.tabText, selectedTab === 'past' && styles.activeTab]}>Past events</Text>
        </TouchableOpacity>
        </View>


      {/* Event List */}
      <FlatList
        data={allEventsData[selectedTab]}
        keyExtractor={(item) => item.id}
        renderItem={renderEventCard}
        contentContainerStyle={styles.eventList}
      />
    </LinearGradient>
  );
};

export default AllEvents;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7c1274',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  tabHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#5C0034',
  },
  tabText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
    paddingBottom: 10,
  },
  activeTab: {
    borderBottomWidth: 1,
    borderBottomColor: '#FFED29',
    color: '#FF80EC',
  },
  eventList: {
    paddingBottom: 20,
  },
  eventCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  eventImage: {
    width: 130,
    height: 150,
    borderRadius: 10,
  },
  eventDetails: {
    flex: 1,
    marginLeft: 10,
    padding: 10
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  eventInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  eventLocation: {
    color: '#777',
    marginLeft: 5,
  },
  eventDate: {
    color: '#000',
    marginLeft: 5,
    fontWeight: '500'
  },
  viewEventButton: {
    marginTop: 10,
    backgroundColor: '#FFED29',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 120,
    alignItems: 'center'
  },
  viewEventButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  backButton:{
    marginTop: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    width: 50,
    marginBottom: 20
  },
});
