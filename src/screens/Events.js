import React from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';
import {Ionicons, MaterialCommunityIcons} from 'react-native-vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


const eventsData = [
  {
    id: '1',
    title: 'Geal Horse Race',
    location: 'Landmark resort, Lagos',
    date: '17th Nov - 12:00PM',
    image: require('../../assets/images/horse.png'), // Replace with correct image path
  },
  {
    id: '2',
    title: 'Real music fest',
    location: 'Landmark resort, Lagos',
    date: '17th Nov - 12:00PM',
    image: require('../../assets/images/party.png'), // Replace with correct image path
  },
];

const Events = ({ navigation }) => {
  return (
    <LinearGradient
    colors={['#8d008d', '#2b002b']}
    style={styles.container}
  >
      {/* Header */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={24} color="#000" />
      </TouchableOpacity>
      <View style={styles.searchContainer}>
        <View style={styles.header}>
          <Ionicons name="search-outline" size={26} color="#000" />
          <TextInput
            placeholder="Find exciting events"
            placeholderTextColor="#555"
            style={styles.searchInput}
          />
        </View>
        <TouchableOpacity style={styles.filter}>
            <Ionicons name="options-outline" size={24} color="#555" />
        </TouchableOpacity>
      </View>

      {/* Popular Events */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Popular events</Text>
        <TouchableOpacity onPress={() => navigation.navigate('AllEvents')}>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        data={eventsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.eventCard} onPress={() => navigation.navigate('EventDetails')}>
            <Image source={item.image} style={styles.eventImage} />
            <View style={styles.details}>
            <Text style={styles.eventTitle}>{item.title}</Text>
           <View style={styles.flex} >
            <Ionicons name="location" size={20} color="#8d008d" />
            <Text style={styles.eventLocation}>{item.location}</Text>
           </View>

           <View style={styles.flex} >
            <Ionicons name="calendar" size={20} color="#8d008d" />
            <Text style={styles.eventDate}>{item.date}</Text>
           </View>
            </View>
          </TouchableOpacity>
        )}
        showsHorizontalScrollIndicator={false}
      />

      {/* Events This Week */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Events This week</Text>
        <TouchableOpacity onPress={() => navigation.navigate('AllEvents')}>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.eventThisWeekCard}>
        <Image
          source={require('../../assets/images/bliss.png')} // Replace with correct image path
          style={styles.eventThisWeekImage}
        />
        <View style={styles.eventThisWeekDetails}>
          <Text style={styles.eventThisWeekTitle}>Bliss Experience</Text>
          <View style={styles.flex} >
            <Ionicons name="location" size={20} color="#8d008d" />
            <Text style={styles.eventLocation}>This Day Dome, Abuja</Text>
           </View>

           <View style={styles.flex} >
            <Ionicons name="calendar" size={20} color="#8d008d" />
            <Text style={styles.eventDate}>25th October, 2024</Text>
           </View>
          <TouchableOpacity  onPress={() => navigation.navigate('EventDetails')}>
          <LinearGradient colors={['#8d008d', '#2b002b']} style={styles.viewEventButton}>
          <Text style={styles.viewEventButtonText}>View Event</Text>
          </LinearGradient>
        </TouchableOpacity>
        </View>
       
      </View>
  </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7c1274',
    padding: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 40,
    marginTop: 40
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    flex: 1,
    paddingHorizontal: 10,
  },
  searchInput: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: '#fff',
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  eventCard: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    marginRight: 15,
    width: 200,
    height: 220,
  },
  eventImage: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  eventLocation: {
    color: '#555',
  },
  eventDate: {
    color: '#000',
    fontWeight: '500',
  },
  eventThisWeekCard: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    gap: 5,
    padding: 5
  },
  eventThisWeekImage: {
    width: 130,
    height: 120,
    borderRadius: 10,
  },
  eventThisWeekDetails: {
    flex: 1,
    marginLeft: 10,
  },
  eventThisWeekTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  eventThisWeekLocation: {
    color: '#777',
  },
  eventThisWeekDate: {
    color: '#eb128b',
  },
  viewEventButton: {
    backgroundColor: '#eb128b',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: 100
  },
  viewEventButtonText: {
    color: '#fff',
    fontWeight: '500'
  },
  bottomTabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    backgroundColor: '#940091',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  details: {
    flex: 1,
    paddingHorizontal: 5,
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    width: '100%',
    gap: 5
  },
  sectionHeader:{
    marginBottom: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  viewAll: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  backButton:{
    marginTop: 40,
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    width: 50,
  },
  filter: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginLeft: 10,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 10,
  }
});

export default Events;
