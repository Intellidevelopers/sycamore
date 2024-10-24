import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Toast from 'react-native-toast-message';

const ForgotPassword = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');


  const handleLogin = () => {
    if (!email || !password) {
      Toast.show({
        type: 'error',
        text1: 'Validation Error',
        text2: 'Email required!',
      });
      return;
    }

    // You can add further validation here (e.g., email format)

    // Proceed with login (you would typically authenticate here)
    navigation.navigate('Login');
  };

  return (
    <LinearGradient
      colors={['#8d008d', '#2b002b']}
      style={styles.container}
    >
              <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Ionicons name="chevron-back" size={24} color="#555" />
            </TouchableOpacity>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Reset Password</Text>
        <Text style={styles.subtitle}>Enter your registered email address</Text>

        {/* Email Input */}
        <Text style={styles.fullName}>Enter email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter email"
          placeholderTextColor="#B5B5B5"
          value={email}
          onChangeText={setEmail}
        />

        {/* Sign Up Button */}
        <TouchableOpacity style={styles.signUpButton} onPress={handleLogin}>
          <LinearGradient
            colors={['#8d008d', '#2b002b']}
            style={styles.gradientButton}
          >
            <Text style={styles.signUpButtonText}>Send Link</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </LinearGradient>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  formContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    margin: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    alignSelf: 'flex-start'
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    marginBottom: 24,
    alignSelf: 'flex-start'

  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#e5e5e5',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#FFF6FE',
    marginBottom: 20,
  },
  passwordContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordInput: {
    flex: 1,
  },
  eyeIcon: {
    position: 'absolute',
    right: 16,
    zIndex: 1,
  },
  signUpButton: {
    width: '100%',
    marginTop: 16,
  },
  gradientButton: {
    paddingVertical: 12,
    borderRadius: 15,
    alignItems: 'center',
  },
  signUpButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#e5e5e5',
  },
  orText: {
    marginHorizontal: 8,
    color: '#888',
    fontSize: 14,
  },
  googleButton: {
    width: '100%',
    paddingVertical: 12,
    borderColor: 'purple',
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: "#FCE3F8"
  },
  googleButtonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: "500",
  },
  loginText: {
    fontSize: 14,
    color: '#888',
  },
  loginLink: {
    color: '#FFED29',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  fullName:{
    marginBottom: 8,
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
    textAlign: "left",
    alignSelf: "flex-start"
  },
  forgotPasswordButton: {
    marginBottom: 12,
    width: '100%',
    alignSelf: 'flex-end',
    textDecorationLine: 'underline',
  },
  forgotPasswordButtonText: {
    color: '#FFED29',
    fontSize: 14,
    fontWeight: 'bold',
  },
  backButton: {
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    width: 50,
    borderWidth: 1,
    borderColor: '#555',
    marginLeft: 15,
    top: -150
  },
});
