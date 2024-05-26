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
import Spinner from 'react-native-loading-spinner-overlay';

const Login = () => {
  const navigation = useNavigation<any>(); 
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    if (!isValidEmail(email) || !password) {
      Alert.alert('Error', 'Invalid email or password. Please check.');
      return;
    }
  
    try {
      const response = await fetch('http://143.244.129.198/tmg_projects/index.php/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        throw new Error('Invalid credentials');
      }
  
      // Assuming the API response contains a token or some indication of successful login
      const data = await response.json();
  
      // Navigate to CRM screen or perform other actions based on API response
      navigation.navigate('CRM');
    } catch (error) {
      Alert.alert('Error', 'Invalid email or password. Please try again.');
    }finally {
      setLoading(false); // Loader chhupane ke baad
    }
  };

  const handleSignup = () => {
    navigation.navigate('SignUp');
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
      <Text style={styles.title}>Login Account </Text>

      <TextInput
         style={styles.input}
         placeholder="Email Address"
         value={email}
         onChangeText={setEmail}
         placeholderTextColor="grey"
         keyboardType="email-address"
        data-name="email"
         autoCapitalize="none"
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
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login </Text>
      </TouchableOpacity>

      <View style={styles.newUserContainer}>
        <Text style={styles.new}>New User create account</Text>
        <TouchableOpacity style={styles.new} onPress={handleSignup}>
          <Text style={styles.buttonsignupText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>

      <Spinner
        visible={loading}
        textContent={'Loading...'}
        textStyle={styles.spinnerText}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 20,
    bottom: 60,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    color: '#000000',
    marginBottom: 20,
    paddingHorizontal: 10,
    bottom: 40,
  },
  button: {
    backgroundColor: '#003966',
    paddingHorizontal: 50,
    paddingVertical: 15,
    borderRadius: 5,
    bottom: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  headerImage: {
    width: '116%',
    height: '75%',
    position: 'relative',
    alignSelf: "center",
    bottom: 52,
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
    marginTop: 15,
    bottom: 20,
  },
  spinnerText: {
    color: '#fff',
  },

});

export default Login;