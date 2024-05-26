import React, { useState } from 'react';
import {
  Alert,
  View,
  Image,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Signup = () => {
  const navigation = useNavigation<any>(); 
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [fullname, setFullName] = useState('');
  const [phone, setPhoneNumber] = useState('');

  const handleSignup = async () => {
    try {
      if (!fullname || !phone || !isValidEmail(email) || !password) {
        Alert.alert('Error', 'Please fill in all fields correctly.');
        return;
      }
  
      const response = await fetch('http://143.244.129.198/tmg_projects/index.php/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullname,
          phone,
          email,
          password,
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        Alert.alert('Sign Up', 'Your account has been successfully created!');
        navigation.navigate('Login');
      } else {
        console.error('Registration failed:', data.message);
        Alert.alert('Error', 'Registration failed. Please try again.');
      }
    } catch (error: any) {
      console.error('Registration failed:', error.message || 'Unknown error');
      Alert.alert('Error', 'Registration failed. Please try again.');
    }
  };
  
  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const handlePhoneNumberChange = (text: string) => {
    setPhoneNumber(text.replace(/[^0-9]/g, ''));
  };
  
  const isValidEmail = (email: string) => {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Image
          source={require('../../assets/MNSUAM-Logo.png')}
          style={styles.headerImage}
        />
      </View>
      <Text style={styles.title}>Create an Account</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={fullname}
        onChangeText={setFullName}
        placeholderTextColor="grey"
        data-name="fullname"
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phone}
        onChangeText={handlePhoneNumberChange}
        keyboardType="numeric"
        placeholderTextColor="grey"
        data-name="phone"
      />
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        value={email}
        onChangeText={setEmail}
        data-name="email"
        placeholderTextColor="grey"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        data-name="password"
        placeholderTextColor="grey"
      />
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>SIGN UP</Text>
      </TouchableOpacity>

      <View style={styles.newUserContainer}>
        <Text style={styles.new}>If already created account</Text>
        <TouchableOpacity style={styles.new} onPress={handleLogin}>
          <Text style={styles.buttonsignupText}>Login </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'offwhite',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 20,
    bottom: 15,
    // top:0,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    color: '#000000',
    marginBottom: 20,
    paddingHorizontal: 10,
    bottom: 25,
  },
  button: {
    backgroundColor: '#003966',
    paddingHorizontal: 50,
    paddingVertical: 15,
    borderRadius: 5,
    bottom: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  headerImage: {
    width: '100%',
    height: '90%',
    position: 'relative',
    alignSelf: "center",
    bottom: 10,

  },
  new: {
    color: '#000000',
    marginBottom: 35,
    paddingHorizontal: 2,
  },

  buttonsignupText: {
    color: 'red',
    marginLeft: 5,

  },
  newUserContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0,
    top: 12,
  },
});

export default Signup;