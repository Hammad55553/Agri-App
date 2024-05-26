// import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import SignUpScreen from './SignUp';
import LoginScreen from './Login';
import WelcomeScreen from './welcome';
import HomeScreen from './Home';
import AddFarmers from './Addfarmers';
// import { faBold } from '@fortawesome/free-solid-svg-icons';
import CRM from './CRM'
import FarmerDetails from './farmerdetails';
import WeatherScreen from './weather';
import Location from './loctaion';


type RootStackParamList = {
  Home: undefined;
  SignUp: undefined;
  Start: undefined;
  Login: undefined;
  Welcome: undefined;
  AddFarmers: undefined;
  CRM: undefined;
  Location: undefined;
  weather: undefined;
  ViewDetails: {
    farmerData: {
      name: string;
      fatherName: string;
    };
  };
  FarmerDetails: undefined;

};

const Stack = createStackNavigator<RootStackParamList>();


const getHeaderTitle = () => {
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric' };

  const formattedDate = new Date().toLocaleDateString('en-us', dateOptions as Intl.DateTimeFormatOptions);
  const formattedTime = new Date().toLocaleTimeString('en-us', timeOptions as Intl.DateTimeFormatOptions);

  return ` ${formattedDate}   ${formattedTime}`;
};

const App: React.FC = () => {
  const [currentDateTime, setCurrentDateTime] = useState<string>(getHeaderTitle());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(getHeaderTitle());
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: () => <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20, }}>{currentDateTime}</Text>,
            headerTintColor: '#000000',
            headerStyle: {
              backgroundColor: 'lightgreen',
            },
          }}
        />
        <Stack.Screen
          name="AddFarmers"
          component={AddFarmers}
          options={{
            // headerShown: false,
            title: 'Add Farmer details',
            headerTintColor: '#000000',
            // headerTitleAllowFontScaling:true,
            headerStyle: {
              backgroundColor: 'lightgreen',

            },
          }}
        />

        <Stack.Screen
          name="CRM"
          component={CRM}
          options={{
            title: 'Welcome to data collection',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: 'green',
            },
            headerLeft: () => null, // This will hide the back button
          }}
        />


        <Stack.Screen
          name="FarmerDetails"
          component={FarmerDetails}
          options={{
            title: 'Farmer Details',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: 'green',
            },
          }}
        />

        <Stack.Screen
          name="weather"
          component={WeatherScreen}
          options={{
            title: 'Pest Prediction Center',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: 'green',
            },
          }}
        />

        <Stack.Screen
          name="Location"
          component={Location}
          options={{
            title: 'Location',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: 'green',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
