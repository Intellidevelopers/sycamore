import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import Toast from 'react-native-toast-message';


const OrganizerSignup = ({ navigation }) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  
    // Function to validate inputs
    const handleSignUp = () => {
      if (!fullName || !email || !password || !confirmPassword) {
        Toast.show({
          type: 'error',
          text1: 'Validation Error',
          text2: 'All fields are required!',
        });
        return;
      }
  
      if (password !== confirmPassword) {
        Toast.show({
          type: 'error',
          text1: 'Validation Error',
          text2: 'Passwords do not match!',
        });
        return;
      }
  
      // Proceed with signup
      navigation.navigate('OrganizerBottomTabs');
    };
  

  return (
    <LinearGradient
      colors={['#8d008d', '#2b002b']}
      style={styles.container}
    >
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.subtitle}>Create an account</Text>

        {/* Full Name Input */}
        <Text style={styles.fullName}>Enter full name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter full name"
          placeholderTextColor="#B5B5B5"
          value={fullName}
          onChangeText={setFullName} // Update state on change
        />

        {/* Email Input */}
        <Text style={styles.fullName}>Enter email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter email"
          placeholderTextColor="#B5B5B5"
          value={email}
          onChangeText={setEmail} // Update state on change
        />

        {/* Password Input */}
        <Text style={styles.fullName}>Create password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.input, styles.passwordInput]}
            placeholder="Create password"
            placeholderTextColor="#B5B5B5"
            secureTextEntry={!passwordVisible}
            value={password}
            onChangeText={setPassword} // Update state on change
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => setPasswordVisible(!passwordVisible)}
          >
            <Icon
              name={passwordVisible ? 'eye-off' : 'eye'}
              size={24}
              color="#8d008d"
            />
          </TouchableOpacity>
        </View>

        {/* Confirm Password Input */}
        <Text style={styles.fullName}>Confirm password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.input, styles.passwordInput]}
            placeholder="Confirm password"
            placeholderTextColor="#B5B5B5"
            secureTextEntry={!confirmPasswordVisible}
            value={confirmPassword}
            onChangeText={setConfirmPassword} // Update state on change
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
          >
            <Icon
              name={confirmPasswordVisible ? 'eye-off' : 'eye'}
              size={24}
              color="#8d008d"
            />
          </TouchableOpacity>
        </View>

        {/* Sign Up Button */}
        <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
          <LinearGradient
            colors={['#8d008d', '#2b002b']}
            style={styles.gradientButton}
          >
            <Text style={styles.signUpButtonText}>Sign Up</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* Or Divider */}
        <View style={styles.orContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>Or</Text>
          <View style={styles.line} />
        </View>

        {/* Google Sign In */}
        <TouchableOpacity style={styles.googleButton}>
          <Text style={styles.googleButtonText}>Sign up with Google</Text>
        </TouchableOpacity>

        {/* Login Link */}
        <TouchableOpacity onPress={() => navigation.navigate('OrganizerLogin')}>
          <Text style={styles.loginText}>
            Already have an account? <Text style={styles.loginLink}>Login</Text>
          </Text>
        </TouchableOpacity>
      </View>
      <Toast ref={(ref) => Toast.setRef(ref)} />
      </ScrollView>
    </LinearGradient>
  );
};

export default OrganizerSignup;

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
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    marginBottom: 24,
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
    borderColor: '#8d008d',
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: "#f5f5f5"
  },
  googleButtonText: {
    color: '#8d008d',
    fontSize: 16,
    fontWeight: "500",
  },
  loginText: {
    fontSize: 14,
    color: '#888',
  },
  loginLink: {
    color: '#8d008d',
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
  content:{
    marginTop: 50
  }
});
