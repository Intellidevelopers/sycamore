import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from 'react-native-vector-icons';

const notifications = [
  {
    id: 1,
    title: 'Hello Gracey, explore the Axe Battle in Abuja on 20 November 2024',
    time: '2:00 PM',
    date: 'Today',
    image: require('../../assets/images/party.png'),
  },
  {
    id: 2,
    title: 'Hello Gracey, explore the Axe Battle in Abuja on 20 November 2024',
    time: '2:00 PM',
    date: 'Today',
    image: require('../../assets/detail.png'),
  },
  {
    id: 3,
    title: 'Hello Gracey, explore the Axe Battle in Abuja on 20 November 2024',
    time: '2:00 PM',
    date: 'Today',
    image: require('../../assets/images/horse.png'),
  },
  {
    id: 4,
    title: 'Hello Gracey, explore the Axe Battle in Abuja on 20 November 2024',
    time: '2:00 PM',
    date: 'Yesterday',
    image: require('../../assets/images/horse.png'),
  },
  {
    id: 5,
    title: 'Hello Gracey, explore the Axe Battle in Abuja on 20 November 2024',
    time: '2:00 PM',
    date: 'Yesterday',
    image: require('../../assets/images/party.png'),
  },
  {
    id: 6,
    title: 'Hello Gracey, explore the Axe Battle in Abuja on 20 November 2024',
    time: '2:00 PM',
    date: 'Yesterday',
    image: require('../../assets/images/bliss.png'),
  },
];

const OrganizerNotification = ({ navigation }) => {
  const renderNotificationItem = ({ item }) => (
    <View style={styles.notificationCard}>
      <Image source={item.image} style={styles.notificationImage} />
      <View style={styles.textContainer}>
        <Text style={styles.notificationText}>{item.title}</Text>
        <Text style={styles.notificationTime}>{item.time}</Text>
      </View>
    </View>
  );

  const groupedNotifications = [
    { title: 'Today', data: notifications.filter(item => item.date === 'Today') },
    { title: 'Yesterday', data: notifications.filter(item => item.date === 'Yesterday') },
  ];

  return (
    <LinearGradient colors={['#8d008d', '#2b002b']} style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="#555" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
      </View>

      {/* ScrollView to allow scrolling for all content */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {groupedNotifications.map((section, index) => (
          <View key={index}>
            <Text style={styles.sectionHeader}>{section.title}</Text>
            {section.data.map(item => renderNotificationItem({ item }))}
          </View>
        ))}
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    paddingBottom: 20,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
  },
  sectionHeader: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
    marginBottom: 10,
    marginTop: 10,
    paddingHorizontal: 20,
  },
  notificationCard: {
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 5,
    marginBottom: 10,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  notificationImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  notificationText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  notificationTime: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
    alignSelf: "flex-end"
  },
  backButton: {
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    width: 50,
    borderWidth: 1,
    borderColor: '#555',
  },
  scrollContent: {
    paddingBottom: 20, // Extra space at the bottom for smooth scrolling
  },
});

export default OrganizerNotification;
