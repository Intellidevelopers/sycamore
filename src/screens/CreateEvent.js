import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';
import Toast from 'react-native-toast-message';

const CreateEvent = ({ navigation }) => {
  const [eventName, setEventName] = useState('');
  const [date, setDate] = useState(new Date());
  const [location, setLocation] = useState('');
  const [time, setTime] = useState(new Date());
  const [category, setCategory] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [eventImage, setEventImage] = useState(null);

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const onChangeTime = (event, selectedTime) => {
    const currentTime = selectedTime || time;
    setShowTimePicker(false);
    setTime(currentTime);
  };

  const showDatePickerModal = () => {
    setShowDatePicker(true);
  };

  const showTimePickerModal = () => {
    setShowTimePicker(true);
  };

  // Function to pick an image from the gallery
  const pickEventImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setEventImage(result.assets[0].uri);
    }
  };

  const handleUploadEvent = () => {
    // Validate inputs
    if (!eventName || !location || !category || !eventImage) {
      Toast.show({
        type: 'error',
        text1: 'Validation Error',
        text2: 'Please fill in all fields and upload an event image!',
      });
      return;
    }

    // If all fields are valid, navigate to the success screen
    navigation.navigate('UploadSuccess');
  };

  return (
    <LinearGradient colors={['#8d008d', '#2b002b']} style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Add Event</Text>
        </View>

        {/* Event Image Picker */}
        <View style={styles.content}>
          <TouchableOpacity onPress={pickEventImage}>
            <View style={styles.imagePicker}>
              {eventImage ? (
                <Image source={{ uri: eventImage }} style={styles.eventImage} />
              ) : (
                <Text style={styles.imagePickerText}>Click To Upload Event Image</Text>
              )}
            </View>
          </TouchableOpacity>

          {/* Name of Event */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Name of event</Text>
            <TextInput
              style={styles.input}
              value={eventName}
              onChangeText={setEventName}
              placeholder="Enter event name"
              placeholderTextColor="#fff"
            />
          </View>

          {/* Date */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Date</Text>
            <TouchableOpacity onPress={showDatePickerModal} style={styles.input}>
              <Text style={styles.inputText}>{date.toLocaleDateString()}</Text>
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker
                value={date}
                mode="date"
                display="default"
                onChange={onChangeDate}
              />
            )}
          </View>

          {/* Location */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Location</Text>
            <TextInput
              style={styles.input}
              value={location}
              onChangeText={setLocation}
              placeholder="Enter event location"
              placeholderTextColor="#fff"
            />
          </View>

          {/* Time */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Time</Text>
            <TouchableOpacity onPress={showTimePickerModal} style={styles.input}>
              <Text style={styles.inputText}>
                {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </Text>
            </TouchableOpacity>
            {showTimePicker && (
              <DateTimePicker
                value={time}
                mode="time"
                display="default"
                onChange={onChangeTime}
              />
            )}
          </View>

          {/* Category */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Category</Text>
            <TextInput
              style={styles.input}
              value={category}
              onChangeText={setCategory}
              placeholder="Enter category"
              placeholderTextColor="#fff"
            />
          </View>

          {/* Upload Event Button */}
          <TouchableOpacity onPress={handleUploadEvent}>
            <LinearGradient colors={['#E200C3', '#400739']} style={styles.uploadButton}>
              <Text style={styles.uploadButtonText}>Upload Event</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </LinearGradient>
  );
};

export default CreateEvent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    marginTop: 60,
    borderBottomWidth: 1,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 5,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#8D1C6D',
    borderRadius: 10,
    padding: 15,
    color: '#fff',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E200C3',
  },
  inputText: {
    color: '#fff',
    fontSize: 16,
  },
  uploadButton: {
    backgroundColor: '#FF037A',
    borderRadius: 15,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  uploadButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  imagePicker: {
    borderRadius: 15,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    height: 120,
    backgroundColor: '#8d008d'
  },
  imagePickerText: {
    color: '#fff',
    fontSize: 16,
  },
  eventImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    resizeMode: 'contain',
  },
  content: {
    paddingHorizontal: 20,
  },
});
