import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Toast from 'react-native-toast-message'; // Import the toast library

// List of countries
const countries = [
  { name: 'Afghanistan', flag: '🇦🇫' },
  { name: 'Algeria', flag: '🇩🇿' },
  { name: 'Italy', flag: '🇮🇹' },
  { name: 'USA', flag: '🇺🇸' },
  { name: 'Switzerland', flag: '🇨🇭' },
  { name: 'Denmark', flag: '🇩🇰' },
  { name: 'Pakistan', flag: '🇵🇰' },
  { name: 'Nigeria', flag: '🇳🇬' },
  { name: 'South Africa', flag: '🇿🇦' },
  { name: 'Germany', flag: '🇩🇪' },
];

const SelectCountry = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);

  // Filter countries based on search input
  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  // Handle explore button press with validation
  const handleExplorePress = () => {
    if (!selectedCountry) {
      Toast.show({
        type: 'error',
        text1: 'Validation Error',
        text2: 'Please select a country before proceeding.',
      });
    } else {
      navigation.navigate('AccountType');
    }
  };

  return (
    <LinearGradient
      colors={['#A800A8', '#2B002B']}
      style={styles.container}
    >
      
      {/* Search Input */}
      <TextInput
        style={styles.searchBar}
        placeholder="Select country"
        value={search}
        onChangeText={setSearch}
        placeholderTextColor="#fff"
      />

      {/* Country List */}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={filteredCountries}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.countryItem,
              selectedCountry === item.name && styles.selectedCountry
            ]}
            onPress={() => setSelectedCountry(item.name)}
          >
            <Text style={styles.flag}>{item.flag}</Text>
            <Text style={styles.countryName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Explore Button */}
      <TouchableOpacity style={styles.exploreButton} onPress={handleExplorePress}>
        <Text style={styles.exploreButtonText}>Explore</Text>
      </TouchableOpacity>

      {/* Toast Component */}
      <Toast />
    </LinearGradient>
  );
};

export default SelectCountry;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7F006E',
    padding: 16,
  },
  searchBar: {
    height: 50,
    borderRadius: 15,
    paddingLeft: 20,
    marginBottom: 20,
    color: '#fff',
    fontSize: 18,
    marginTop: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderColor: '#fff'
  },
  countryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  selectedCountry: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  flag: {
    fontSize: 24,
    marginRight: 15,
  },
  countryName: {
    fontSize: 18,
    color: '#fff',
  },
  exploreButton: {
    marginTop: 'auto',
    backgroundColor: '#A800A8',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  exploreButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
