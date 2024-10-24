import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Toast from 'react-native-toast-message'; // Import Toast

const SelectSeat = ({ navigation }) => {
  const leftSeats = Array(3).fill(0);
  const rightSeats = Array(3).fill(0);
  const rows = Array(5).fill({ left: leftSeats, right: rightSeats });

  const [selectedSeats, setSelectedSeats] = useState([]);
  const dates = ['27 Sun', '28 Mon', '29 Tue', '30 Wed', '31 Thur'];
  const times = ['0:00', '1:00', '2:00', '3:00', '4:00'];
  const [selectedDate, setSelectedDate] = useState(29);
  const [selectedTime, setSelectedTime] = useState('2:00');

  const getSeatKey = (side, rowIndex, seatIndex) => {
    return `${side}-${rowIndex}-${seatIndex}`;
  };

  const toggleSeat = (seatKey) => {
    if (selectedSeats.includes(seatKey)) {
      setSelectedSeats(selectedSeats.filter(seat => seat !== seatKey));
    } else {
      setSelectedSeats([...selectedSeats, seatKey]);
    }
  };

  // Validation function
  const handleBuyNow = () => {
    if (selectedSeats.length === 0) {
      Toast.show({
        type: 'error',
        text1: 'Validation Error',
        text2: 'Please select at least one seat.',
      });
    } else {
      // Navigate to the Ticket screen if validation passes
      navigation.navigate('Ticket');
    }
  };

  return (
    <LinearGradient colors={['#8d008d', '#2b002b']} style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Ionicons name="chevron-back" size={24} color="#000" />
      </TouchableOpacity>

      <Text style={styles.header}>Choose Seat</Text>

      <View style={styles.seatContainer}>
        {rows.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.rowContainer}>
            <View style={styles.sideContainer}>
              {row.left.map((_, seatIndex) => {
                const seatKey = getSeatKey('left', rowIndex, seatIndex);
                return (
                  <TouchableOpacity
                    key={seatKey}
                    style={styles.seatButton}
                    onPress={() => toggleSeat(seatKey)}
                  >
                    <MaterialCommunityIcons
                      name="seat"
                      size={30}
                      color={selectedSeats.includes(seatKey) ? '#FF00F7' : '#fff'}
                    />
                  </TouchableOpacity>
                );
              })}
            </View>

            <View style={styles.aisle} />

            <View style={styles.sideContainer}>
              {row.right.map((_, seatIndex) => {
                const seatKey = getSeatKey('right', rowIndex, seatIndex);
                return (
                  <TouchableOpacity
                    key={seatKey}
                    style={styles.seatButton}
                    onPress={() => toggleSeat(seatKey)}
                  >
                    <MaterialCommunityIcons
                      name="seat"
                      size={30}
                      color={selectedSeats.includes(seatKey) ? '#FF00F7' : '#fff'}
                    />
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        ))}
      </View>

      <View style={styles.legendContainer}>
        <View style={styles.legendItem}>
          <MaterialCommunityIcons name="seat" size={20} color="#FF00F7" />
          <Text style={styles.legendText}>Selected</Text>
        </View>
        <View style={styles.legendItem}>
          <MaterialCommunityIcons name="seat" size={20} color="#FA1671" />
          <Text style={styles.legendText2}>Reserved</Text>
        </View>
        <View style={styles.legendItem}>
          <MaterialCommunityIcons name="seat" size={20} color="#fff" />
          <Text style={styles.legendText3}>Available</Text>
        </View>
      </View>

      <FlatList
        data={dates}
        showsHorizontalScrollIndicator={false}
        horizontal
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.dateItem, selectedDate === parseInt(item.split(' ')[0]) ? styles.selectedDate : {}]}
            onPress={() => setSelectedDate(parseInt(item.split(' ')[0]))}
          >
            <Text style={styles.dateText}>{item}</Text>
          </TouchableOpacity>
        )}
        style={styles.dateList}
      />

      <FlatList
        data={times}
        horizontal
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.timeItem, selectedTime === item ? styles.selectedTime : {}]}
            onPress={() => setSelectedTime(item)}
          >
            <Text style={styles.timeText}>{item}</Text>
          </TouchableOpacity>
        )}
        style={styles.timeList}
      />

        <TouchableOpacity style={styles.buyButton} onPress={handleBuyNow}>
          <Text style={styles.buyButtonText}>Buy Now</Text>
      </TouchableOpacity>

      <Toast ref={(ref) => Toast.setRef(ref)} />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#710093',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 8,
    borderColor: '#555',
    borderWidth: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#aaa',
    paddingBottom: 30
  },
  seatContainer: {},
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sideContainer: {
    flexDirection: 'row',
  },
  seatButton: {
    marginHorizontal: 5,
  },
  aisle: {
    width: 40, // Space between the left and right seats
  },
  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendText: {
    color: '#FF00F7',
    marginLeft: 5,
  },
  legendText2: {
    color: '#FA1671',
    left: 5,
  },
  legendText3: {
    color: '#fff',
    left: 5,
  },
  dateList: {
    marginVertical: 20,
  },
  dateItem: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    marginRight: 10,
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: '#d400d4',
  },
  selectedDate: {
    backgroundColor: '#d400d4',
  },
  dateText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  timeList: {
    marginVertical: 20,
  },
  timeItem: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    marginRight: 10,
    height: 40,
    borderWidth: 1,
    borderColor: '#d400d4'
  },
  selectedTime: {
    backgroundColor: '#FF00F7',
  },
  timeText: {
    color: '#fff',
    fontSize: 16,
  },
  buyButton: {
    backgroundColor: '#8d008d',
    borderRadius: 30,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: -70,
    marginBottom: 20,
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
});

export default SelectSeat;
