import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import { FontAwesome, MaterialIcons, Entypo, Feather, Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { LinearGradient } from 'expo-linear-gradient';

const Profile = ({ navigation }) => {
  const [profileImage, setProfileImage] = useState(null); // Removed type declaration

  // Function to pick an image from the gallery
  const pickImage = async () => {
    // Ask for permission to access the gallery
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
      return;
    }

    // Launch the image picker
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    // If the user didn't cancel the selection
    if (!result.canceled && result.assets && result.assets.length > 0) {
      setProfileImage(result.assets[0].uri); // Use assets[0].uri to get the image URI
    }
  };

  return (
    <LinearGradient colors={['#8d008d', '#2b002b']} style={styles.container}>

      {/* Profile picture */}
      <View style={styles.profileSection}>
        <TouchableOpacity onPress={pickImage}>
          {profileImage ? (
            <Image source={{ uri: profileImage }} style={styles.profileImage} />
          ) : (
            <Image source={require('../../assets/images/bliss.png')} style={styles.profileImage} />
          )}
        </TouchableOpacity>
        <TouchableOpacity style={styles.cameraIcon} onPress={pickImage}>
          <Feather name="camera" size={20} color="white" />
        </TouchableOpacity>
      </View>

      {/* Edit Profile button */}
      <TouchableOpacity>
        <LinearGradient colors={['#8d008d', '#2b002b']} style={styles.editProfileButton}>
          <Text style={styles.editProfileText}>Edit Profile</Text>
        </LinearGradient>
      </TouchableOpacity>

      {/* Menu Options */}
      <View style={styles.menuSection}>
        {/* Menu items */}
        <TouchableOpacity style={styles.menuItem}>
          <Entypo name="heart" size={24} color="#fff" />
          <Text style={styles.menuText}>Favorites</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <FontAwesome name="ticket" size={24} color="#fff" />
          <Text style={styles.menuText}>Tickets</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Entypo name="location" size={24} color="#fff" />
          <Text style={styles.menuText}>Location</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Feather name="help-circle" size={24} color="#fff" />
          <Text style={styles.menuText}>Help & Support</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('OrganizerLogin')}>
          <MaterialIcons name="logout" size={24} color="#fff" />
          <Text style={styles.menuText}>Log out</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="#fff" />
        </TouchableOpacity>
        {/* Add other menu items similarly */}
      </View>
    </LinearGradient>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  backButton: {
    padding: 10,
    backgroundColor: '#FFED29',
    borderRadius: 10,
    width: 50,
    borderWidth: 1,
    borderColor: '#f2f2f2',
  },
  profileSection: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderColor: 'white',
    borderWidth: 2,
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 0,
    right: 100,
    backgroundColor: '#333',
    padding: 5,
    borderRadius: 20,
  },
  editProfileButton: {
    backgroundColor: '#d103fc',
    paddingVertical: 15,
    borderRadius: 15,
    marginVertical: 15,
    alignItems: 'center',
  },
  editProfileText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  menuSection: {
    marginTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  menuText: {
    flex: 1,
    marginLeft: 20,
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});
